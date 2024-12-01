import React, { useState } from "react";

const Dashboard = () => {
  const [messages, setMessages] = useState([
    { sender: "outgoing", text: "Olá, tudo bem?" },
    { sender: "incoming", text: "Oi! Tudo ótimo, e você?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: "outgoing", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-green-600 text-white shadow-md">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex space-x-6">
          <button className="hover:underline">Notas</button>
          <button className="hover:underline">Perfil</button>
          <button className="hover:underline">Sair</button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-grow p-6 space-y-6 overflow-y-auto bg-gray-200">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "outgoing" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                message.sender === "outgoing"
                  ? "bg-green-500 text-white"
                  : "bg-white text-black shadow-md"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center px-6 py-3 bg-white border-t shadow-md"
      >
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="ml-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
