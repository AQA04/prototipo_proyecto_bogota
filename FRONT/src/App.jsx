//App.jsx, la madre
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
//Importaciones


//Funcion principal App
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