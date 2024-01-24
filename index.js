const atacante = prompt("Digite o nome do atacante: ")
const PoderDeAtaque = parseFloat(prompt("Digite o poder de ataque: "))

const defensor = prompt("Digite o nome do defensor: ")
const PontoDeVida = parseFloat(prompt("Digite a quantidade de pontos de vida: "))
const PoderDeDefesa = parseFloat(prompt("Digite a quantidade de poder de defesa: "))
const PossuiEscudo = prompt("Ele possui escudo (Sim/Não): ")

let DanoCausado = 0

if (PoderDeAtaque > PoderDeDefesa && PossuiEscudo === "Não") {
    DanoCausado = PoderDeAtaque - PoderDeDefesa
} else if (PoderDeAtaque > PoderDeDefesa && PossuiEscudo === "Sim") {
    DanoCausado = (PoderDeAtaque - PoderDeDefesa) / 2
} else if (PoderDeAtaque <= PoderDeDefesa) {
    DanoCausado = 0
}

DanoCausado -= PontoDeVida

alert (atacante + " " +"causou" + " " + DanoCausado + " " + "ponto de dano em" + " " +  defensor)
alert(
    atacante + "poder de ataderque: " + PoderDeAtaque + "\n \n" + 
    defensor + "\nPonto de vida: " + PontoDeVida +
    "\n poder de defesa: " + PoderDeDefesa + "\possui escudo: " + escudo
)


switch (carro) {
    case "a":
        alert("Carros Teste:")
}
