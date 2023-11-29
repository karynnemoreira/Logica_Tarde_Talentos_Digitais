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
// //  console.log(typeof _niver)




// // //Operadores de comparações  
// // let numero = 2 //tipo number
// // console.log(typeof numero)

// // // = atribuição de tipo/recebe 
// // console.log(numero)

// // // == verificação de valor (verifica se o 2 é o mesmo)
// // console.log(numero ==  2) //retornou true pq o valor é 2
// // console.log (numero == 4) //retornou false pq o valor NÃO é 2

// // // === verificação de tipo e valor - Estritamente igual  (verifica se é o 2 e se é number)
// // console.log(numero === 2) //retornou true pq o valor e o tipo são iguais
// // console.log(numero === "2") //retornou false pq o valor é uma string "2"

// // // != verifica se o valor comparado é diferente (verificia se o 2 é  diferente de um outro valor)

// // console.log(numero != 5) // true, pq o valor 5 é diferente do valor 2

// // console.log(numero != "cachorro") // true, pq o valor "cachorro" é diferente do valor 2

// // // !== verifica se o valoré diferente (verifica se o 2 é diferente de um outro valor , e se ele também é diferente de um number)

// // 2 é diferente de 3? 
// console.log(numero !== 3) //true, pq o 2 é diferente de 3

// // 2 é diferente de 2? 
// console.log(numero !== 2) //é falsa essa informação. Pq 2 é igual a 2.


// // console.log(numero !== "gato")

// // let animal = "pato"

// // console.log ("pato" == "galinha")


// // //  > maior que 

// // let number = 10

// // console.log(number > 3) //true pq number(10) é maior que valor 3 
// console.log (number > 10) //false pq o number(10) não é maior que 10.

// // // < menor que
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

// let idade = 2

// if(idade >= 18){
//     console.log("Você já é velho")
// }


// //Exemplo com if e else

// let nascimento = 1901

// if(nascimento === 1998){
// console.log("Sou novinha")
// } else{
//     console.log("Tô veinha")
// }
// //------------------------------

// let $nascimento = 18

// if(nascimento >= 18){
// console.log("Você pode acessar o zé delivery")
// } else { //senão, caso a resposta for negativa, cai aqui. 
//     console.log("Vai tomar toddynho")
// }


// //------------------------------

// let segundaFeira = false

// if(segundaFeira == true){
// console.log("Uhull segundou")
// }else{
//     console.log("Que venha sexta!!")
// }




// //ELSE (senão): Ele vai ler o if primeiro, senão for verdade, vai executar o else. 

// // //Estrutura
// // if(condição){
// //     // executa isso caso a mensagem seja verdadeira
// // } else {
// //     //executa isso caso a mensagem não seja verdadeira
// // }

// let idade2 = 10

// if(idade2 >= 18){
// console.log("Você já é velho cascudo.")
// }else{
// console.log("Volte para a casa")
// }



// //Else if 

// let dia = 27

// if(dia === 0){
//     console.log("Domingo")
// } else if(dia === 1){
//     console.log("Segunda")
// } else if(dia === 2) {
//     console.log("Terça")
// }else if(dia === 3){
// console.log("Quarta")
// } else{
//     console.log("dia inválido")
// }


// // Bônus: Em valores binários 0 é false e 1 é true


// let animal2 = "cachorro"

// if(animal2 == "gato") {
// console.log("Miau")
// } else if(animal2 == "papagaio"){
// console.log("Parabéns pra você")
// } else if (animal2 == "pato"){
//     console.log("qua qua ")
// } else{
//     console.log("Não adivinhou o animal")
// }


// let teste = "Boa tarde" //uma gavetinha que está guardando  o valor "Boa tarde"
// console.log(teste)

// // == verificação de valor
// console.log(teste == "Bom dia") //false pq o valor "Boa tarde" é diferente do valor "Bom dia"

// console.log(teste == "Boa tarde") //true pq o valor "Boa tarde" é igual ao valor "Boa tarde"

// // === verificação de valor e tipo 
// console.log(teste === 5) //false pq o tipo da variável é string e o valor é "Boa tarde", na comparação o 5 é um tipo numérico e o valor é 5. 

// console.log (teste === "Boa tarde") //true pq o valor é "Boa tarde" e o tipo é string 


// // != Verifica se o VALOR é diferente 

// let nome = "Evelyn" //type string = tipo textual 
// console.log (typeof nome) // saber o tipo da variável

// console.log(nome != 5) //true pq é verdade que 5 é diferente de "Evelyn"

// console.log(nome != "Lima") //true pq é verdade que "Lima" é diferente de "Evelyn"

// console.log(nome != "Evelyn") //false pq é mentira que "Evelyn" é diferente de "Evelyn"

// // !==  Verifica se o valor e o tipo são diferentes

// console.log(nome !== "Evelyn") // É falsa essa afirmação
// console.log (nome !== "Ana Beatriz") // É verdadeira essa afirmação, pq o valor "Evelyn" é  diferente do valor "Ana Beatriz"
// console.log(nome != 5) // É verdadeira essa informação, "Evelyn" é diferente de 5. 



// Guardando dentro de uma variável um valor boolean (Verdadeiro ou falso)


// let idadeMaiorQueDezoito = true //Nessa gavetinha guardei o valor true

// if (idadeMaiorQueDezoito){
// console.log("Sou maior de idade")
// } else{
//     console.log("Você é menor de idade, não pode assistir Jogos Mortais")
// }

//  --- 


//Else if = Vamos utilizar quando se tem mais de uma opção

let numeroDaSorte = 4

if(numeroDaSorte == 4){
console.log("Uhull você ganhou na megasena")
}  else if(numeroDaSorte == 5){
console.log("Uhulll número sorteado")
} else if(numeroDaSorte == 6){
console.log("A nova rica da cidade")
} else{
    console.log("Você continua pobre")
}



//Ex  = Else if

let tamanhoRoupa = "pp" //gavetinha chamada tamanhoRoupa está guardando o valor "g"

if(tamanhoRoupa == "p"){
console.log("O tamanho é P")
} else if (tamanhoRoupa == "m"){
console.log("O tamanho é M")
} else if (tamanhoRoupa == "g"){
console.log("O tamanho é G")
} else if(tamanhoRoupa == "gg"){
console.log("O tamanho é GG")
} else{
    console.log("Produto indisponível")
}



//Ex Else if


let kilometragem = 300 //tipo numérico 

if(kilometragem <= 220 ){  //300 é menor < que 220 ? OU 300 é igual a 220? 
console.log("Esse carro é semi novo")
} else{
    console.log("Não compre esse carro")
}


//Ex do professor nas salas de aula

let professor = 12

if(professor == 2){
 console.log("Achei a minha turma")
}  else if(professor == 3){
console.log("Essa turma não é a sua")
} else if( professor == 4){
console.log("Essa turma não é a sua")
} else if(professor == 5){
console.log("Essa turma não é a sua")
} else {
    console.log("Professor, sua aula já acabou e você não achou a sua turma")
}


//Diferença de IF , Else e Else If

let cor = "verde"

if(cor == "vermelho"){
console.log("Acertei a cor") 
} else if( cor == "verde"){
console.log ("A cor escolhida foi o verde")
} else if ( cor == "cinza"){
console.log ("A cor escolhida foi o cinza")
} else {
    console.log("Tente outro dia")
}


//

let filme = "shrek"

if(filme == "as branquelas"){
console.log("Filme escolhido foi o certo ")
} else if( filme == "monstros sa"){
console.log("Filme muito bom, foi escolhido.")
} else if(filme == "shrek"){
console.log("Filmaço")
} else{
    console.log("Nenhum dos filmes foi escolhido")
}






let tulani = -1  //número negativo -1

if(tulani == 1){ //número positivo 1 
console.log("teste")
}