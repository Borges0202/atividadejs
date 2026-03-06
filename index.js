function conversorMoeda() {
    let real = document.getElementById("real").value;

    let dolar = real * 5;

    document.writeln("Valor em dolar:" + dolar);
}



function calculaArea() {

    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let area = base * altura;

    document.writeln("Valor da area:" + area);
}

function dobroMetade() {
    let DMbvalor = document.getElementById("DMvalor").value;

    let dobro = DMbvalor * 2;

    let metade = DMbvalor / 2;

    document.writeln("dobro:" + dobro);
    document.writeln("metade:" + metade);
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


    document.writeln("Idade:" + idade);
}

function gorgeta() {
    let conta = document.getElementById("conta").value;

    let total = conta * 1.10;

    document.writeln("Valor final:R$" + total);
}

function parImpar() {
    let PIvalor = document.getElementById("PIvalor").value;


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


    if (senhaUSR === senhaCorreta) {
        document.writeln("Senha correta");
    } else {
        document.writeln("Senha incorreta")
    }
}

function compararNumeros() {

    let numeroA = Number(document.getElementById("numeroA").value);

    let numeroB = Number(document.getElementById("numeroB").value);

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

    if (valorCompra > 100) {
        valorCompra = valorCompra * 0.90;
        document.writeln("Total:R$" + valorCompra);
    } else {
        document.writeln("Total:R$" + valorCompra);
    }

}

function calculaIMC() {

    let peso = Number(document.getElementById("peso").value);

    let altura = Number(document.getElementById("altura").value);

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
        document.writeln("IMC:" + imc + " - Obesidade severa")
    }
}
/* case "imc <= 18.5":
document.writeln("IMC:" + imc + "Magreza")
break;

 case "imc > 18.5 && imc <= 24.9 ":
document.writeln("IMC:" + imc + "Saudavel")
break;

 case "imc > 24.9 && imc <= 29.9 ":
document.writeln("IMC:" + imc + "Sobrepeso")
break;

 case "imc > 29.9 && imc <= 34.9 ":
document.writeln("IMC:" + imc + "Obesidade")
break;

 case "imc > 34.9 && imc <= 39.9 ":
document.writeln("IMC:" + imc + "Obesidade severa")
break;

 case "imc => 40":
document.writeln("IMC:" + imc + "Obesidade Morbida")
break;

 default:
document.writeln("Campos preenchidos de forma incorreta");
*/

