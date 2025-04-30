import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles-telemedicina.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Telemedicina() {
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
                <li className="nav-item"><Link className="nav-link" to="/">Início</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/biblioteca">Biblioteca de Laudos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/documentos">Documentos</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/telemedicina">Telemedicina</Link></li>
                <li className="nav-item botao-login"><Link className="btn btn-primary" to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="tela-consulta">
        <div className="container">
          <div className="video-chamada">
            <div className="video-profissional">
              <img src="/Doctor3.jpg" alt="Profissional" className="video-img" />
              <span className="nome-usuario">Dr. Paulo Mendes</span>
            </div>
            <div className="video-paciente">
              <img src="/boy2.jpg" alt="Paciente" className="video-img" />
              <span className="nome-usuario">Você</span>
            </div>
            <div className="controles-video">
              <button className="btn-controle"><i className="fas fa-microphone-slash"></i></button>
              <button className="btn-controle"><i className="fas fa-video"></i></button>
              <button className="btn-controle btn-encerrar"><i className="fas fa-phone-slash"></i></button>
            </div>
          </div>

          <div className="chat-consulta">
            <div className="cabecalho-chat">
              <h4>Transcrição da Consulta</h4>
            </div>
            <div className="transcricao-chat">
              <p><strong>Dr. Paulo:</strong> Olá! Você pode me dizer o que está sentindo hoje?</p>
              <p><strong>Você:</strong> Estou com dores de cabeça constantes e cansaço.</p>
              <p><strong>Dr. Paulo:</strong> Entendido. Vamos fazer uma breve avaliação para investigar.</p>
            </div>
            <div className="entrada-chat">
              <input type="text" placeholder="Digite aqui sua mensagem..." />
              <button className="btn-enviar"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
