import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  
  <App />
  
);

