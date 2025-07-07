
document.getElementById("adicionar").addEventListener("click", () => {
  const input = document.getElementById("novoproduto");
  const produto = input.value.trim();

  const usuarioInput = document.getElementById("usuario");
  const usuario = usuarioInput.value.trim();

  const passwordInput = document.getElementById("senha");
  const senha = passwordInput.value.trim();



  if (produto && usuario) {
    adicionarItem(produto,usuario);
    input.value = "";
  }
});


function acessar(){
  const usuario = document.getElementById("usuario").value.trim();      
     
    
if (usuario === "Nivia Marcela") {
  
  document.getElementById("modalcadastro").style.display="flex";
        alert("Acesso Permitido");
    } else {
        alert("Acesso Negado");
        document.getElementById("modalcadastro").style.display = "none"; // Ocultando o conteúdo se o nome for incorreto
    }

    
}
 
const agora = new Date().toLocaleString("pt-BR");

const lista = document.querySelector("#lista");
let itens = [];

function adicionarItem(produto, usuario) {
  const existe = itens.find(item => item.produto === produto);
  if (existe) {
    existe.qtd += 1;
  } else {
    itens.push({ produto: produto, qtd: 1, data: agora, usuario: usuario});
  }
  renderizarLista();
}

function renderizarLista() {
  lista.innerHTML = "";
  const aviso = document.getElementById("aviso");
  aviso.style.display = itens.length === 0 ? "block" : "none";

  itens.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = ` ${item.data} ${item.produto} ${item.qtd}x  -  ${item.usuario} ` ;

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

function fechar() {
  document.getElementById("modalcadastro").style.display = "none";
}
