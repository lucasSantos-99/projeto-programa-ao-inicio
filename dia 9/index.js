let nome = prompt("digite seu nome")
let  idade = parseInt(prompt("digite a sua idade"))
let  peso = prompt("digite seu peso em KG")
let  altura = prompt("digite sua altura")
let  profissão = prompt("digite sua profissão")

    console.log("ola" + nome + "voce tem" + idade + "anos, é" + profissão + ", tem " + altura + "m de altura e peso" + peso + "kg") 

// verificando idade 

if (idade >= 18){
    console.log("esta liberado para tomar umas geladas")
} else {
    console.log("sem gelada pra voce")
}

//descobrindo idade fracionada
let meses = idade * 12
let semanas = idade  * 52
let dias = idade * 365

console.log ("sua idade em mes é:" + meses)
console.log ("sua idade em semanas é;" * semanas)
console.log ("sua idade em dias é:" + dias)

// descobrindo imc
let imc = peso / (altura * altura)

if (imc < 18,5){
    console.log ("magreza")
}else if (imc >= 18,5 && imc <= 24,9){
    console.log ("normal")
} else if (imc >=25 && imc <= 30){
    console.log ("sobrepeso")
} else {
    console.log("obesidade")
} 

// descobrindo  o ano de  nascimento 
let anoAtual = 2025
let anoNasc = anoAtual - idade
    console.log (" voce nasceu no ano de" + anoNasc)

// ixibindo anos e idades

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVidido = anoNasc; anoVidido <= anoAtual; anoVivido ++){
    console.log (anoVidido + " - " + idadeAtual +  "anos de idade")
    idadeAtual ++
}

// loop dowhile 
do {
    // inserir  lógica anterior 
    let continuar  = prompt("deseja inserir os dados novamente? (s/n)")
} while (continuar == "s" )