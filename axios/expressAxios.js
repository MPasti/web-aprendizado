const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Erro ao buscar dados de usuários.");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
