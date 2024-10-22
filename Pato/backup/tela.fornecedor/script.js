$(document).ready(function() {
  // Máscara para o CNPJ
  $('#cnpj-fornecedor').mask('00.000.000/0000-00');
  
  // Máscara para o telefone
  $('#telefone-unitario').mask('(00) 00000-0000', { 
    placeholder: "(00) 00000-0000"
  });

  document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeFornecedor = document.getElementById('nome-fornecedor').value.trim();
    const cnpjFornecedor = document.getElementById('cnpj-fornecedor').value.trim();
    const emailFornecedor = document.getElementById('email-fornecedor').value.trim();
    const telefoneFornecedor = document.getElementById('telefone-unitario').value.trim();
    const enderecoFornecedor = document.getElementById('endereco-fornecedor').value.trim();

    if (!nomeFornecedor || !cnpjFornecedor || !emailFornecedor || !telefoneFornecedor || !enderecoFornecedor) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const tabela = document.getElementById('purchaseTable').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).textContent = nomeFornecedor;
    novaLinha.insertCell(1).textContent = cnpjFornecedor;
    novaLinha.insertCell(2).textContent = emailFornecedor;
    novaLinha.insertCell(3).textContent = telefoneFornecedor;
    novaLinha.insertCell(4).textContent = enderecoFornecedor;

    this.reset();
    alert("Fornecedor adicionado com sucesso!");
  });
});