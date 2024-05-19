const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Erro ao fazer a requisição GET:", error);
  });
