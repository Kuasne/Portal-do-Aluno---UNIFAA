import { onCLS, onFID, onLCP } from "web-vitals";

// Função para coletar as métricas e reportá-las
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Usando as funções onCLS, onFID e onLCP
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
  }
};

export default reportWebVitals;
