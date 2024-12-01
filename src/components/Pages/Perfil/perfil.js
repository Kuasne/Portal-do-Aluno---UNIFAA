import React from "react";
import { Link } from "react-router-dom"; // Adicionando Link para navegação
import "./perfil.css";

const Perfil = () => {
  return (
    <div className="perfil-page">
      {/* Sidebar */}
      <div className="sidebar-perfil">
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
      <div className="perfil-container">
        <Link to="/portal" className="voltar-btn">
          Voltar
        </Link>

        <div className="perfil p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
          <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">
            Perfil do Aluno
          </h2>

          {/* Imagem de Perfil */}
          <div className="text-center">
            <img
              src="https://img.freepik.com/fotos-gratis/adolescente-etnico-na-camisa-listrada-brilhante-e-oculos-de-sol_23-2148205389.jpg?t=st=1733055508~exp=1733059108~hmac=8f54c7a052b868039b1931bdc4f05f8480e697d584e7e88f13d62064022fe17c&w=360"
              alt="Perfil"
              className="perfil-image"
            />
          </div>

          {/* Informações do Aluno */}
          <div className="text-lg text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Nome:</span> Lorenzo Gabriel
              Almeida Silva
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              lorenzogas95@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Curso:</span> Engenharia de
              Software
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Perfil;
