const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;

    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Ocorreu um erro!");
    }
  }, 2000);
});

// Consumindo a promise
minhaPromise
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });
