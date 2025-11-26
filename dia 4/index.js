let  nome 
let  idade 
let temCarta = false
let temCarro = false

// PEDINDO INFORMAÇÕES AO USUÁRIO 
nome = prompt ("digite seu nome")
idade = parseInt(prompt("digite sua idade"))
let opcaocarta = prompt("voce tem carta de motorista? (*sim/nao)")

if (opcaocarta == "sim") {
    temCarta = true
}
let opcaocarro = prompt ("voce tem carro? (sim/nao")
if (opcaocarro == "sim"){
    temCarro = true
}

// exibindo mensagem no console
if ( idade < 18 || !temCarta) {
    console.log(nome + ", voce nao pode dirigir")
} else if(idade >= 18 && temCarta && !temCarro) {
console.log(nome * ", voce pode dirigir mas nao tem um carro")
}