import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";


import Home from "./pages/Home/Home";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Servicos from "./pages/Servicos/Servicos";
import Duvidas from "./pages/Duvidas/Duvidas";
import Contato from "./pages/Contato/Contato";
import Politica from "./pages/Politica/Politica";
import Termos from "./pages/Termos/Termos";
import SobreOSite from "./pages/Sobreosite/SobreOSite";

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
        
        <Route path="/" element={<Home />} />

        
        <Route path="/quem-somos" element={<QuemSomos />} />

        
        <Route path="/servicos" element={<Servicos />} />

        
        <Route path="/duvidas" element={<Duvidas />} />

        
        <Route path="/contato" element={<Contato />} />

        
        <Route path="/politica-de-privacidade" element={<Politica />} />
        <Route path="/termos-de-uso" element={<Termos />} />
        <Route path="/sobre-o-site" element={<SobreOSite />} />

       
        <Route path="/servico/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;