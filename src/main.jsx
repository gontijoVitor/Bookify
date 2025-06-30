import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agendamento from './pages/Agendamento.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Agendamento />
  </StrictMode>,
)
