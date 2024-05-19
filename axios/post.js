const axios = require("axios");

const postData = {
  title: "foo",
  body: "bar",
  userId: 1,
};

axios
  .post("https://jsonplaceholder.typicode.com/posts", postData)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Erro ao fazer a requisição POST:", error);
  });
