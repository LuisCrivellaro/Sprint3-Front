import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/styles-login.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
  return (
    <div className="tela-login d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow login-container">
        <div className="text-center mb-4">
          <img src="/logo-sabara.png" alt="Logo Hospital Sabará" className="logo-login" />
          <h2 className="titulo-login">Área Restrita</h2>
          <p className="subtitulo-login">Acesse com seu login e senha</p>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="emailLogin" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="emailLogin" placeholder="seuemail@exemplo.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="senhaLogin" className="form-label">Senha</label>
            <input type="password" className="form-control" id="senhaLogin" placeholder="Digite sua senha" />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <p className="texto-recuperar">Esqueceu a senha? <Link to="/recuperar">Clique aqui</Link></p>
        </div>
      </div>
    </div>
  );
}
