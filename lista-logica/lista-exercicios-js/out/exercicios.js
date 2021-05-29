// Exemplos

// Exercício 0A
 //function soma() {
  // escreva seu código aqui
  //const num1 = prompt('Digite o primeiro número')
  //const num2 = prompt('Digite o segundo número')

  //console.log(Number(num1) + Number(num2))
//}

// Exercício 0B
//function imprimeMensagem() {
  // escreva seu código aqui
  //const mensagem = prompt('Digite sua mensagem')

  //console.log(mensagem)
//}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
const num1 = Number(prompt("Insira um numero"))
const num2 = Number(prompt("Insira um numero"))

console.log(num1 * num2)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("ano atual", anoAtual))
  const anoNascimento = Number(prompt("ano de nascimento", anoNascimento))
  const idadeAtual = anoAtual - anoNascimento

  console.log(idadeAtual)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
const suaAltura = Number(prompt('Digite sua altura'))
const seuPeso = Number(prompt('Digite seu peso'))

console.log((seuPeso) / (suaAltua) * (suaAltura))

}


// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

 const nome = prompt("nome:") 
 const idade = Number(prompt("idade:"))
 const email = prompt("email:")

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let corUm = prompt("Digite uma cor preferida.")
  let corDois = prompt("Digite outra cor que goste.")
  let corTres = prompt("Digite uma ultima cor que goste.")

  console.log([corUm, corDois, corTres])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
const palavra = prompt("Insira uma palavra")

console.log(palavra.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui





}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

let string1 = prompt('Digite uma palavra')
let string2 = prompt('Digite uma palavra')

let string1M = string1.toUpperCase()
let string2M = string2.toUpperCase()

const comparacao = string1M == string2M
console.log(comparacao)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt('Insira o ano atual')
  const anoNasc = prompt('Insira o ano do seu nascimento')
  const id = prompt('Insira o ano que sua carteira de identidade foi emitida')
  
  const idade = anoAtual - anoNasc
  const emissao = anoAtual - id
  
  console.log((idade<=20&&emissao>=5)||(idade>20&&idade<=50&&emissao>=10)||(idade>50&&emissao>=15))

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
const anoAtualmente = Number(prompt("Em que ano estamos?"))
const resultado = (anoAtualmente % 400 == 0) || (anoAtulamente % 4 == 0 && anoAtualmente % 100 != 0)

console.log(resultado)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
let suaIdade = (prompt("Você tem mais de 18 anos?"))
let ensinoMedio = (prompt("Você possui ensino médio completo?"))
let disponivel = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))

console.log (suaIdade && ensinoMedio && disponivel)


}