import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agendamento from './pages/cria_agendamento.jsx'

import Horarios from './pages/lista_agendamentos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Horarios />
  </StrictMode>,
)
