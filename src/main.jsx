// 1. Importa o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. (Opcional) Importa os scripts JS do Bootstrap, caso use componentes como modal, collapse, etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
