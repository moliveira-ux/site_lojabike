// ================================
// Função: atualizarContador()
// Descrição: Atualiza em tempo real o contador de caracteres
//            do campo de mensagem e aplica estilos visuais
// ================================
function atualizarContador() {
  // Obtém os elementos da textarea e do contador
  const textarea = document.getElementById("mensagem");
  const contador = document.getElementById("contador");

  // Conta quantos caracteres foram digitados
  const total = textarea.value.length;

  // Atualiza o texto do contador
  contador.textContent = `${total}/100 caracteres`;

  // Se atingiu o limite máximo, adiciona classe de alerta (ex: animação de "piscar")
  if (total === 100) {
    contador.classList.add("piscando");
  } else {
    // Remove a classe piscando se sair do limite
    contador.classList.remove("piscando");

    // Altera a cor do contador conforme a quantidade de caracteres
    if (total > 90) {
      contador.style.color = "red"; // alerta
    } else if (total > 70) {
      contador.style.color = "orange"; // atenção
    } else {
      contador.style.color = "black"; // normal
    }
  }
}