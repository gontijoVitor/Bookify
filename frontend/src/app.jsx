// App.jsx
import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/dashboard.jsx';
import Schedule from './pages/schedule.jsx';
import UserLogin from './pages/user_login.jsx';
import UserSignin from './pages/user_signin.jsx';
import Settings from './pages/settings.jsx'
import UserRecovery from "./pages/user_recovery.jsx";
import ResetPassword from "./pages/reset_password.jsx";
import Customers from "./pages/customers.jsx";

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
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signin" element={<UserSignin />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user_recovery" element={<UserRecovery />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/customers" element={<Customers />} />

      </Routes>
    </div>
  );
}
