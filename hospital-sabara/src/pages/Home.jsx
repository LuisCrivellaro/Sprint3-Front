import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles-index.css";
import AssistenteVirtual from "../components/AssistenteVirtual";
import 'bootstrap/dist/css/bootstrap.min.css';


//resolver futuramente esses 1001 bugs
export default function Home() {
  const [assistenteVisible, setAssistenteVisible] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: '#fff',
    padding: '15px 0',
    boxShadow: 'none',
    top: '0'
  });

  // Lógica para alternar visibilidade do assistente
  const toggleAssistente = () => {
    setAssistenteVisible(prevState => !prevState);
  };

  const closeAssistente = () => {
    setAssistenteVisible(false);
  };

  const enviarMensagemAssistente = () => {
    const respostas = [
      'Entendi! Vou verificar isso para você.',
      'Posso ajudar com informações sobre nossos serviços de telemedicina.',
      'Nossos especialistas estão disponíveis para consultas online. Deseja agendar um horário?',
      'Para marcar uma consulta, você pode acessar a seção "Agendar Consulta" em nosso site.',
      'Temos várias especialidades médicas disponíveis. Qual você está procurando?'
    ];
    // Simula a resposta do assistente após 1 segundo
    setTimeout(() => {
      const resposta = respostas[Math.floor(Math.random() * respostas.length)];
      alert(resposta); // Simulando a resposta do assistente aqui
    }, 1000);
  };

  // Efeito para monitorar o scroll
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setNavbarStyle(prevState => ({
          ...prevState,
          top: '0'
        }));
      } else {
        setNavbarStyle(prevState => ({
          ...prevState,
          top: '-80px'
        }));
      }

      if (currentScrollPos > 100) {
        setNavbarStyle(prevState => ({
          ...prevState,
          backgroundColor: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '10px 0'
        }));
      } else {
        setNavbarStyle(prevState => ({
          ...prevState,
          backgroundColor: '#fff',
          boxShadow: 'none',
          padding: '15px 0'
        }));
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
  return (

    <>
      <header className="cabecalho">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/logo-sabara.png" alt="Logo Hospital Sabará" className="logo-hospital" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuNavegacao"
              aria-controls="menuNavegacao"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menuNavegacao">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link active" to="/">Início</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/biblioteca">Biblioteca de Laudos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/documentos">Documentos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/telemedicina">Telemedicina</Link></li>
                <li className="nav-item botao-login"><Link className="btn btn-primary" to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="banner-principal">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 info-banner">
              <h1>Telemedicina Avançada com Inteligência Artificial</h1>
              <p>
                O Hospital Sabará revoluciona o atendimento médico à distância com
                tecnologia de ponta e IA para diagnósticos mais precisos e atendimento personalizado.
              </p>
              <div className="botoes-banner">
                <Link to="/telemedicina" className="btn btn-primary btn-lg">Agendar Consulta</Link>
                <a href="#como-funciona" className="btn btn-outline-secondary btn-lg">Saiba Mais</a>
              </div>
            </div>
            <div className="col-lg-6 imagem-banner">
              <img src="/Ilustration3.png" alt="Telemedicina com IA" className="img-fluid rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="como-funciona">
        <div className="container">
          <h2 className="titulo-secao text-center">Como Funciona a Telemedicina com IA</h2>
          <div className="row etapas">
            {[
              { icon: "calendar-check", title: "Agendamento", text: "Marque sua consulta online escolhendo a especialidade e o médico disponível." },
              { icon: "video", title: "Consulta Virtual", text: "Realize sua consulta por videochamada com suporte inteligente da nossa IA." },
              { icon: "file-medical", title: "Documentação", text: "Receba laudos, receitas e orientações digitais gerados com auxílio da IA." }
            ].map((step, index) => (
              <div className="col-md-4" key={index}>
                <div className="card etapa">
                  <div className="card-body">
                    <div className="icone-etapa">
                      <i className={`fas fa-${step.icon}`}></i>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vantagens-ia">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="/Hospital 1.jpg" alt="Vantagens da IA na medicina" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h2>Vantagens da IA na Telemedicina</h2>
              <ul className="lista-vantagens">
                {[
                  ["Diagnósticos Mais Precisos", "Nossa IA analisa uma vasta base de dados médicos para auxiliar os especialistas."],
                  ["Documentação Automatizada", "Geração inteligente de relatórios e documentos médicos com alta precisão."],
                  ["Monitoramento Contínuo", "Acompanhamento inteligente de parâmetros de saúde e evolução do tratamento."]
                ].map(([title, desc], index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="especialidades">
        <div className="container">
          <h2 className="titulo-secao text-center">Especialidades Disponíveis</h2>
          <div className="row">
            {[
              ["/Pediatria.jpg", "Pediatria", "Atendimento especializado para crianças com diagnóstico auxiliado por IA."],
              ["/cardiologia.jpg", "Cardiologia", "Análise avançada de exames cardíacos com tecnologia de ponta."],
              ["/Dermatologia.jpg", "Dermatologia", "Diagnóstico visual auxiliado por reconhecimento de imagem por IA."],
              ["/Psicologia.jpg", "Psicologia", "Suporte psicológico com monitoramento inteligente de padrões emocionais."]
            ].map(([img, title, desc], index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="card especialidade">
                  <img src={img} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="preview-videochamada">
        <div className="container">
          <h2 className="titulo-secao text-center">Experimente Nossa Plataforma de Telemedicina</h2>
          <div className="demo-telemedicina">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="video-container">
                  <div className="tela-video">
                    <div className="video-principal">
                      <img src="/Doctor3.jpg" alt="Médico" className="img-fluid" />
                      <div className="nome-usuario">Dr. Paulo Mendes</div>
                    </div>
                    <div className="video-paciente">
                      <img src="/boy2.jpg" alt="Paciente" className="img-fluid" />
                      <div className="nome-usuario">Você</div>
                    </div>
                    <div className="controles-video">
                      <button className="btn-controle"><i className="fas fa-microphone-slash"></i></button>
                      <button className="btn-controle"><i className="fas fa-video"></i></button>
                      <button className="btn-controle btn-encerrar"><i className="fas fa-phone-slash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="recursos-telemedicina">
                  <h3>Recursos Avançados</h3>
                  <ul className="lista-recursos">
                    {[
                      "Assistente de IA durante toda a consulta",
                      "Transcrição em tempo real da consulta",
                      "Geração automática de documentos médicos",
                      "Compartilhamento seguro de exames e imagens",
                      "Padrão de segurança hospitalar para seus dados"
                    ].map((text, index) => (
                      <li key={index}><i className="fas fa-check"></i> {text}</li>
                    ))}
                  </ul>
                  <Link to="/telemedicina" className="btn btn-primary">Experimentar Agora</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="rodape">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/logo-sabara.png" alt="Logo Hospital Sabará" className="logo-rodape" />
              <p className="sobre-rodape">
                O Hospital Sabará é referência em inovação tecnológica aplicada à saúde,
                integrando IA e telemedicina para um atendimento humanizado e eficiente.
              </p>
            </div>
            <div className="col-md-4">
              <h4>Links Rápidos</h4>
              <ul className="links-rodape">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/login">Área do Paciente</Link></li>
                <li><Link to="/login">Área do Médico</Link></li>
                <li><Link to="/biblioteca">Laudos e Documentos</Link></li>
                <li><Link to="/telemedicina">Agendar Consulta</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contato</h4>
              <ul className="contato-rodape">
                <li><i className="fas fa-map-marker-alt"></i> Av. Angélica, 1987 - São Paulo, SP</li>
                <li><i className="fas fa-phone"></i> (11) 3155-2800 | (11) 3235-2800</li>
                <li><i className="fas fa-envelope"></i> CEP 01228-200</li>
              </ul>
              <div className="redes-sociais">
                <a href="https://www.facebook.com/HospitalSabara" className="rede-social"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/hospitalsabara/" className="rede-social"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/hospital-infantil-sabara/" className="rede-social"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/saudedainfancia" className="rede-social"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="direitos">
            <p>© 2025 Hospital Sabará. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      <AssistenteVirtual />
    </>

  );

}
