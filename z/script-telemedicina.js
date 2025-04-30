document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const videoPrincipal = document.querySelector('.video-principal');
    const botaoMicrofone = document.querySelector('.fas.fa-microphone-slash').parentElement;
    const botaoCamera = document.querySelector('.fas.fa-video').parentElement;
    const botaoEncerrar = document.querySelector('.btn-danger');
    
    adicionarElementosInterface();
    
    iniciarTimerConsulta();
    
    botaoMicrofone.addEventListener('click', toggleMicrofone);
    botaoCamera.addEventListener('click', toggleCamera);
    botaoEncerrar.addEventListener('click', encerrarConsulta);
    
    function adicionarElementosInterface() {
      const statusElement = document.createElement('div');
      statusElement.className = 'status-conexao';
      statusElement.innerHTML = '<i class="fas fa-signal"></i> Conexão estável';
      videoContainer.appendChild(statusElement);
      
      const timerElement = document.createElement('div');
      timerElement.className = 'timer-consulta';
      timerElement.id = 'timer-consulta';
      timerElement.textContent = '00:00';
      videoContainer.appendChild(timerElement);
      
      setInterval(verificarConexao, 10000);
    }
    
    function iniciarTimerConsulta() {
      let segundos = 0;
      const timerElement = document.getElementById('timer-consulta');
      
      setInterval(() => {
        segundos++;
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        
        timerElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
      }, 1000);
    }
    
    function verificarConexao() {
      const statusElement = document.querySelector('.status-conexao');
      const qualidades = [
        { texto: 'Conexão excelente', icone: 'fa-signal', cor: '#2ecc71' },
        { texto: 'Conexão boa', icone: 'fa-signal', cor: '#3498db' },
        { texto: 'Conexão instável', icone: 'fa-exclamation-triangle', cor: '#f39c12' }
      ];
      
      const randomIndex = Math.floor(Math.random() * 10) < 8 ? 0 : (Math.random() > 0.5 ? 1 : 2);
      const qualidade = qualidades[randomIndex];
      
      statusElement.innerHTML = `<i class="fas ${qualidade.icone}"></i> ${qualidade.texto}`;
      statusElement.style.color = qualidade.cor;
    }
    
    function toggleMicrofone() {
      const icone = botaoMicrofone.querySelector('i');
      
      if (icone.classList.contains('fa-microphone-slash')) {
        icone.classList.remove('fa-microphone-slash');
        icone.classList.add('fa-microphone');
        botaoMicrofone.classList.add('active');
        mostrarMensagem('Microfone ativado');
      } else {
        icone.classList.remove('fa-microphone');
        icone.classList.add('fa-microphone-slash');
        botaoMicrofone.classList.remove('active');
        mostrarMensagem('Microfone desativado');
      }
    }
    
    function toggleCamera() {
      const icone = botaoCamera.querySelector('i');
      
      if (icone.classList.contains('fa-video')) {
        icone.classList.remove('fa-video');
        icone.classList.add('fa-video-slash');
        botaoCamera.classList.remove('active');
        document.querySelector('.video-paciente').style.opacity = '0.5';
        mostrarMensagem('Câmera desativada');
      } else {
        icone.classList.remove('fa-video-slash');
        icone.classList.add('fa-video');
        botaoCamera.classList.add('active');
        document.querySelector('.video-paciente').style.opacity = '1';
        mostrarMensagem('Câmera ativada');
      }
    }
    
    function encerrarConsulta() {
      if (confirm('Deseja realmente encerrar a consulta?')) {
        document.querySelector('.video-container').innerHTML = `
          <div class="p-5 text-center">
            <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
            <h2 class="mt-4">Consulta Finalizada</h2>
            <p>Obrigado por utilizar nosso serviço de telemedicina.</p>
            <p>Você receberá um resumo da consulta por e-mail em breve.</p>
            <div class="mt-4">
              <button class="btn btn-primary" onclick="window.location.href='index.html'">Voltar para Home</button>
              <button class="btn btn-outline-primary ms-2" onclick="window.location.href='index.html'">Agendar Nova Consulta</button>
            </div>
          </div>
        `;
      }
    }
    
    function mostrarMensagem(texto) {
      const mensagem = document.createElement('div');
      mensagem.className = 'alert alert-info alert-dismissible fade show position-fixed';
      mensagem.style.bottom = '20px';
      mensagem.style.right = '20px';
      mensagem.style.maxWidth = '300px';
      mensagem.style.zIndex = '9999';
      
      mensagem.innerHTML = `
        ${texto}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      
      document.body.appendChild(mensagem);
      
      setTimeout(() => {
        mensagem.classList.remove('show');
        setTimeout(() => mensagem.remove(), 150);
      }, 3000);
    }
  });
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
  