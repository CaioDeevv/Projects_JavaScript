// EXPLICAÇÃO DE ARRAYS

/*
  Em programação de computadores, um arranjo é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave.

 
  Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice.
*/   

const arr = ["Campinas","Belo Horizonte","São Paulo","Sumaré","Hortolândia"]

//O método "push" adiciona um novo elemnto ao final da lista. Ex: Foi adicionado ao final da lista a cidade de New York.

arr.push("New York")

console.log(arr)


//O método "unshift" adiciona um novo elemnto ao inicio e final da lista. Ex: Foi adicionado ao incio e final da lista a cidade de New York.

arr.unshift("New York")

console.log(arr)


//O método "pop" remove o ultimo ao final da lista. Ex: Foi removido ao final da lista a cidade de New York.

let tamanho = arr.pop()

console.log(tamanho)
console.log(arr)


//O método "shift" remove o primeiro elemento da lista. Ex: Foi removido ao inicio da lista a cidade de New York.

tamanho = arr.shift()

console.log(tamanho)
console.log(arr)


//O método "includes" verifica a existencia de um elemento dentro da lista. Ex: Campinas esta dentro da lista, iremos usar o .include para ter certeza se isso é verdadeiro ou falso.

let consulta = arr.includes("Campinas")

console.log(consulta)


//O método "indexOf" retorna o indice/posição de um determindado elemento. Ex: Qual é a indice/posição de Campinas na lista? Ou seja, onde esta dentro da lista  (0, 1, 2, 3). O retorno da consulta é 2. Esta correto!

let indice = arr.indexOf("São Paulo")

console.log(indice)


//O método "slice" retorna uma copia dos elementos escolhidos, como se fizesse um corte, mas é apenas uma copia. Ex: ["Campinas","Belo Horizonte","São Paulo","Sumaré","Hortolândia"]. Quero a copia do 0 ao 3; Sumaré e hortolândia fica de fora e a lista não é alterada com esses novos valores. O mesmo vale para o inverso, apenas adicionamos número negativo.

let copia = arr.slice(0, 3)
let inverso = arr.slice(-2)

console.log(arr)
console.log(copia)
console.log(inverso)


//O método "concat" concatena os elementos, também é possivel adicionar novos elementos. Ex: Vamos concatenar a variavel "copia" com a outra variavel "inverso", e adicionar novamente a cidade de New York. Vou adiconar estes valores em uma nova variavel!

const concatenacao = copia.concat(inverso, "New York")

console.log(concatenacao)


//O método "splice" remove/substitui uma elemento atraves de uma determinda posição (0, 1, 2, 3), pergunta quantos elementos serão removidos e permite substituir e adicionar novos elementos. Ex: Vamos remover o elemento da posição 3(Sumaré) da variavel "arr" e substitur para Copacabana e adicionar Paris como extra.

const ElementoSubstituido = concatenacao.splice(indice, 1, "Copacabana", "Paris")

console.log(concatenacao)
console.log(ElementoSubstituido)


//O método "length" exibe o comprimento de uma array. Ex: Vamos utilizar o laço de repetição para verificar o tamanho do array "concatenacao" e exibir uma texto auxiliar.

for (let i = 0; i < concatenacao.length; i++) {
  const elemento = concatenacao[i]
  console.log(elemento + "encontra-se na posição" + i)
}