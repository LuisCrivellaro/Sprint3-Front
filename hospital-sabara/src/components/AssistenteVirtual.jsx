import React, { useState, useEffect } from "react";
import "../assets/styles/styles-index.css";

export default function AssistenteVirtual() {
  const [aberto, setAberto] = useState(false);
  const [minimizado, setMinimizado] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState([
    {
      autor: "assistente",
      texto: "Olá! Sou GuardianPro, o assistente virtual do Hospital Sabará. Como posso ajudar você hoje?",
      hora: "Agora",
    },
  ]);

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return;
    setHistorico((prev) => [...prev, { autor: "usuario", texto: mensagem, hora: "Agora" }]);
    setMensagem("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") enviarMensagem();
  };

  useEffect(() => {
    if (aberto && !minimizado) {
      const mensagensDiv = document.getElementById("mensagensAssistente");
      mensagensDiv.scrollTop = mensagensDiv.scrollHeight;
    }
  }, [historico, aberto, minimizado]);

  if (!aberto) {
    return (
      <div className="botao-assistente" id="botaoAssistente" onClick={() => setAberto(true)}>
        <i className="fas fa-robot"></i>
      </div>
    );
  }

  return (
    <div className="assistente-ia" id="assistenteIA">
      <div className="cabecalho-assistente">
        <div className="info-assistente">
          <div className="avatar-assistente">
            <i className="fas fa-robot"></i>
          </div>
          <div className="nome-assistente">GuardianPro - Assistente Virtual</div>
        </div>
        <div className="acoes-assistente">
          <button className="btn-minimizar" onClick={() => setMinimizado(!minimizado)}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="btn-fechar" onClick={() => setAberto(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {!minimizado && (
        <div className="corpo-assistente">
          <div className="mensagens" id="mensagensAssistente">
            {historico.map((msg, idx) => (
              <div
                className={`mensagem mensagem-${msg.autor}`}
                key={idx}
              >
                <div className="conteudo-mensagem">{msg.texto}</div>
                <div className="timestamp">{msg.hora}</div>
              </div>
            ))}
          </div>
          <div className="entrada-mensagem">
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={handleKeyDown}
              id="mensagemUsuario"
            />
            <button className="btn-enviar" id="enviarMensagem" onClick={enviarMensagem}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
