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
              <Link to="/">Sair</Link>
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
        <hr />

        {/* Seção de Avisos */}
        <section className="section">
          <h2 className="section-title">Avisos Importantes</h2>
          <ul className="notice-list">
            <li>📌 Inscrições para monitoria abertas até 10/12.</li>
            <li>📌 Prova final de UX/UI Designer: 06/12 às 19h.</li>
            <li>📌 Férias começam em 23/12!</li>
          </ul>
        </section>

        {/* Seção de Tarefas Pendentes */}
        <section className="section">
          <h2 className="section-title">Tarefas Pendentes</h2>
          <ul className="task-list">
            <li>✅ Entregar moodboard até 06/12.</li>
            <li>✅ Revisar apresentação do projeto final.</li>
            <li>✅ Estudar para a prova de UX/UI Designer.</li>
          </ul>
        </section>

        {/* Seção de Calendário */}
        <section className="section">
          <h2 className="section-title">Calendário de Eventos</h2>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Evento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15/12</td>
                <td>Feira de Ciências</td>
              </tr>
              <tr>
                <td>20/12</td>
                <td>Prova final de Matemática</td>
              </tr>
              <tr>
                <td>23/12</td>
                <td>Início das Férias</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2024 - Todos os direitos reservados - UNIFAA</p>
      </footer>
    </div>
  );
};

export default Portal;
