// NAVEGAÇÃO E ATIVOS REACT
// Quadro 26 – Configuração

import { BrowserRouter as Router, Route } from "React-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
export default App;
