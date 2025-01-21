import React from 'react'; // Asegúrate de que esta línea esté presente
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;