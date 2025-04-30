import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles-gerenciamento.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Gerenciamento() {
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
                <li className="nav-item"><Link className="nav-link active" to="/documentos">Documentos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/telemedicina">Telemedicina</Link></li>
                <li className="nav-item botao-login"><Link className="btn btn-primary" to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="secao-gerenciamento">
        <div className="container">
          <h1 className="titulo-secao">Gerenciamento de Documentos</h1>
          <p className="subtitulo-secao">Envie, edite ou exclua documentos médicos da plataforma</p>

          <div className="card mt-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0"><i className="fas fa-upload me-2"></i>Enviar Novo Documento</h4>
            </div>
            <div className="card-body">
              <form id="formUpload">
                <div className="mb-3">
                  <label htmlFor="nomeDocumento" className="form-label">Nome do Documento</label>
                  <input type="text" className="form-control" id="nomeDocumento" placeholder="Ex: Laudo Pediatria Abril 2025" />
                </div>

                <div className="mb-3">
                  <label htmlFor="tipoDocumento" className="form-label">Tipo</label>
                  <select className="form-select" id="tipoDocumento">
                    <option value="laudo">Laudo</option>
                    <option value="receita">Receita</option>
                    <option value="atestado">Atestado</option>
                    <option value="exame">Exame</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="especialidadeDocumento" className="form-label">Especialidade</label>
                  <select className="form-select" id="especialidadeDocumento">
                    <option value="pediatria">Pediatria</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="dermatologia">Dermatologia</option>
                    <option value="psicologia">Psicologia</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="arquivoDocumento" className="form-label">Arquivo</label>
                  <input className="form-control" type="file" id="arquivoDocumento" />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success"><i className="fas fa-paper-plane me-2"></i>Enviar Documento</button>
                </div>
              </form>
            </div>
          </div>

          <div className="card mt-5">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0"><i className="fas fa-folder-open me-2"></i>Documentos Enviados</h4>
              <div>
                <input type="text" className="form-control" placeholder="Buscar documento..." />
              </div>
            </div>
            <div className="card-body">
              <div className="row g-4">
                {[...Array(4)].map((_, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="card documento-enviado">
                      <div className="card-body">
                        <h5 className="titulo-documento">Laudo {i + 1}</h5>
                        <p className="descricao-documento">Descrição resumida do documento médico enviado.</p>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="badge bg-info">Especialidade</span>
                          <div className="acoes-documento">
                            <button className="btn btn-sm btn-primary"><i className="fas fa-eye"></i></button>
                            <button className="btn btn-sm btn-warning"><i className="fas fa-edit"></i></button>
                            <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
