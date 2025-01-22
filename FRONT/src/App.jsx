import React from 'react'; // Asegúrate de que esta línea esté presente
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import FileReader from './screens/fileReader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FileReader" element={<FileReader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;