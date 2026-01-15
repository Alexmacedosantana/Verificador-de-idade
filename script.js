function verificar() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const resultado = document.getElementById("resultado");

  if (nome === "" || idade === "") {
    resultado.textContent = "Preencha todos os campos.";
    resultado.style.color = "red";
    return;
  }

  if (idade >= 18) {
    resultado.textContent = `${nome}, você é maior de idade.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `${nome}, você é menor de idade.`;
    resultado.style.color = "orange";
  }
}

