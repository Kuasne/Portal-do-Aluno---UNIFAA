/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mensagens.css";

const sharedClasses = {
  cardContainer: "bg-card p-4",
  text: "text-md font-semibold",
  textPrimary: "text-primary",
  textMuted: "text-muted-foreground",
  bgMuted: "bg-muted",
  bgPrimary: "bg-primary",
  rounded: "rounded-lg",
  flex: "flex",
  itemsCenter: "items-center",
  spaceY: "space-y-2",
  spaceX: "space-x-2",
  mt4: "mt-4",
  mt2: "mt-2",
  mlAuto: "ml-auto",
  wFull: "w-full",
  border: "border border-border",
  bgAccent: "bg-accent",
  textAccent: "text-accent-foreground",
  roundedFull: "rounded-full",
  p2: "p-2",
  flex1: "flex-1",
  hScreen: "h-screen",
  bgBackground: "bg-background",
  textForeground: "text-foreground",
};

const FriendListItem = ({ name, imageSrc, alt, time }) => (
  <li className={`${sharedClasses.flex} ${sharedClasses.itemsCenter}`}>
    <img src={imageSrc} alt={alt} className={`rounded-full mr-2`} />
    <span>{name}</span>
    <span className={`${sharedClasses.textMuted} ${sharedClasses.mlAuto}`}>
      {time}
    </span>
  </li>
);

const Mensagens = () => {
  // Estado para armazenar a mensagem digitada
  const [message, setMessage] = useState("");
  // Estado para armazenar o histórico de mensagens
  const [messages, setMessages] = useState([]);

  // Lista de usuários para simular a interação no chat
  const users = [
    "João Gabriel",
    "Maria Eduarda Huertas",
    "Lucas Pereira",
    "Kairon Alves",
    "Harry Ki yan",
    "Norman Winston",
    "Nuru Alves",
  ];

  // Estado para controle do índice do usuário
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  // Recuperar as mensagens do localStorage ao carregar o componente
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages"));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  // Função para gerar respostas baseadas na mensagem enviada
  const generateResponse = (message) => {
    // Exemplo de respostas baseadas em palavras-chave
    if (message.includes("olá") || message.includes("oi")) {
      return "Oi, como posso te ajudar hoje?";
    }
    if (message.includes("problema") || message.includes("erro")) {
      return "Lamento pelo erro. Vamos tentar resolver isso!";
    }
    if (message.includes("hora") || message.includes("tempo")) {
      return "Ok! Com o que mais eu posso te ajudar amigo?";
    }
    if (message.includes("tudo bem?") || message.includes("Tudo bem?")) {
      return "Estou bem amigo e você?, está precisando de ajuda?";
    }
    if (
      message.includes("bom dia") ||
      message.includes("Bom dia") ||
      message.includes("boa tarde") ||
      message.includes("Boa tarde") ||
      message.includes("boa noite") ||
      message.includes("Boa noite")
    ) {
      return "E ae! Como você está hoje?";
    }
    if (message.includes("sair") || message.includes("tchau")) {
      return "Você está saindo do chat. Até mais!";
    }

    return "Olá ! Como posso te ajudar hoje?";
  };

  // Função para lidar com o envio da mensagem
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessages = [...messages, { user: "Você", text: message }];

      setMessages(newMessages); // Atualiza o histórico de mensagens.
      localStorage.setItem("messages", JSON.stringify(newMessages)); // Salva as mensagens no localStorage.
      setMessage(""); // Limpa a mensagem após o envio.

      // Atualiza o índice do usuário
      setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);

      // Gerar resposta baseada na mensagem enviada
      const response = generateResponse(message);
      const updatedMessages = [
        ...newMessages,
        { user: users[currentUserIndex], text: response },
      ];
      setMessages(updatedMessages); // Atualiza as mensagens com a resposta
      localStorage.setItem("messages", JSON.stringify(updatedMessages)); // Salva no localStorage
    }
  };

  // Função para limpar todas as mensagens
  const handleClearMessages = () => {
    setMessages([]); // Limpa o estado de mensagens
    localStorage.removeItem("messages"); // Remove as mensagens do localStorage
  };

  return (
    <div
      className={`${sharedClasses.flex} ${sharedClasses.hScreen} ${sharedClasses.bgBackground} ${sharedClasses.textForeground}`}
    >
      <div className={`w-1/3 ${sharedClasses.cardContainer}`}>
        <Link to="/portal" className="voltar-btn">
          Voltar
        </Link>
        {/* Lista de amigos online */}
        <h2 className="text-lg font-semibold">Lorenzo Almeida</h2>
        <span className={sharedClasses.textMuted}>online</span>
        <h3 className={`${sharedClasses.text} ${sharedClasses.mt4}`}>
          Amigos Online (18)
        </h3>
        <a href="#" className={sharedClasses.textPrimary}>
          Todos
        </a>
        <h3 className={`${sharedClasses.text} ${sharedClasses.mt4}`}>
          Mensagens
        </h3>

        <ul className={sharedClasses.spaceY}>
          <FriendListItem
            name="João Gabriel"
            imageSrc="https://img.freepik.com/fotos-premium/jovem-sentado-ao-ar-livre-vestindo-um-bone-marrom-e-uma-camisa-a-quadros-em-uma-cidade-a-noite_993370-27901.jpg?w=40"
            alt="João Gabriel"
            time="10.44"
          />
          <FriendListItem
            name="Maria Eduarda Huertas"
            imageSrc="https://img.freepik.com/fotos-premium/uma-mulher-com-cabelos-encaracolados-vestindo-um-trench-coat_865278-78515.jpg?w=40"
            alt="Maria Eduarda Huertas"
            time="09.44"
          />
          <FriendListItem
            name="Lucas Pereira"
            imageSrc="https://img.freepik.com/fotos-premium/retrato-fotografico-de-homem-com-laptop-sorridente-e-coworking_1077802-152931.jpg?w=40"
            alt="Lucas Pereira"
            time="05.56"
          />
          <FriendListItem
            name="Kairon Alves"
            imageSrc="https://img.freepik.com/fotos-premium/retrato-de-um-jovem-bonito-em-jaqueta-de-couro-preto-posando-na-rua-retrato-de-bonito-yo_912214-95898.jpg?w=40"
            alt="Kairon Alves"
            time="04.00"
          />
          <FriendListItem
            name="Harry Ki yan"
            imageSrc="https://img.freepik.com/fotos-premium/ha-um-homem-com-oculos-e-uma-jaqueta-de-couro-na-generativa-ai_1035763-11087.jpg?w=40"
            alt="Harry Ki yan"
            time="Ontem"
          />
          <FriendListItem
            name="Norman Winston"
            imageSrc="https://img.freepik.com/fotos-premium/uma-foto-de-brad-pitt-em-fundo-branco_954932-3632.jpg?w=40"
            alt="Norman Winston"
            time="Ontem"
          />
          <FriendListItem
            name="Nuru Alves"
            imageSrc="https://img.freepik.com/fotos-gratis/retrato-de-um-atleta-competindo-no-torneio-dos-jogos-olimpicos_23-2151470890.jpg?t=st=1733076743~exp=1733080343~hmac=72e78941f9a0d7f09f9ea4b28e9ab45567f32d72f4c1c1d8783cc1dd4710d8b1&w=40"
            alt="Nuru Alves"
            time="2 dias atrás"
          />
        </ul>
      </div>

      <div className={`${sharedClasses.flex1} ${sharedClasses.cardContainer}`}>
        <h1>
          <strong className="strong-msg">Mensagens</strong>
        </h1>
        <ul className={sharedClasses.spaceY}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${sharedClasses.bgMuted} ${sharedClasses.p2} ${sharedClasses.rounded} ${sharedClasses.my2}`}
            >
              <p>
                {msg.user}: {msg.text}
              </p>
            </div>
          ))}
        </ul>

        <div className={sharedClasses.mt4}>
          <input
            type="text"
            placeholder="Digite sua Mensagem"
            className={`${sharedClasses.border} ${sharedClasses.p2} ${sharedClasses.wFull} ${sharedClasses.rounded}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="btn-limpar ml-6 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Enviar
          </button>
          <button
            onClick={handleClearMessages}
            className="btn-limpar mt-6 ml-3 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mensagens;
