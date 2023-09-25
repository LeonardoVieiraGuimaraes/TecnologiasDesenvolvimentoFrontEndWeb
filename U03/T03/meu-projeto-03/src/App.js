import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe 

// Importe os componentes de páginas aqui
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        {/* Inclua sua barra de navegação aqui */}
        <Navigation />

        <Routes> {/* Use o componente 'Routes' em vez de 'Switch' */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Rota para 'NotFound' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
