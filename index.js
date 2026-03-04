/*
let nome = "Gertrudes";
let idade = "31";
document.write("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
*/


/*
const preco = 100;
const desconto = 20;

document.writeln("Preço original:" + preco);
document.writeln("<br>")
document.writeln("desconto:" + desconto);
document.writeln("<br>")
document.writeln("total:" + (preco - desconto));
*/


/*
let nome = "Mario";
let nota1 = 8.5;
let nota2 = 5.5;
let nota3 = 10.0;

let media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    document.writeln("Resultado para :" + nome);
    document.writeln("<br>");
    document.writeln("Mèdia:" + media.toFixed(1));
    document.writeln("<br>");
    document.writeln("parabens voce foi aprovado");
    document.writeln("<br>");
} else {
    document.writeln("Resultado para :" + nome);
    document.writeln("<br>");
    document.writeln("Mèdia:" + media.toFixed(1));
    document.writeln("<br>");
    document.writeln("parabens voce foi reaprovado");
    document.writeln("<br>");
}
*/

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
        if(idade < 18){
            document.writeln("Você é de menor")
        }
    }else {
        document.writeln("Você é de maior")
    }
}

function confirmarSenha() {

    let senhaUSR = document.getElementById("senhaUSR").value;

    let senhaCorreta = 1234;


    if (senhaUSR === senhaCorreta) {
        document.writeln("Senha incorreta");
    } else {
        document.writeln("Senha correta")
    }
}
