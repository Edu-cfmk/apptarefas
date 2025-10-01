import TarefasSimples from "./Pages/tarefasSimples";
import TarefasComStatus from "./Pages/tarefasComStatus";
import ListaSupermercado from "./Pages/ListaSupermercado";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container pt-3">
        <nav className="text-center">
          <Link to="/" className="btn btn-outline-primary btn-sm me-3">
            Tarefas Simples
          </Link>
          <Link to="/status" className="btn btn-outline-primary btn-sm me-3">
            Tarefas com Status
          </Link>
          <Link to="/mercado" className="btn btn-outline-primary btn-sm">
            Lista de Mercado
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/status" element={<TarefasComStatus />} />
          <Route path="/mercado" element={<ListaSupermercado />} />
        </Routes>
      </div>
    </Router>
  );
}