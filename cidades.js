const nome = prompt("Qual é o seu nome, turista?")
let cidades = "";
let contagem = 0;

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

    do {
        let cidade = prompt("Qual cidade você visitou?")
        cidades += "-" + cidade + "\n"
        contagem++
        continuar = prompt("Você já visitou outra cidade? (Sim/Não)")
    } while (continuar === "Sim")

alert (
    "\nNome do Turista:" + " " + nome +
    "\nQuantidade de cidades visitadas:" + " " + contagem +
    "\nCidades:\n" + cidades 
    
)

