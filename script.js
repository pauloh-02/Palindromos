/*
let numero = 0, i 
let resultado = ""

numero = parseFloat(prompt("Digite um número que iremos multiplicar do 1 até o 20."))

for(i = 1; i <= 20; i++){
    resultado += numero + " x " + i + " = " + (numero * i) + "\n" 
}

alert(
    "A tabuada do " + numero + " até o 20 é:\n" + resultado 
)
*/
const palavra = prompt("Escreva uma palavra")
let palavrainvertida

palavrainvertida = palavra.split("").reverse().join("")

if(palavrainvertida === palavra){
    alert("A palavra " + palavra + " é um palíndromo")
} else{
    alert("A palavra " + palavra + " não é um palíndromo, pois invertendo fica\n" + palavrainvertida)
}