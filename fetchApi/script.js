document.getElementById("fetchButton").addEventListener("click", fetchUserData);

var counter = 0;

function fetchUserData() {
  counter++;
  fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na rede ao tentar obter os dados.");
      }
      return response.json();
    })
    .then((data) => {
      displayUserData(data);
    })
    .catch((error) => {
      console.error("Houve um problema com a operação fetch:", error);
    });
}

function displayUserData(user) {
  const userDataContainer = document.getElementById("userDataContainer");

  const userDiv = document.createElement("div");
  userDiv.classList.add("user-data");

  userDiv.innerHTML = `
        <h2>Dados do Usuário</h2>
        <p><strong>Nome:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Telefone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
    `;

  userDataContainer.appendChild(userDiv);
}
