const numero = prompt(
    "Olá! Eu sou o Robô da Tabuada \n" +
    "Escreva um numero:"
    )

let resultado = ""

for (let fator = 1; fator <=4; fator ++) {
    resultado += " -> " + fator + " * " + numero + " = " + (numero * fator) + "\n"

}

alert(numero +" multiplicado por "+ fator + " é: " + resultado)


/*
const numero = prompt(
    "Olá! Eu sou o Robô da Tabuada \n" +
    "Quantos ingressos você vai querer? "
)

let resultado = ""

for (let i = 1; i <=20; numero++) {
     console.log("1 ingresso comprado")
     resultado++
}

alert("Você comprou" + resultado)




for (let i = 1; i < 5; i++) {
    console.log("Repetindo 5 vezes", i)
}
*/


