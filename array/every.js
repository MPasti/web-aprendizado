const numeros = [2, 4, 6, 8, 10];
const usuarios = [
  { nome: "Matheus", idade: 19, aprovado: true },
  { nome: "Rafael", idade: 19, aprovado: false },
];
const todosPares = numeros.every((numero) => numero % 2 === 0);
const aprovados = usuarios.every((e) => e.aprovado === true);

console.log(todosPares); // true
console.log(aprovados); // false
