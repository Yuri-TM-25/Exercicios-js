// 1.
let numeros = [25, 50, 75, 100, 125];
numeros.pop();
console.log("Array atualizado:", numeros);

// 2.
let filmes = ["Panico", "Carros", "Duna"];
filmes.unshift("Avengers");
console.log("Lista de filmes:", filmes);

// 3.
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
let media = calcularMedia(7, 8, 9);
console.log("Média:", media);
console.log(media >= 7 ? "Aprovado" : "Reprovado");

// 4.
let idade = Number(prompt("Digite sua idade:"));
function verificarMaioridade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}
alert(verificarMaioridade(idade)); 

// 5.
horas = Number(prompt("Digite a quantidade de horas:"));
function converterEmMinutos(horas) {
    return horas * 60;
}
alert(`${horas} horas equivale a ${converterEmMinutos(horas)} minutos`);

// 6.
let livro = {
    titulo: "Jurrasic Park",
    autor: "Michael Crichton",
    paginas: 1008
};
console.log(`O livro "${livro.titulo}" foi escrito por ${livro.autor} e tem ${livro.paginas} páginas.`);

// 7.
let carro = {
    modelo: "Civic",
    ano: 2020,
    ligado: false
};
carro.ligado = true;
console.log("Carro atualizado:", carro);

// 8.
let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Eu gosto de ${frutas[i]}`);
}

// 9.
function maiorNumero(array) {
    return Math.max(...array);
}
console.log("Maior número:", maiorNumero([5, 10, 3, 42, 27]));

// QUESTÃO BÔNUS
let aluno1 = { nome: "Gustavo", nota1: 9, nota2: 10 };
let aluno2 = { nome: "Bruno", nota1: 9.5, nota2: 8.5 };
let aluno3 = { nome: "Yuri", nota1: 10, nota2: 10 };

let turma = [aluno1, aluno2, aluno3];

for (let i = 0; i < turma.length; i++) {
    let aluno = turma[i];
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media}`);
}
