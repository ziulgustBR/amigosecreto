let listaParticipantes = [];

// Adiciona participante à lista
function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo");
  const nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  if (listaParticipantes.includes(nome)) {
    alert("Esse participante já foi adicionado.");
    return;
  }

  listaParticipantes.push(nome);
  atualizarLista();
  nomeInput.value = ""; // Limpar campo de entrada
}

// Atualiza a lista na interface
function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";
  listaParticipantes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

// Sorteia o amigo secreto
function sortearAmigo() {
  if (listaParticipantes.length < 2) {
    alert("É necessário pelo menos 2 participantes para o sorteio.");
    return;
  }

  let sorteio = [...listaParticipantes]; // Cópia da lista
  let resultado = {};

  for (let i = 0; i < listaParticipantes.length; i++) {
    let amigo;

    do {
      amigo = sorteio[Math.floor(Math.random() * sorteio.length)];
    } while (amigo === listaParticipantes[i]);

    resultado[listaParticipantes[i]] = amigo;
    sorteio.splice(sorteio.indexOf(amigo), 1);
  }

  exibirResultado(resultado);
}

// Exibe o resultado do sorteio
function exibirResultado(resultado) {
  const ul = document.getElementById("resultado");
  ul.innerHTML = ""; // Limpar lista anterior

  for (let participante in resultado) {
    const li = document.createElement("li");
    li.textContent = `${participante} → ${resultado[participante]}`;
    ul.appendChild(li);
  }

  alert("O sorteio foi realizado com sucesso!");
}
