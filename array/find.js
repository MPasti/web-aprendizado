const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Charlie" },
];

const usuario = usuarios.find((user) => user.id === 2);

console.log(usuario); // { id: 2, nome: 'Bob' }
