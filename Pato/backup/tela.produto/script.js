document.getElementById('salesForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const nomeProduto = document.getElementById('nome-produto').value.trim();
  const quantidadeEstoque = document.getElementById('quantidade-estoque').value.trim();
  const descricaoProduto = document.getElementById('descricao-produto').value.trim();
  const validadeProduto = document.getElementById('validade-produto').value.trim();
  const valorProduto = parseFloat(document.getElementById('valor-produto').value).toFixed(2);
  const custoProduto = parseFloat(document.getElementById('custo-produto').value).toFixed(2);

  if (!nomeProduto || !quantidadeEstoque || !descricaoProduto || !validadeProduto || isNaN(valorProduto) || isNaN(custoProduto)) {
    alert("Por favor, preencha todos os campos corretamente!");
    return;
  }

  const tabela = document.getElementById('purchaseTable').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();

  novaLinha.insertCell(0).textContent = nomeProduto;
  novaLinha.insertCell(1).textContent = quantidadeEstoque;
  novaLinha.insertCell(2).textContent = descricaoProduto;
  novaLinha.insertCell(3).textContent = validadeProduto;
  novaLinha.insertCell(4).textContent = `R$ ${valorProduto}`;
  novaLinha.insertCell(5).textContent = `R$ ${custoProduto}`;

  this.reset();

  alert("Produto cadastrado com sucesso!");
});