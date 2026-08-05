import { NavLink, Link } from "react-router-dom";
import logodl from "../../assets/imagens/logodl.png";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        
       
        <Link to="/" className="header-logo-link">
          <img src={logodl} alt="Dantas Limpeza Logo" className="header-logo" />
        </Link>
        
       
        <nav className="header-nav">
       
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/quem-somos" className="nav-link">
            Quem somos
          </NavLink>
          <NavLink to="/servicos" className="nav-link">
            Serviços
          </NavLink>
          <NavLink to="/duvidas" className="nav-link">
            Dúvidas
          </NavLink>
        </nav>

       
        <div className="header-right">
         
          <NavLink 
            to="/contato" 
            className={({ isActive }) => isActive ? "contact-btn active" : "contact-btn"}
          >
            Entre em contato
          </NavLink>
        </div>

      </div>
    </header>
  );
}

export default Header;