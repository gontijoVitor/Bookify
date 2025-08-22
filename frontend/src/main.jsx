import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './app.jsx';
import Topbar from './components/topbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Topbar/>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
