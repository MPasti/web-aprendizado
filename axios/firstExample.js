const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

// para fazer um get
async function fetchPosts() {
  try {
    const response = await axios.get(url);
    const posts = response.data;

    console.log(posts);
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
  }
}

fetchPosts();
