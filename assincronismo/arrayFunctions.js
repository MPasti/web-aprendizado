const pessoas = [
  { nome: "Matheus", idade: 19 },
  { nome: "Rafael", idade: 19 },
  { nome: "Marina", idade: 16 },
  { nome: "João", idade: 17 },
];

const maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

const nomesMaioresDeIdade = maioresDeIdade.map((pessoa) => pessoa.nome);

const somaIdades = maioresDeIdade.reduce(
  (total, pessoa) => total + pessoa.idade,
  0
);

const menorDeIdade = pessoas.find((pessoa) => pessoa.idade < 18);

const temPedro = pessoas.map((pessoa) => pessoa.nome).includes("Pedro");

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);

console.log("Maiores de idade:", maioresDeIdade);
console.log("Nomes dos maiores de idade:", nomesMaioresDeIdade);
console.log("Soma das idades dos maiores de idade:", somaIdades);
console.log("Primeira pessoa menor de idade:", menorDeIdade);
console.log("Tem alguém chamado Pedro?", temPedro);
console.log("Todos são maiores de idade?", todosMaioresDeIdade);
