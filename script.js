let total = 0;
const itensCarrinho = document.getElementById("itens");
const totalElement = document.getElementById("total");
const telaConfirmacao = document.getElementById("pedido-confirmado");
const carrinho = document.getElementById("carrinho");
const btnCarrinho = document.getElementById("btn-carrinho-flutuante");

/* adicionar item ao carrinho */
function adicionarCarrinho(produto, preco) {
  const item = document.createElement("div");
  item.classList.add("item-carrinho");

  const nome = document.createElement("span");
  nome.textContent = produto;

  const valor = document.createElement("span");
  valor.textContent = `R$ ${preco},00`;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "❌";
  botaoRemover.classList.add("btn-remover");
  botaoRemover.onclick = function () {
    itensCarrinho.removeChild(item);
    total -= preco;
    totalElement.textContent = total;
    atualizarBadge();
  };

  item.appendChild(nome);
  item.appendChild(valor);
  item.appendChild(botaoRemover);

  itensCarrinho.appendChild(item);

  total += preco;
  totalElement.textContent = total;
  atualizarBadge();
}

/*esvazia o carrinho */
function limparCarrinho() {
  itensCarrinho.innerHTML = "";
  total = 0;
  totalElement.textContent = total;
  atualizarBadge();
}

/*concluir pedido */
function concluirPedido() {
  if (total === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  telaConfirmacao.style.display = "flex";
  limparCarrinho();

  // carrinho fica aberto
  carrinho.style.display = "block"; 
}


/*fechar tela de confirmação */
function fecharConfirmacao() {
  telaConfirmacao.style.display = "none";
}

/*abrir/fechar carrinho no cerular */
function toggleCarrinho() {
  if (carrinho.style.display === "flex" || carrinho.style.display === "block") {
    carrinho.style.display = "none";
  } else {
    carrinho.style.display = "block";
  }
}

/*atualizar badge do botão flutuante*/
function atualizarBadge() {
  if (!btnCarrinho) return;
  const qtdItens = itensCarrinho.children.length;
  if (qtdItens > 0) {
    btnCarrinho.textContent = `🛒 ${qtdItens}`;
  } else {
    btnCarrinho.textContent = "🛒";
  }
}
