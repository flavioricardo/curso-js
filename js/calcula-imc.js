var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);

    var pesoIsValido = validaPeso(peso);
    var alturaIsValido = validaAltura(altura);

    if (!pesoIsValido) {
        tdPeso.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaIsValido) {
        tdAltura.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    }

    var tdIMC = paciente.querySelector('.info-imc');

    if (pesoIsValido && alturaIsValido) {
        tdIMC.textContent = imc;
    } else {
        tdIMC.textContent = 'Altura e/ou peso inválidos!';
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}