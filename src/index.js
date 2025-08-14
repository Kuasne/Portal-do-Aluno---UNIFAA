import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Enviar dados para analytics (opcional)
reportWebVitals((metric) => {
  console.log(metric); // Log para o console ou substitua pela função para enviar para o analytics
});
