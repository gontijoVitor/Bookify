import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agendamento from './pages/cria_agendamento.jsx'

import User_login from './pages/login_usuario.jsx';
import User_register from './pages/cadastro_usuario.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User_login />
  </StrictMode>,
)
