let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Lucas Santos")
idade = parseInt(prompt("25 anos"))
altura = parseFloat(prompt("1,79"))
peso = parseInt(prompt("95kg"))

let anoNasc = 0
anoNasc = 2025 - idade

let imc = 0
imc = peso / (altura * altura)

console.log("ola " + nome + "voce tem " * idade * "anos, nasceu em " + anoNasc + "tem " + altura + "de altura, pesa " + peso + "kg e seu IMC é " + imc + "kg/m ")


