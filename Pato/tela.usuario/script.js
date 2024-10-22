document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Captura os dados do formulário
    const codigoProduto = document.getElementById('codigo-produto').value.trim();
    const codigoCompra = document.getElementById('codigo-compra').value.trim();
    const qtdeComprada = document.getElementById('qtde-comprada').value.trim();
    const valorUnitario = document.getElementById('valor-unitario').value.trim();
    const valorV = document.getElementById('valor-v').value.trim();
  
    // Verifica se todos os campos estão preenchidos
    if (!codigoProduto || !codigoCompra || !qtdeComprada || !valorUnitario || !valorV) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  
    // Verifica se o valor unitário é um número válido
    if (isNaN(valorUnitario) || valorUnitario <= 0) {
      alert("Por favor, insira um valor unitário válido!");
      return;
    }
  
    // Cria uma nova linha na tabela
    const tabela = document.getElementById('purchaseTable').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
  
    // Insere os dados nas células da nova linha
    novaLinha.insertCell(0).textContent = codigoProduto;
    novaLinha.insertCell(1).textContent = codigoCompra;
    novaLinha.insertCell(2).textContent = qtdeComprada;
    novaLinha.insertCell(3).textContent = valorUnitario;
    novaLinha.insertCell(4).textContent = valorV;
  
    // Limpa o formulário após a adição
    this.reset();
  
    // Feedback visual
    alert("Compra adicionada com sucesso!");
  });
  