import React from 'react'; // Importa React
import { createRoot } from 'react-dom/client'; // Importa createRoot para el renderizado
import App from './App'; // Importa el componente principal de tu aplicación

// Selecciona el elemento del DOM donde se montará la aplicación
const rootElement = document.getElementById('root');

// Crea un root y renderiza la aplicación
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);