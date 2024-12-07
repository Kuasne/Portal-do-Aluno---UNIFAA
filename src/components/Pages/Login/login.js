/* eslint-disable jsx-a11y/alt-text */
/* src/Login.jsx */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // CSS atualizado

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Lorenzo" && password === "123") {
      navigate("../Portal");
    } else {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img className="login-img" src="/src/img/logo.png" />
        <h1 className="login-title">Portal do Aluno</h1>
        <form onSubmit={handleLogin} className="form">
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Digite seu usuário"
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Digite sua senha"
                className="input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
          <button
            type="submit"
            className="submit-btn"
            disabled={!username || !password}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
