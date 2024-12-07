import React from "react";
import { Link } from "react-router-dom";
import "./notas.css";

const Notas = () => {
  // Simulando dados de notas
  const disciplinas = [
    { nome: "Front-end Developer", nota: 9.5 },
    { nome: "Android Developer", nota: 9.0 },
    { nome: "Back-end Developer", nota: 7.5 },
    { nome: "UX/UI Designer", nota: 8.0 },
  ];

  // Calculando média
  const calcularMedia = () => {
    const total = disciplinas.reduce((acc, disc) => acc + disc.nota, 0);
    return (total / disciplinas.length).toFixed(1);
  };

  const media = calcularMedia();

  return (
    <div className="perfil-page flex">
      {/* Sidebar */}
      <div className="sidebar w-1/4 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Portal do Aluno</h1>
        <nav>
          <ul>
            <li>
              <Link to="/perfil" className="text-white hover:text-teal-400">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/notas" className="text-white hover:text-teal-400">
                Notas
              </Link>
            </li>
            <li>
              <Link to="/mensagens" className="text-white hover:text-teal-400">
                Mensagens
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-teal-400">
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className="notas w-3/4 p-6">
        <div className="header-notas flex justify-between items-center">
          <h2 className="notas-h2 text-2xl font-bold text-gray-700">
            Minhas Notas
          </h2>
          <Link to="/portal" className="voltar-btn">
            Voltar
          </Link>
        </div>

        {/* Tabela de Notas */}
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-6">
          <thead>
            <tr className="tabela-tr bg-teal-600 text-white">
              <th className="py-2 px-4 border-b">Disciplina</th>
              <th className="py-2 px-4 border-b">Nota</th>
            </tr>
          </thead>
          <tbody className="tbody-tabela">
            {disciplinas.map((disciplina, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  disciplina.nota >= 7 ? "bg-green-50" : "bg-red-50"
                }`}
              >
                <td className="py-2 px-4 border-b">{disciplina.nome}</td>
                <td className="py-2 px-4 border-b">{disciplina.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Média das Notas */}
        <div className="media-notas mt-6 p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">
            Média Geral: {media}
          </h3>
          {media >= 7 ? (
            <p className="text-green-600 font-semibold">
              Parabéns, você está aprovado!
            </p>
          ) : (
            <p className="text-red-600 font-semibold">
              Atenção, você está em recuperação.
            </p>
          )}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2024 - Todos os direitos reservados - UNIFAA</p>
      </footer>
    </div>
  );
};

export default Notas;
