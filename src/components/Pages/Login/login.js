/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"; // Importando useState
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import { Link } from "react-router-dom"; // Importando Link
import "./Login.css";

// Shared Tailwind CSS classes
const inputClasses = "mt-1 block w-full border border-zinc-300 rounded-md p-2";
const buttonClasses =
  "w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700";

const Login = () => {
  // Definindo os estados para o nome de usuário e a senha
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para exibir erro
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Validação: usuário "aluno" e senha "123"
    if (username === "Lorenzo" && password === "123") {
      navigate("/portal"); // Redireciona para o portal do aluno
    } else {
      setError("Usuário ou senha incorretos"); // Exibe mensagem de erro
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-400 to-teal-600 text-white">
      <div className="text-center mb-8">
        <img className="login-img" src="../img/logo.png"></img>
        <h1 className="text-4xl font-bold">Portal do Aluno</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-lg shadow-md p-6 w-80"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-zinc-700"
          >
            Usuário
          </label>
          <input
            type="text"
            id="username"
            className={inputClasses}
            placeholder="Digite seu usuário"
            value={username} // Vincula o valor ao estado username
            onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username com o valor digitado
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-700"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            className={inputClasses}
            placeholder="Digite sua senha"
            value={password} // Vincula o valor ao estado password
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password com o valor digitado
            required
          />
        </div>

        {/* Exibindo a mensagem de erro, caso haja */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="flex justify-between mb-4">
          <Link
            to="/recuperar-senha"
            className="text-sm text-teal-600 hover:underline"
          >
            Esqueci minha senha
          </Link>
        </div>
        <button type="submit" className={buttonClasses}>
          ENTRAR
        </button>
      </form>
    </div>
  );
};

export default Login;
