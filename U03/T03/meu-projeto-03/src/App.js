import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importe

// Importe os componentes de páginas aqui
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";

import logo from "./assets/logo.svg";
import "./styles/styles.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        {/* Inclua sua barra de navegação aqui */}
        <Navigation />
        <Routes>
          {" "}
          {/* Use o componente 'Routes' em vez de 'Switch' */}
          <Route path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/contact" component={<Contact />} />
          <Route path="*" component={<NotFound />} /> {/* Rota para 'NotFound' */}
        </Routes>
      </div>
      <div>
        <img src={logo} alt="Logo" />
        <h1 className="title">Meu App React</h1>
      </div>
      <div>
        {/* Inclua sua barra de navegação aqui */}
        <NavBar />
        <Routes>
          {" "}
          {/* Use o componente 'Routes' em vez de 'Switch' */}
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} /> {/* Rota para 'NotFound' */}
          <Route path="/user/:id" component={UserPage} />
        </Routes>
      </div>
    </Router>
    
  );
}
function UserPage({ match }) {
  return <h1>ID do usuário: {match.params.id}</h1>;
}

// function UserPage() {
//   let { path, url } = useRouteMatch(); 

//   return (
//     <div>
//       <h1>Página do usuário</h1>
//       <ul>
//         <li><Link to={`${url}/posts`}>Postagens</Link></li>
//         <li><Link to={`${url}/photos`}>Fotos</Link></li>
//       </ul>
//       <Route path={`${path}/posts`} component={PostPage} /> {/* Corrigido para 'PostPage' */}
//       <Route path={`${path}/photos`} component={PhotosPage} /> {/* Corrigido para 'PhotosPage' */}
//     </div>
//   );
// }

// function PostPage() {
//   return <h2>Postagens do usuário</h2>;
// }

// function PhotosPage() {
//   return <h2>Fotos do usuário</h2>;
// }
export default App;
