// //var, é uma variável declarada FORA DE UMA FUNÇÃO. ELA NÃO É MAIS UTILIZADA, POR TRAZER VÁRIOS PROBLEMAS.

// //variável é como se fosse uma caixinha/gaveta para guardar alguma informação


// //VAR é o tipo de variável
// //COR é o nome dessa variável
// //AZUL é o valor que estou dando para essa variável
// //"" estou falando que é uma string, textos, letras.. 
// // = quer dizer recebe
// // var cor = "azul"
// // console.log(cor)

// // cor = "vermelha"
// // console.log(cor)


// //let é uma variável, ela É A MAIS UTILIZADA E PREFERIDA ENTRE OS PROGRAMADORES. 
// let animal = "tatu"
// console.log(animal)

// let idade = 20 // sem ""entende que é um valor numérico
// console.log(idade)


// //Brincando com números


// let idadeHellen = 18
// let idadeRaquel = 17

// console.log(idadeHellen)

// //Não posso declarar a mesma variável duas vezes (idadeRaquel)
// // let idadeRaquel = 24
// // console.log(idadeRaquel)

// animal = "cachorro"
// console.log(animal)

// //const, é uma variável constante. ELA NÃO MUDA, ela é única.

// const bia = "milionária"
// console.log(bia)

// // bia = "rica"
// // console.log(bia)


// //Exemplo de const com CPF

// // const cpf = 123456
// // console.log(cpf)

// // cpf = 7891234
// // console.log(cpf)



//aula dia 24.11

// //Variável é uma caixinha que eu guardo alguma informação, pode ser textual (string), numérica (number), boolean(verdadeiro ou falso)

// //Let é o tipo de variável que é MAIS UTILIZADA, Consigo reutilizar.


// //nomes de variáveis NÃO PODEM começar com números e símbolos, exceto: $ e _
// let $cor = "verde" 
// let _cor = "azul"
// let cor = "vermelho"
// let corNova = "cinza"

// //console.log exibe uma mensagem no console do navegador.
// console.log($cor)
// console.log(_cor)
// console.log(cor)
// console.log(corNova)

// console.log(typeof $cor)


// cor = "amarelo"
// console.log(cor)

// //const é uma variável constante, ELA NÃO MUDA. Não consigo reutilizar.

// const dispositivo = "celular"
// console.log(dispositivo)

// // dispositivo = 'tablet'
// // console.log(dispositivo)


// //Tipos de valores: 
// //null: tipo de valor nulo, inesxitente. 

// let x = null;
// console.log(x)

// //undefined = tipo de valor que ainda não foi definido
// let y;
// console.log(y)


// //NaN = Não é um valor numérico

// let num = 5; //number , numérico
// let msg = "Hello Word"; //string, texto
// let resp = num/msg
// console.log(resp)


// //uma variável vazia
// let img = ""
// console.log(img)




// //templateString - forma mais "elegante" de escrever string

//  `${}` o templateString SEMPRE vai ser usado com crase ``SEMPRE!!

// let aluna1 = "Evelyn"; //guardando string com "" aspas duplas
// let aluna2 = 'Joy'; //guardando string com '' aspas simples
// let aluna3 = `Cris` //guardando string com ``crase


// console.log(aluna1)
// console.log(aluna2)
// console.log(aluna3)


// //Esse console.log está mostrando uma texto criado, juntando com as variáveis existente. Lembrando que o console.log NÃO SALVA NADA, ele só mostra se a variável ou linha de código está funcioando ou não.
// console.log(`Essas são as alunas do vnw: ${aluna1}, ${aluna2} e ${aluna3}`)


// // //Essa variável está guardando as três variáveis aluna1, aluna2 e aluna3.
// let alunas = `${aluna1} ${aluna2} ${aluna3}`

// // console.log(alunas)

// //true (verdadeiro) / false (falso) - boolean

// let legumes = "cenoura" //valor textual , string
// let _legumes = 'batata' //valor textual , string
// let $legumes = `abóbora` //valor textual , string
// let _batata = true //valor boolean
// let chuchu = false //valor boolean
// let niver = 1475 //valor number - numérico
// let _niver = '1475' //valor textual , string

// //saber o tipo da variável
//  console.log(typeof legumes)
// console.log(typeof _legumes)
//  console.log(typeof $legumes)
//  console.log(typeof _batata)
// console.log(typeof chuchu)
//  console.log(typeof niver)
//  console.log(typeof _niver)




// //Operadores de comparações  
// let numero = 2 //tipo number
// console.log(typeof numero)

// // = atribuição de tipo/recebe 
// console.log(numero)

// // == verificação de valor (verifica se o 2 é o mesmo)
// console.log(numero ==  2) //retornou true pq o valor é 2
// console.log (numero == 4) //retornou false pq o valor NÃO é 2

// // === verificação de tipo e valor - Estritamente igual  (verifica se é o 2 e se é number)
// console.log(numero === 2) //retornou true pq o valor e o tipo são iguais
// console.log(numero === "2") //retornou false pq o valor é uma string "2"

// // != verifica se o valor comparado é diferente (verificia se o 2 é  diferente de um outro valor)

// console.log(numero != 5) // true, pq o valor 5 é diferente do valor 2

// console.log(numero != "cachorro") // true, pq o valor "cachorro" é diferente do valor 2

// // !== verifica se o valoré diferente (verifica se o 2 é diferente de um outro valor , e se ele também é diferente de um number)

// 2 é diferente de 3? 
console.log(numero !== 3) //true, pq o 2 é diferente de 3

// 2 é diferente de 2? 
console.log(numero !== 2) //é falsa essa informação. Pq 2 é igual a 2.


// console.log(numero !== "gato")

// let animal = "pato"

// console.log ("pato" == "galinha")


// //  > maior que 

// let number = 10

// console.log(number > 3) //true pq number(10) é maior que valor 3 
console.log (number > 10) //false pq o number(10) não é maior que 10.

// // < menor que
// console.log(number < 3) // false pq o number 10 NÃO é menor que o valor 3


// // >= maior ou igual 
// console.log(number >= 10) //true pq o number 10 é IGUAL ao valor 10 

// console.log(number >= 18) // false pq o number 10 é MENOR que o valor 18 

// console.log(number >= 9) //true pq o number 10 é MAIOR que o valor 9

// // <= menor ou igual 
// console.log(number <= 4) //false pq o number 10 é MAIOR que o valor 4

// console.log(number <= 32) //true pq o number 10 é MENOR que o valor 32




//-----------------CONDIÇÕES

//IF (se): A condição If (quer dizer SE) nos permite tomar uma decisão caso a declaração seja verdadeira (true)

//Estrutura

// if (condição) {
//     console.log("retorno")
// }

//Se a condição for verdadeira, executar a tarefa

let idade = 2

if(idade >= 18){
    console.log("Você já é velho")
}


//Exemplo com if e else

let nascimento = 1901

if(nascimento === 1998){
console.log("Sou novinha")
} else{
    console.log("Tô veinha")
}
//------------------------------

let $nascimento = 18

if(nascimento >= 18){
console.log("Você pode acessar o zé delivery")
} else { //senão, caso a resposta for negativa, cai aqui. 
    console.log("Vai tomar toddynho")
}


//------------------------------

let segundaFeira = false

if(segundaFeira == true){
console.log("Uhull segundou")
}else{
    console.log("Que venha sexta!!")
}




//ELSE (senão): Ele vai ler o if primeiro, senão for verdade, vai executar o else. 

// //Estrutura
// if(condição){
//     // executa isso caso a mensagem seja verdadeira
// } else {
//     //executa isso caso a mensagem não seja verdadeira
// }

let idade2 = 10

if(idade2 >= 18){
console.log("Você já é velho cascudo.")
}else{
console.log("Volte para a casa")
}



//Else if 

let dia = 27

if(dia === 0){
    console.log("Domingo")
} else if(dia === 1){
    console.log("Segunda")
} else if(dia === 2) {
    console.log("Terça")
}else if(dia === 3){
console.log("Quarta")
} else{
    console.log("dia inválido")
}


// Bônus: Em valores binários 0 é false e 1 é true


let animal2 = "cachorro"

if(animal2 == "gato") {
console.log("Miau")
} else if(animal2 == "papagaio"){
console.log("Parabéns pra você")
} else if (animal2 == "pato"){
    console.log("qua qua ")
} else{
    console.log("Não adivinhou o animal")
}