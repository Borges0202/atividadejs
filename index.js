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

    document.getElementById(resultadoArea).innerText = resultadoArea;
}

function dobroMetade() {
    let DMbvalor = document.getElementById("DMvalor").value;

    let dobro = DMbvalor * 2;

    let metade = DMbvalor / 2;

    let resultadoDobro = "";

    let resultadoMetade = "";

    letresultadoDobro = "dobro:" + dobro.toFixed(2);

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

    let resultadoIdade = "";

    if (mesAtual < mesNascimento || mesAtual === mesNascimento && anoAtual.getDate() < anoNascimento.getDate()) {
        idade--;
    }


    document.writeln("Idade:" + idade);
}

function gorgeta() {
    let conta = document.getElementById("conta").value;

    let total = conta * 1.10;

    let resultadoGorgeta = "";

    document.writeln("Valor final:R$" + total);
}

function parImpar() {
    let PIvalor = document.getElementById("PIvalor").value;

    let resultadoParImpar = "";

    if (PIvalor % 2 !== 0) {
        document.writeln("o numero é Impar");
    } else {
        document.writeln("o numero é par")
    }
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
        if (idade < 18) {
            document.writeln("Você é de menor")
        }
    } else {
        document.writeln("Você é de maior")
    }
}

function confirmarSenha() {

    let senhaUSR = Number(document.getElementById("senhaUSR").value);

    let senhaCorreta = 1234;

    let resultadoSenha = "";

    if (senhaUSR === senhaCorreta) {
        document.writeln("Senha correta");
    } else {
        document.writeln("Senha incorreta")
    }
}

function compararNumeros() {

    let numeroA = Number(document.getElementById("numeroA").value);

    let numeroB = Number(document.getElementById("numeroB").value);

    let resultadoCompararNumero = "";

    if (numeroA > numeroB) {
        document.writeln("Numero A maior")
    } else if (numeroA < numeroB) {
        document.writeln("Numero B maior")
    } else {
        document.writeln("Numueros iguais")
    }

}

function desconto() {

    let valorCompra = Number(document.getElementById("valorCompra").value);

    let resultadoDesconto = "";

    if (valorCompra > 100) {
        valorCompra = valorCompra * 0.90;
        document.writeln("Total:R$" + valorCompra);
    } else {
        document.writeln("Total:R$" + valorCompra);
    }

}

function calculaIMC() {

    let peso = Number(document.getElementById("peso").value);

    let altura = Number(document.getElementById("alturaIMC").value);

    resultadoIMC = "";

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.writeln("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    let imc = peso / (altura * altura);

    if (imc <= 18.5) {
        document.writeln("IMC:" + imc + " - Magreza")
    }
    else if (imc > 18.5 && imc <= 24.9) {
        document.writeln("IMC:" + imc + " - Saudavel")
    }
    else if (imc > 24.9 && imc <= 29.9) {
        document.writeln("IMC:" + imc + " - Sobrepeso")
    }
    else if (imc > 29.9 && imc <= 34.9) {
        document.writeln("IMC:" + imc + " - Obesidade")
    }
    else if (imc > 34.9 && imc <= 39.9) {
        document.writeln("IMC:" + imc + " - Obesidade severa")
    }
    else {
        document.writeln("IMC:" + imc + " - Obesidade mórbida")
    }
}


function verificadorTriangulo() {

    resultadoTriangulo = "";

    let ladoA = Number(document.getElementById("ladoA").value);

    let ladoB = Number(document.getElementById("ladoB").value);

    let ladoC = Number(document.getElementById("ladoC").value);

    if (ladoA === ladoB && ladoB === ladoC) {
        document.writeln("equilatero")

    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        document.writeln("escaleto")

    } else {
        document.writeln("isoceles")
    }

}

function nadadorIdade() {
    let anoNadador = new Date(document.getElementById("anoNadador").value);

    let anoInscricao = new Date(document.getElementById("anoInscricao").value);

    let idadeNadador = anoInscricao.getFullYear() - anoNadador.getFullYear();

    let mesNadador = anoNadador.getMonth();

    let mesInscricao = anoInscricao.getMonth();

    resultado = "";

    if (mesInscricao < mesNadador || mesInscricao === mesNadador && anoInscricao.getDate() < anoNadador.getDate()) {
        idadeNadador--;
    }

    if (idadeNadador > 4 && idadeNadador < 8) {
        document.writeln("Infantil A")
    }
    else if (idadeNadador > 7 && idadeNadador < 11) {
        document.writeln("Infantil B")
    }
    else if (idadeNadador > 10 && idadeNadador < 18) {
        document.writeln("Juvenil")
    }
    else if (idadeNadador > 17) {
        document.writeln("Adulto")
    }


}


function verificadorNumero() {

    let valorA = Number(document.getElementById("valorA").value);

    if (valorA > 0) {
        document.writeln("positivo")

    } else if (valorA < 0) {
        document.writeln("negativo")

    } else {
        document.writeln("zero")
    }

}


function conversorTemperatura() {

    let celcius = Number(document.getElementById("celcius").value);

    let fahrenheint = (celcius * 1.8) + 32;

    let resultadoTemperatura = "";

    if (fahrenheint > 100) {
        resultado = fahrenheint.toFixed(2) + "? fahrenheint ta quente em bixo"
    } else {
        resultadoTemperatura = fahrenheint.toFixed(2) + "fahrenheint"
    }

    document.getElementById("resultadoTemperatura").innerText = resultadoTemperatura;
}

