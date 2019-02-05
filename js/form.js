var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)) {
        $.notify({
            type: "error",
            text: "Paciente inválido!",
            close: true
        });
        return;
    }

    var tabelaPacientes = document.querySelector('#tabela-pacientes');
    tabelaPacientes.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var pacienteTd = document.createElement('td');
    pacienteTd.textContent = dado;
    pacienteTd.classList.add(classe);

    return pacienteTd;
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}