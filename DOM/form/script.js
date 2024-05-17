document
  .getElementById("formContato")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var foto = document.getElementById("foto").files[0];

    alert(
      "Nome: " +
        nome +
        "\nEmail: " +
        email +
        "\nFoto: " +
        (foto ? foto.name : "Nenhuma")
    );

    document.getElementById("formContato").reset();
  });

document.getElementById("formContato").addEventListener("reset", (e) => {
  var preview = document.getElementById("preview");
  preview.src = "";
  preview.style.display = "none";
});

document.getElementById("foto").addEventListener("change", function (event) {
  var file = event.target.files[0];
  var preview = document.getElementById("preview");
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
    preview.style.display = "block";
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
});
