function calculadora(numero1, numero2, operador){
    //codigo function fork github//
    let resultado 
    let num1 = parseint(numero1)
    let num2 = parseint(numero2)
    
switch (operador) {
case "+":
    resultado = num1 + num2
    break;
case "-":
    resultado = num1 - num2
    break
case "/":
    resultado = num1 + num2
    break
case "*":
   resultado  = num1 * num2
   break
case "e":
    let contador = 1
    resultado = num1 * num1
    while (contador < num2 - 1){
        resultado = resultado * num1
        contador++
    }
    break
}

if (resultado == undefined|| resutlado > 1000000)
    resultado = "erro"
return resultado

}