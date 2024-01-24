let opcao = ""

do {
    opcao = prompt("Escolha uma opção:" +
    "\n1. Primeira opção" +
    "\n2. Segunda opção" +
    "\n3. Terceira opção" +
    "\n4. Quarta opção" +
    "\n5. Quinta opção"
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a Primeira opção")
            break
        case "2":
            alert("Você escolheu a Primeira opção")
            break
        case "3":
            alert("Você escolheu a Primeira opção")
            break
        case "4":
            alert("Você escolheu a Primeira opção")
            break
        case "5":
            alert("Você escolheu encerrar.")
            break
        default:
            alert("Encerrando...")
    }
} while(opcao !== 5)