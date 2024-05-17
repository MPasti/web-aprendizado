function saudacao(nome, callback) {
  setTimeout(() => {
    console.log(`Olá, ${nome}!`);
    callback();
  }, 2000);
}

function despedida() {
  console.log("Adeus!");
}

saudacao("João", despedida);
