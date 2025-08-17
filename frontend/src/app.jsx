// App.jsx
import { Routes, Route } from "react-router-dom";

import Agendamento from './pages/cria_agendamento.jsx'
import User_login from './pages/user_login.jsx';
import User_register from './pages/user_signin.jsx';
import Config from './pages/configuracoes.jsx';
import Dashboard from './pages/dashboard.jsx';
import Horarios from './pages/lista_agendamentos.jsx';
import User_recovery from './pages/user_recovery.jsx';
import Nova_senha from './pages/nova_senha.jsx';

export default function App({ children }) {
  const layoutStyle = {
    display: "flex",
    alignItems: "center",      // Centraliza verticalmente
    justifyContent: "center",  // Centraliza horizontalmente
    minHeight: "100vh",        // Ocupa toda a altura
    width: "100vw",            // Garante largura total
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  return (
    <div style={layoutStyle}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/login" element={<User_login />} />
        <Route path="/registrar" element={<User_register />} />
        <Route path="/config" element={<Config />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/recuperar" element={<User_recovery />} />
        <Route path="/nova-senha" element={<Nova_senha />} />
      </Routes>
    </div>
  );
}
