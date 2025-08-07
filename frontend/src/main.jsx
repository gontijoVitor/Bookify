import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agendamento from './pages/cria_agendamento.jsx'

import User_login from './pages/user_login.jsx';
import User_register from './pages/user_signin.jsx';
import Config from './pages/configuracoes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Config />
  </StrictMode>,
)
