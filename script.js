
const palavra = prompt("Escreva uma palavra")
let palavrainvertida

palavrainvertida = palavra.split("").reverse().join("")

if(palavrainvertida === palavra){
    alert("A palavra " + palavra + " é um palíndromo")
} else{
    alert("A palavra " + palavra + " não é um palíndromo, pois invertendo fica\n" + palavrainvertida)
}
