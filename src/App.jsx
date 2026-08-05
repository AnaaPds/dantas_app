import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Importações das suas páginas
import Home from "./pages/Home/Home";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Servicos from "./pages/Servicos/Servicos";
import Duvidas from "./pages/Duvidas/Duvidas";
import Contato from "./pages/Contato/Contato"; 
import Politica from "./pages/Politica/Politica";
import Termos from "./pages/Termos/Termos";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rota da página principal (Home) */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página Quem Somos */}
        <Route path="/quem-somos" element={<QuemSomos />} />

        {/* Rota para a página de Serviços */}
        <Route path="/servicos" element={<Servicos />} />

        {/* Rota para a página de Dúvidas (FAQ) */}
        <Route path="/duvidas" element={<Duvidas />} />

        {/* Rota para a página Entre em contato */}
        <Route path="/contato" element={<Contato />} />

        {/* Rotas para as páginas exigidas no Footer */}
        <Route path="/politica-de-privacidade" element={<Politica />} />
        <Route path="/termos-de-uso" element={<Termos />} />

        {/* Rota dinâmica para a página de cada serviço (:id) */}
        <Route path="/servico/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;