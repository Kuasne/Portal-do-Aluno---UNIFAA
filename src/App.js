import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../src/components/Pages/Login/login";
import Mensagens from "../src/components/Pages/Mensagens/mensagens";
import Portal from "../src/components/Pages/Portal/portal";
import Notas from "../src/components/Pages/Notas/notas";
import Perfil from "../src/components/Pages/Perfil/perfil";
import Recusenha from "../src/components/Pages/Recusenha/recusenha";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mensagens" element={<Mensagens />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/recuperar-senha" element={<Recusenha />} />
      </Routes>
    </Router>
  );
};

export default App; // Certifique-se de que há um export default aqui!
