document.getElementById("adicionar").addEventListener("click", () => {
  const input = document.getElementById("novoproduto");
  const nome = input.value.trim();

  if (nome) {
    adicionarItem(nome);
    input.value = "";
  }
});

const lista = document.querySelector("#lista");
let itens = [];

function adicionarItem(nome) {
  const existe = itens.find(item => item.nome === nome);
  if (existe) {
    existe.qtd += 1;
  } else {
    itens.push({ nome: nome, qtd: 1 });
  }
  renderizarLista();
}

function renderizarLista() {
  lista.innerHTML = "";
  const aviso = document.getElementById("aviso");
  aviso.style.display = itens.length === 0 ? "block" : "none";

  itens.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${item.nome} ${item.qtd}x `;

    let botaoremover = document.createElement("button");
    botaoremover.textContent = " Remover";
    botaoremover.addEventListener("click", () => remover(index));

    li.appendChild(botaoremover);
    lista.appendChild(li);
  });
}

function remover(index) {
  itens.splice(index, 1);
  renderizarLista();
}
