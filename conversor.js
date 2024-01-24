const metros = parseFloat(prompt("Digite um valor em metros: "))

const unidade = prompt(
"Para qual unidade de medida deseja converter?: " +
"\n1. milímetro (mm)" + 
"\n2. centímetro (cm)" + 
"\n3. decímetro (dm)" +
"\n4. decâmetro (dam)" +
"\n5. hectômetro (hm)" +
"\n6. quilômetro (km)"
)

switch (unidade) {
    case "1":
        alert(metros + " " + "metros convertido em milímetro" + " " + "é" + " " + metros * 1000 +" "+ "milímetro")
        break;
    case "2":
        alert(metros + " " + "convertido em centímetro" + " " + "é" + " " + metros * 100 +" "+ "centímetro")
        break;
    case "3":
        alert(metros + " " + "convertido em decímetro" + " " + "é" + " " + metros * 10 +" "+ "decímetro")
        break;
    case "4":
        alert(metros + " " + "convertido em decâmetro" + " " + "é" + " " + metros / 10 +" "+ "decâmetro")
        break;
    case "5":
        alert(metros + "" + "convertido em hectômetro" + "" + "é" + " " + metros / 100 +" "+ "hectômetro")
        break;
    case "6":
        alert(metros + "" + "convertido em quilômetro" + "" + "é" + " " + metros / 1000 +" "+ "quilômetro")
        break;
    default:
        alert("Incorreto, insira um valor! ")
} 

