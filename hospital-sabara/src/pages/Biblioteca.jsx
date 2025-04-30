import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles-biblioteca.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Biblioteca() {
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
                <li className="nav-item"><Link className="nav-link active" to="/biblioteca">Biblioteca de Laudos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/documentos">Documentos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/telemedicina">Telemedicina</Link></li>
                <li className="nav-item botao-login"><Link className="btn btn-primary" to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="secao-biblioteca">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="titulo-secao">Biblioteca de Laudos</h1>
              <p className="subtitulo-secao">Visualize e gerencie todos os seus documentos médicos em um só lugar</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3">
              <div className="card card-filtros">
                <div className="card-header">
                  <h4><i className="fas fa-filter me-2"></i>Filtros</h4>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Tipo de Documento</label>
                    {[
                      { id: "checkLaudos", label: "Laudos" },
                      { id: "checkReceitas", label: "Receitas" },
                      { id: "checkAtestados", label: "Atestados" },
                      { id: "checkExames", label: "Exames" },
                    ].map((item) => (
                      <div className="form-check" key={item.id}>
                        <input className="form-check-input" type="checkbox" id={item.id} defaultChecked />
                        <label className="form-check-label" htmlFor={item.id}>{item.label}</label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Período</label>
                    <select className="form-select" id="filtroPeriodo">
                      <option value="todos">Todos</option>
                      <option value="30dias">Últimos 30 dias</option>
                      <option value="6meses">Últimos 6 meses</option>
                      <option value="1ano">Último ano</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="filtroEspecialidade" className="form-label">Especialidade</label>
                    <select className="form-select" id="filtroEspecialidade">
                      <option value="todas">Todas</option>
                      <option value="pediatria">Pediatria</option>
                      <option value="cardiologia">Cardiologia</option>
                      <option value="dermatologia">Dermatologia</option>
                      <option value="psicologia">Psicologia</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="filtroPaciente" className="form-label">Paciente</label>
                    <input type="text" className="form-control" id="filtroPaciente" placeholder="Nome do paciente" />
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary" id="btnAplicarFiltros">Aplicar Filtros</button>
                  </div>
                </div>
              </div>

              <div className="card card-estatisticas mt-4">
                <div className="card-header">
                  <h4><i className="fas fa-chart-pie me-2"></i>Estatísticas</h4>
                </div>
                <div className="card-body">
                  {[
                    ["Total de Documentos", 42],
                    ["Laudos", 12],
                    ["Receitas", 18],
                    ["Atestados", 8],
                    ["Exames", 4],
                  ].map(([label, valor], idx) => (
                    <div className="estatistica-item" key={idx}>
                      <div className="estatistica-valor">{valor}</div>
                      <div className="estatistica-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="card card-busca">
                <div className="card-body">
                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Buscar documento..." id="buscaDocumento" />
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" id="ordenarPor">
                        <option value="data-recente">Data (Mais recente)</option>
                        <option value="data-antiga">Data (Mais antiga)</option>
                        <option value="nome-az">Nome (A-Z)</option>
                        <option value="nome-za">Nome (Z-A)</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <div className="btn-group w-100" role="group">
                        <button type="button" className="btn btn-outline-secondary active" id="btnViewGrid"><i className="fas fa-th-large"></i></button>
                        <button type="button" className="btn btn-outline-secondary" id="btnViewList"><i className="fas fa-list"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="documentos-grid mt-4" id="visualizacaoGrid">
                <div className="row g-4">
                  {[...Array(6)].map((_, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="card documento">
                        <div className="tipo-documento laudo">
                          <i className="fas fa-file-medical"></i>
                        </div>
                        <div className="card-body">
                          <h5 className="titulo-documento">Laudo de Consulta {i + 1}</h5>
                          <div className="meta-documento">
                            <div className="meta-item"><i className="fas fa-calendar"></i> 20/04/2025</div>
                            <div className="meta-item"><i className="fas fa-user-md"></i> Dr. Exemplo</div>
                          </div>
                          <p className="descricao-documento">Descrição breve do conteúdo médico do documento.</p>
                          <div className="d-flex justify-content-between">
                            <span className="badge bg-info">Especialidade</span>
                            <div className="acoes-documento">
                              <button className="btn btn-sm btn-light" title="Visualizar"><i className="fas fa-eye"></i></button>
                              <button className="btn btn-sm btn-light" title="Baixar"><i className="fas fa-download"></i></button>
                              <button className="btn btn-sm btn-light" title="Compartilhar"><i className="fas fa-share-alt"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visualização em lista e paginação poderiam ser adicionadas com estado controlado futuramente */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
