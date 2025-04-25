document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const videoContainer = document.querySelector('.video-container');
    const videoPrincipal = document.querySelector('.video-principal');
    const botaoMicrofone = document.querySelector('.fas.fa-microphone-slash').parentElement;
    const botaoCamera = document.querySelector('.fas.fa-video').parentElement;
    const botaoEncerrar = document.querySelector('.btn-danger');
    
    // Adiciona elementos de status e timer
    adicionarElementosInterface();
    
    // Simular uma consulta em andamento
    iniciarTimerConsulta();
    
    // Event Listeners para os botões de controle
    botaoMicrofone.addEventListener('click', toggleMicrofone);
    botaoCamera.addEventListener('click', toggleCamera);
    botaoEncerrar.addEventListener('click', encerrarConsulta);
    
    // Função para adicionar elementos adicionais na interface
    function adicionarElementosInterface() {
      // Adiciona status de conexão
      const statusElement = document.createElement('div');
      statusElement.className = 'status-conexao';
      statusElement.innerHTML = '<i class="fas fa-signal"></i> Conexão estável';
      videoContainer.appendChild(statusElement);
      
      // Adiciona timer da consulta
      const timerElement = document.createElement('div');
      timerElement.className = 'timer-consulta';
      timerElement.id = 'timer-consulta';
      timerElement.textContent = '00:00';
      videoContainer.appendChild(timerElement);
      
      // Simula verificação periódica da qualidade da conexão
      setInterval(verificarConexao, 10000);
    }
    
    // Função para iniciar o timer da consulta
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
    
    // Função para simular verificação da conexão
    function verificarConexao() {
      const statusElement = document.querySelector('.status-conexao');
      const qualidades = [
        { texto: 'Conexão excelente', icone: 'fa-signal', cor: '#2ecc71' },
        { texto: 'Conexão boa', icone: 'fa-signal', cor: '#3498db' },
        { texto: 'Conexão instável', icone: 'fa-exclamation-triangle', cor: '#f39c12' }
      ];
      
      // Simula uma qualidade aleatória (mais provável ser boa)
      const randomIndex = Math.floor(Math.random() * 10) < 8 ? 0 : (Math.random() > 0.5 ? 1 : 2);
      const qualidade = qualidades[randomIndex];
      
      statusElement.innerHTML = `<i class="fas ${qualidade.icone}"></i> ${qualidade.texto}`;
      statusElement.style.color = qualidade.cor;
    }
    
    // Alterna o estado do microfone
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
    
    // Alterna o estado da câmera
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
    
    // Encerra a consulta
    function encerrarConsulta() {
      if (confirm('Deseja realmente encerrar a consulta?')) {
        // Exibe tela de encerramento
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
    
    // Exibe mensagens temporárias para o usuário
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
      
      // Remove a mensagem após 3 segundos
      setTimeout(() => {
        mensagem.classList.remove('show');
        setTimeout(() => mensagem.remove(), 150);
      }, 3000);
    }
  });