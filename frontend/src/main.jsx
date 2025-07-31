import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agendamento from './pages/Agendamento.jsx'

import Horarios from './pages/horarios.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Horarios />
  </StrictMode>,
)
