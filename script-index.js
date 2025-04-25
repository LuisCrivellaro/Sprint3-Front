document.addEventListener('DOMContentLoaded', function() {
  // Variáveis para o assistente virtual
  const botaoAssistente = document.getElementById('botaoAssistente');
  const assistenteIA = document.getElementById('assistenteIA');
  const minimizarAssistente = document.getElementById('minimizarAssistente');
  const fecharAssistente = document.getElementById('fecharAssistente');
  const mensagemUsuario = document.getElementById('mensagemUsuario');
  const enviarMensagem = document.getElementById('enviarMensagem');
  const mensagensAssistente = document.getElementById('mensagensAssistente');
  
  // Menu de navegação responsivo
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  // Animação do menu na rolagem
  let prevScrollpos = window.pageYOffset;
  
  // Controle do assistente virtual
  function toggleAssistente() {
      if (assistenteIA.style.display === 'none' || assistenteIA.style.display === '') {
          assistenteIA.style.display = 'flex';
          setTimeout(() => {
              assistenteIA.style.opacity = '1';
              assistenteIA.style.transform = 'translateY(0)';
          }, 10);
      } else {
          assistenteIA.style.opacity = '0';
          assistenteIA.style.transform = 'translateY(20px)';
          setTimeout(() => {
              assistenteIA.style.display = 'none';
          }, 300);
      }
  }
  
  botaoAssistente.addEventListener('click', toggleAssistente);
  
  minimizarAssistente.addEventListener('click', toggleAssistente);
  
  fecharAssistente.addEventListener('click', () => {
      assistenteIA.style.opacity = '0';
      assistenteIA.style.transform = 'translateY(20px)';
      setTimeout(() => {
          assistenteIA.style.display = 'none';
      }, 300);
  });
  
  // Função para enviar mensagem do assistente
  function enviarMensagemAssistente() {
      const texto = mensagemUsuario.value.trim();
      if (texto) {
          // Adicionar mensagem do usuário
          adicionarMensagem(texto, 'usuario');
          mensagemUsuario.value = '';
          
          // Simular resposta do assistente depois de um tempo
          setTimeout(() => {
              const respostas = [
                  'Entendi! Vou verificar isso para você.',
                  'Posso ajudar com informações sobre nossos serviços de telemedicina.',
                  'Nossos especialistas estão disponíveis para consultas online. Deseja agendar um horário?',
                  'Para marcar uma consulta, você pode acessar a seção "Agendar Consulta" em nosso site.',
                  'Temos várias especialidades médicas disponíveis. Qual você está procurando?'
              ];
              const resposta = respostas[Math.floor(Math.random() * respostas.length)];
              adicionarMensagem(resposta, 'assistente');
          }, 1000);
      }
  }
  
  // Função para adicionar mensagem ao chat
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
      
      // Rolar para a última mensagem
      mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
  }
  
  enviarMensagem.addEventListener('click', enviarMensagemAssistente);
  
  mensagemUsuario.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          enviarMensagemAssistente();
      }
  });
  
  // Animação navbar no scroll
  window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.querySelector('.navbar');
      
      if (prevScrollpos > currentScrollPos) {
          navbar.style.top = '0';
      } else {
          navbar.style.top = '-80px';
      }
      
      if (currentScrollPos > 100) {
          navbar.style.backgroundColor = '#fff';
          navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          navbar.style.padding = '10px 0';
      } else {
          navbar.style.backgroundColor = '#fff';
          navbar.style.boxShadow = 'none';
          navbar.style.padding = '15px 0';
      }
      
      prevScrollpos = currentScrollPos;
  };
  
  // Animação para elementos na visualização
  function animateOnScroll() {
      const elements = document.querySelectorAll('.etapa, .especialidade, .lista-vantagens li');
      
      elements.forEach(element => {
          const position = element.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;
          
          if (position < screenHeight - 100) {
              element.classList.add('animate__animated', 'animate__fadeInUp');
              element.style.opacity = '1';
          }
      });
  }
  
  // Inicialmente, definir a opacidade dos elementos para 0
  document.querySelectorAll('.etapa, .especialidade, .lista-vantagens li').forEach(element => {
      element.style.opacity = '0';
  });
  
  // Chamar a função de animação no carregamento e no scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  // Smooth scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              const headerOffset = 80;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });
              
              // Fechar o menu móvel se estiver aberto
              if (navbarCollapse.classList.contains('show')) {
                  navbarToggler.click();
              }
          }
      });
  });
  
  // Adicionar comportamento para controles de vídeo (simulação)
  const controlesVideo = document.querySelectorAll('.btn-controle');
  
  controlesVideo.forEach(controle => {
      controle.addEventListener('click', function() {
          // Simula interação com os controles do vídeo
          if (this.querySelector('.fa-microphone-slash')) {
              this.innerHTML = '<i class="fas fa-microphone"></i>';
          } else if (this.querySelector('.fa-microphone')) {
              this.innerHTML = '<i class="fas fa-microphone-slash"></i>';
          } else if (this.querySelector('.fa-video-slash')) {
              this.innerHTML = '<i class="fas fa-video"></i>';
          } else if (this.querySelector('.fa-video')) {
              this.innerHTML = '<i class="fas fa-video-slash"></i>';
          }
      });
  });
  
  // Inicialização do pop-up do assistente
  assistenteIA.style.opacity = '0';
  assistenteIA.style.transform = 'translateY(20px)';
  assistenteIA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});