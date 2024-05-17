const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Servir o formulário HTML
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulário</title>
        </head>
        <body>
            <h1>Formulário</h1>
            <form action="/submit" method="post">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required><br><br>
                <button type="submit">Enviar</button>
            </form>
        </body>
        </html>
    `);
});

// Rota para receber os dados do formulário
app.post("/submit", (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Nome: ${name}, Email: ${email}, Senha: ${password}`);
  res.send(
    `Dados recebidos: Nome - ${name}, Email - ${email}, Senha - ${password}`
  );
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
