function conversorMoeda() {
    let real = document.getElementById("real").value;

    let dolar = real * 5;

    let resultadoMoeda = "";

    resultadoMoeda = "Valor em dolar:" + dolar.toFixed(2);

    document.getElementById("resultadoMoeda").innerText = resultadoMoeda;
}



function calculaArea() {

    let base = document.getElementById("base").value;

    let altura = document.getElementById("altura").value;

    let area = base * altura;

    let resultadoArea = "";

    resultadoArea = "Valor da area:" + area.toFixed(2);

    document.getElementById("resultadoArea").innerText = resultadoArea;
}

function dobroMetade() {
    let DMbvalor = document.getElementById("DMvalor").value;

    let dobro = DMbvalor * 2;

    let metade = DMbvalor / 2;

    let resultadoDobro = "";

    let resultadoMetade = "";

    resultadoDobro = "dobro:" + dobro.toFixed(2);

    resultadoMetade = "metade:" + metade.toFixed(2);

    document.getElementById("resultadoDobro").innerText = resultadoDobro;

    document.getElementById("resultadoMetade").innerText = resultadoMetade;
}

function calculaIdade() {

    let anoAtual = new Date(document.getElementById("anoAtual").value);

    let anoNascimento = new Date(document.getElementById("anoNascimento").value);

    let idade = anoAtual.getFullYear() - anoNascimento.getFullYear();

    let mesAtual = anoAtual.getMonth();

    let mesNascimento = anoNascimento.getMonth();

    if (mesAtual < mesNascimento || mesAtual === mesNascimento && anoAtual.getDate() < anoNascimento.getDate()) {
        idade--;
    }

    let resultadoIdade = "Idade:" + idade;

    document.getElementById("resultadoIdade").innerText = resultadoIdade;
}

function gorgeta() {
    let conta = document.getElementById("conta").value;

    let total = conta * 1.10;

    let resultadoGorgeta = "Valor final:R$" + total;

    document.getElementById("resultadoGorgeta").innerText = resultadoGorgeta;
}

function parImpar() {
    let PIvalor = document.getElementById("PIvalor").value;

    let resultadoParImpar = "";

    if (PIvalor % 2 !== 0) {
        resultadoParImpar = "o numero é Impar";
    } else {
        resultadoParImpar = "o numero é par";
    }

    document.getElementById("resultadoParImpar").innerText = resultadoParImpar;
}

function maioridade() {

    let atual = new Date(document.getElementById("atual").value);

    let nascimento = new Date(document.getElementById("nascimento").value);

    let idade = atual.getFullYear() - nascimento.getFullYear();

    let mesAtual = atual.getMonth();

    let mesNascimento = nascimento.getMonth();

    let resultadoMaioridade = "";

    if (mesAtual < mesNascimento || mesAtual === mesNascimento && atual.getDate() < nascimento.getDate()) {
        idade--;
    }
    if (idade < 18) {
        resultadoMaioridade = "Você é de menor";
    } else {
        resultadoMaioridade = "Você é de maior";
    }

    document.getElementById("resultadoMaioridade").innerText = resultadoMaioridade;


}

function confirmarSenha() {

    let senhaUSR = Number(document.getElementById("senhaUSR").value);

    let senhaCorreta = 1234;

    let resultadoSenha = "";

    if (senhaUSR === senhaCorreta) {
        resultadoSenha = "Senha correta";
    } else {
        resultadoSenha = "Senha incorreta";
    }

    document.getElementById("resultadoSenha").innerText = resultadoSenha;
}

function compararNumeros() {

    let numeroA = Number(document.getElementById("numeroA").value);

    let numeroB = Number(document.getElementById("numeroB").value);

    let resultadoCompararNumero = "";

    if (numeroA > numeroB) {
        resultadoCompararNumero = "Numero A maior";
    } else if (numeroA < numeroB) {
        resultadoCompararNumero = "Numero B maior";
    } else {
        resultadoCompararNumero = "Numueros iguais";
    }

    document.getElementById("resultadoCompararNumero").innerText = resultadoCompararNumero;

}

function desconto() {

    let valorCompra = Number(document.getElementById("valorCompra").value);

    let resultadoDesconto = "";

    if (valorCompra > 100) {
        valorCompra = valorCompra * 0.90;
        resultadoDesconto = "Total:R$" + valorCompra;
    } else {
        resultadoDesconto = "Total:R$" + valorCompra;
    }

    document.getElementById("resultadoDesconto").innerText = resultadoDesconto;

}

function calculaIMC() {

    let peso = Number(document.getElementById("peso").value);

    let altura = Number(document.getElementById("alturaIMC").value);

    resultadoIMC = "";

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoIMC = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    let imc = peso / (altura * altura);

    if (imc <= 18.5) {
        resultadoIMC = "IMC:" + imc.toFixed(2) + " - Magreza";
    }
    else if (imc > 18.5 && imc <= 24.9) {
        resultadoIMC = "IMC:" + imc.toFixed(2) + " - Saudavel";
    }
    else if (imc > 24.9 && imc <= 29.9) {
        resultadoIMC = "IMC:" + imc.toFixed(2) + " - Sobrepeso";
    }
    else if (imc > 29.9 && imc <= 34.9) {
        resultadoIMC = "IMC:" + imc.toFixed(2) + " - Obesidade";
    }
    else if (imc > 34.9 && imc <= 39.9) {
        resultadoIMC = "IMC:" + imc.toFixed(2) + " - Obesidade severa";
    }
    else {
        resultadoIMC = "IMC:" + imc.toFixed(2) + " - Obesidade mórbida";
    }

    document.getElementById("resultadoIMC").innerText = resultadoIMC;
}


function verificadorTriangulo() {

    resultadoTriangulo = "";

    let ladoA = Number(document.getElementById("ladoA").value);

    let ladoB = Number(document.getElementById("ladoB").value);

    let ladoC = Number(document.getElementById("ladoC").value);

    if (ladoA === ladoB && ladoB === ladoC) {
        resultadoTriangulo = "equilatero";

    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        resultadoTriangulo = "escaleno";

    } else {
        resultadoTriangulo = "isoceles";
    }

    document.getElementById("resultadoTriangulo").innerText = resultadoTriangulo;

}

function nadadorIdade() {
    let anoNadador = new Date(document.getElementById("anoNadador").value);

    let anoInscricao = new Date(document.getElementById("anoInscricao").value);

    let idadeNadador = anoInscricao.getFullYear() - anoNadador.getFullYear();

    let mesNadador = anoNadador.getMonth();

    let mesInscricao = anoInscricao.getMonth();

    resultadoNadador = "";

    if (mesInscricao < mesNadador || mesInscricao === mesNadador && anoInscricao.getDate() < anoNadador.getDate()) {
        idadeNadador--;
    }

    if (idadeNadador > 4 && idadeNadador < 8) {
        resultadoNadador = "Infantil A";
    }
    else if (idadeNadador > 7 && idadeNadador < 11) {
        resultadoNadador = "Infantil B";
    }
    else if (idadeNadador > 10 && idadeNadador < 18) {
        resultadoNadador = "Juvenil";
    }
    else if (idadeNadador > 17) {
        resultadoNadador = "Adulto";
    }

    document.getElementById("resultadoNadador").innerText = resultadoNadador;

}


function verificadorNumero() {

    let valorA = Number(document.getElementById("valorA").value);

    resultadoVerificaNumero = "";

    if (valorA > 0) {
        resultadoVerificaNumero = "positivo";

    } else if (valorA < 0) {
        resultadoVerificaNumero = "negativo";

    } else {
        resultadoVerificaNumero = "zero";
    }

    document.getElementById("resultadoVerificaNumero").innerText = resultadoVerificaNumero;
}


function conversorTemperatura() {

    let celcius = Number(document.getElementById("celcius").value);

    let fahrenheint = (celcius * 1.8) + 32;

    let resultadoTemperatura = "";

    if (fahrenheint > 100) {
        resultadoTemperatura = fahrenheint.toFixed(2) + " fahrenheint? ta quente em bixo"
        alert("QUENTE");
    } else {
        resultadoTemperatura = fahrenheint.toFixed(2) + "fahrenheint"
    }

    document.getElementById("resultadoTemperatura").innerText = resultadoTemperatura;
}

