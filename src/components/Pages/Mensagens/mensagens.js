import React, { useState, useEffect } from "react";
import "./Mensagens.css"; // Importando o CSS

const App = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); // Para gerenciar o carregamento dos dados

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("API_URL/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento quando os dados forem obtidos
    }
  };

  const sendMessage = () => {
    console.log("Mensagem enviada:", message);
    setMessage("");
  };

  return (
    <div className="container">
      {loading ? (
        <div>Carregando...</div> // Indicador de carregamento
      ) : (
        <ul>
          {students.map((item) => (
            <li key={item.id} className="studentContainer">
              <img src={item.photo} alt={item.name} className="studentImage" />
              <p className="studentName">{item.name}</p>
            </li>
          ))}
        </ul>
      )}

      <input
        className="input"
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default App;
