// // Part 1
// 1)
// let valor1 = parseInt(125)
// let valor2 = parseInt(125)
// console.log(`A soma dos números ${valor1} e ${valor2} é ${valor1 + valor2}>`)

// let titulo = "ola mundo!"
// console.log(titulo);

// let booleano = (10 == 10)
// console.log(booleano)

// let pi = 3.1415
// console.log(pi)

// 2)
// nome = prompt("Qual é o seu nome?")

// idade = prompt("Quantos anos você tem?")

// bairro = prompt("Em que bairro você mora?")

// nomeMaiusculo = nome.toUpperCase()
// alert(`Olá ${nomeMaiusculo}, você tem ${idade} anos e mora no bairro ${bairro}.`)

// n1 = prompt("Digite um número:")
// n2 = prompt("Digite outro número:")
// soma = parseInt(n1) + parseInt(n2)
// alert(`A soma dos números ${n1} e ${n2} é ${soma}.`)

// 3)
// meuNome = "Yuri Tenorio Mariano"

// nomeRPlace = meuNome.replace("Tenorio", "Mariano")

// console.log(nomeRPlace);

// 4)
// PS_5 = 5000
// desconto = 0.2
// preçoFinal = PS_5 - (PS_5 * desconto)
// console.log(`PlayStation 5 de R$ ${PS_5} por apenas ${preçoFinal}.`)



// Part 2
// 1)
// idade = prompt("Quantos anos você tem?")
// if (idade < 18) {
//     alert("Você é menor de idade.")
// } else if (idade >= 18  && idade <= 60) {
//     alert("Você é maior de idade.")
// } else {
//     alert("Você é um idoso.")
// }

// 2)
// idade = prompt("Quantos anos você tem?")
// if (idade >= 18) {
//     alert("Você já pode dirigir, tenha cuidado!")
// } else {
//     alert("Voce ainda nao pode dirigir.")
// }

// 3)
//  inteiros = parseInt(prompt("Digite um numero inteiro:"))
//  if ( inteiros > 0 ) {
//      alert("O numero é positivo.")
//      console.log("O numero é positivo.")
//  } else if ( inteiros < 0 ) {
//     alert("O numero é negativo.")
//      console.log("O numero é negativo.")
//  } else {
//     alert("O numero é zero.")
//     console.log("O numero é zero.")
//  }

// 4)
// altura = parseFloat(prompt("Digite sua altura:"))
// peso = parseFloat(prompt("Digite seu peso:"))
// imc = peso / (altura * altura)
// alert(`Seu IMC é: ${imc}.`)
// console.log(`Seu IMC é: ${imc}.`);
// if (imc >= 18.5 && imc <= 24.9) {
//     alert("Seu peso é ideal.")
//     console.log("Peso ideal.")
// } else if (imc < 18.5) {
//     alert("está baixo do peso.")
//     console.log("Abaixo do peso.")
// } else {
//     alert("está acima do peso.")
//     console.log("Acima do peso.")
// }

// 5)
// dia = prompt("Digite um numero de 1 a 7:")
// switch (dia) {
//     case "1":
//         alert("Domingo.")
//         break;
//     case "2":
//         alert("Segunda-feira.")
//         break;
//     case "3":
//         alert("Terca-feira.")
//         break;
//     case "4":
//         alert("Quarta-feira.")
//         break;
//     case "5":
//         alert("Quinta-feira.")
//         break;
//     case "6":
//         alert("Sexta-feira.")
//         break;
//     case "7":
//         alert("Sábado.")
//         break;
//     default:
//         alert("Número inválido!")
//         break;
// }

// 6)
// idade = prompt("Quantos anos você tem?")
// switch (idade) {
//     case idade < 12:
//         alert("Criança.")
//         break;
//     case idade < 18:
//         alert("Adolescente.")
//         break;
//     case idade < 60:
//         alert("Adulto.")
//         break;
//     case idade >= 60:
//         alert("Idoso.")
//         break;
// }

// 7)
// num1 = prompt("Digite um numero:")
// num2 = prompt("Digite outro numero:")
// calculo = prompt("Escolha uma operação: +, -, *, /")
// resultado;

// switch (calculo) {
//   case "+":
//     resultado = num1 + num2;
//     break;
//   case "-":
//     resultado = num1 - num2;
//     break;
//   case "*":
//     resultado = num1 * num2;
//     break;
//   case "/":
//     if (num2 !== 0) {
//       resultado = num1 / num2;
//     } else {
//       resultado = "Erro: Divisão por zero!";
//     }
//     break;
//   default:
//     resultado = "Operação inválida.";
//     break;
// }
// alert(`Resultado: ${resultado}`);

// 8)
// valorOriginal = parseFloat(prompt("Informe o valor do produto:"));
// codigo = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4, DESC5):").toUpperCase();
// desconto = 0;
// mensagem = "";
// switch (codigo) {
//   case "DESC1":
//     desconto = 0.05;
//     mensagem = "5% de desconto";
//     break;
//   case "DESC2":
//     desconto = 0.10;
//     mensagem = "10% de desconto";
//     break;
//   case "DESC3":
//     desconto = 0.15;
//     mensagem = "15% de desconto";
//     break;
//   case "DESC4":
//     desconto = 0.20;
//     mensagem = "20% de desconto";
//     break;
//   case "DESC5":
//     desconto = 0.25;
//     mensagem = "25% de desconto";
//     break;
//   default:
//     alert("Erro: Código promocional inválido.");
//     desconto = null;
// }
// if (desconto !== null) {
// valorDesconto = valorOriginal * desconto;
// valorFinal = valorOriginal - valorDesconto;
//   alert(`${mensagem} para o valor original: R$ ${valorOriginal}. Valor com desconto: R$ ${valorFinal}.`);
// }
