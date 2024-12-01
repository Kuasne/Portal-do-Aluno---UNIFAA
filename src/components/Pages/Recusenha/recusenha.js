import React, { useState } from "react";

const sharedClasses = {
  card: "bg-card p-10 rounded-lg shadow-lg max-w-md w-full text-center",
  input:
    "border border-border rounded-lg p-3 mb-4 w-full focus:outline-none focus:ring focus:ring-ring",
  button:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded-lg w-full transition duration-200 ease-in-out",
};

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, insira um e-mail.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, insira um e-mail válido.");
    } else {
      setError("");
      // Lógica para enviar o link de recuperação de senha
      console.log("Enviando link de recuperação para:", email);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className={sharedClasses.card}>
        <img
          src="https://openui.fly.dev/openui/24x24.svg?text=UNIVAG"
          alt="UNIVAG Logo"
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Esqueceu a senha
        </h2>
        <p className="text-muted-foreground mb-6">
          Para recuperar a sua senha, informe seu endereço de e-mail que nós
          enviaremos um link para a alteração da senha.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Insira seu e-mail de registro"
            className={sharedClasses.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email de registro"
          />
          <button type="submit" className={sharedClasses.button}>
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecuperarSenha;
