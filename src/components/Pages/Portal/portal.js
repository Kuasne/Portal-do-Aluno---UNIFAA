import React from "react";
import { Link } from "react-router-dom"; // Importando Link do react-router-dom
import "./Portal.css";

const Portal = () => {
  return (
    <div className="portal-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Portal do Aluno</h1>
        <nav>
          <ul>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            <li>
              <Link to="/notas">Notas</Link>
            </li>
            <li>
              <Link to="/mensagens">Mensagens</Link>
            </li>
            <li>
              <Link to="/login">Sair</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className="main-content">
        <h1 className="portal-h1">Bem-vindo ao portal do aluno!</h1>
        {/* Imagem redonda */}
        <img
          src="https://img.freepik.com/fotos-gratis/adolescente-etnico-na-camisa-listrada-brilhante-e-oculos-de-sol_23-2148205389.jpg?t=st=1733055508~exp=1733059108~hmac=8f54c7a052b868039b1931bdc4f05f8480e697d584e7e88f13d62064022fe17c&w=360"
          alt="Perfil"
          className="profile-image"
        />
        <h2 className="profile-h2">
          <strong>Lorenzo Gabriel Almeida Silva</strong>
        </h2>
        <hr></hr>
      </div>

      {/* ADICIONE MAIS CONTEÚDO AQUI */}
      <div>
        {/* Conteúdo adicional */}
        {/*... */}
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2024 - Todos os direitos reservados - UNIFAA</p>
      </footer>
    </div>
  );
};

export default Portal;
