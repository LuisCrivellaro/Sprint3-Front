
    
    document.getElementById('gerarAnamnese').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarExame').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarDiagnostico').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarConduta').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarRecomendacoes').addEventListener('click', gerarTextoComIA);
    document.getElementById('gerarMotivoAtestado').addEventListener('click', gerarTextoComIA);
    document.getElementById('atualizarIA').addEventListener('click', atualizarSugestoesIA);
    document.getElementById('sugerirMedicamentosIA').addEventListener('click', sugerirMedicamentos);
    



document.addEventListener('DOMContentLoaded', function () {
    const botaoAssistente = document.getElementById('botaoAssistente');
    const assistenteIA = document.getElementById('assistenteIA');
    const minimizarAssistente = document.getElementById('minimizarAssistente');
    const fecharAssistente = document.getElementById('fecharAssistente');
    const mensagemUsuario = document.getElementById('mensagemUsuario');
    const enviarMensagem = document.getElementById('enviarMensagem');
    const mensagensAssistente = document.getElementById('mensagensAssistente');
  
    assistenteIA.style.opacity = '0';
    assistenteIA.style.transform = 'translateY(20px)';
    assistenteIA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  
    function abrirAssistente() {
      assistenteIA.style.display = 'flex';
      setTimeout(() => {
        assistenteIA.style.opacity = '1';
        assistenteIA.style.transform = 'translateY(0)';
      }, 10);
    }
  
    function fecharAssistenteAnimado() {
      assistenteIA.style.opacity = '0';
      assistenteIA.style.transform = 'translateY(20px)';
      setTimeout(() => {
        assistenteIA.style.display = 'none';
      }, 300);
    }
  
    botaoAssistente.addEventListener('click', () => {
      const isHidden = assistenteIA.style.display === 'none' || assistenteIA.style.display === '';
      if (isHidden) abrirAssistente();
      else fecharAssistenteAnimado();
    });
  
    minimizarAssistente.addEventListener('click', fecharAssistenteAnimado);
    fecharAssistente.addEventListener('click', fecharAssistenteAnimado);
  
    function enviarMensagemAssistente() {
      const texto = mensagemUsuario.value.trim();
      if (texto) {
        adicionarMensagem(texto, 'usuario');
        mensagemUsuario.value = '';
  
        setTimeout(() => {
          const respostas = [
            'Pode mandar sua pergunta, estou à disposição!',
            'Você pode me perguntar sobre qualquer serviço médico.',
            'No que posso te ajudar hoje?',
            'Precisa de alguma orientação? É só falar!',
            'Vamos começar? Me diga o que você precisa.'
          ];
          const resposta = respostas[Math.floor(Math.random() * respostas.length)];
          adicionarMensagem(resposta, 'assistente');
        }, 800);
      }
    }
  
    function adicionarMensagem(texto, tipo) {
      const mensagemDiv = document.createElement('div');
      mensagemDiv.className = `mensagem mensagem-${tipo}`;
  
      const conteudoDiv = document.createElement('div');
      conteudoDiv.className = 'conteudo-mensagem';
      conteudoDiv.textContent = texto;
  
      const timestampDiv = document.createElement('div');
      timestampDiv.className = 'timestamp';
      timestampDiv.textContent = 'Agora';
  
      mensagemDiv.appendChild(conteudoDiv);
      mensagemDiv.appendChild(timestampDiv);
  
      mensagensAssistente.appendChild(mensagemDiv);
      mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
    }
  
    enviarMensagem.addEventListener('click', enviarMensagemAssistente);
    mensagemUsuario.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') enviarMensagemAssistente();
    });
  });
  
