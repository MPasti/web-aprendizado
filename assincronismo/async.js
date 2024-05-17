async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // Retorna a resposta em formato JSON
    const data = await response.json();

    processUserData(data);
  } catch (error) {
    console.error("Erro:", error);
  }
}

function processUserData(data) {
  console.log("Dados do usuário recebidos:");
  console.log(data);
}

fetchUserData();
