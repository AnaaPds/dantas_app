import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "../../assets/imagens/logodl.png";
import instagram from "../../assets/imagens/instagram.png";
import whatsapp from "../../assets/imagens/whatsapp.png";

function Footer() {
  const linkInstagram = "https://www.instagram.com/dantas.limpezaprofissional?igsh=MW54enkyMjN0M2F2Yw==";
  const telefoneWhatsApp = "5511962672165"; 
  const linkWhatsApp = `https://wa.me/${telefoneWhatsApp}`;

  return (
    <footer className="footer">

      <div className="footer-left">
        <img
          src={logo}
          alt="Logo"
          className="footer-logo"
        />

        <p>
          Mais de 10 anos oferecendo limpeza profissional
          para pós-obra, salas comerciais e escritórios,
          com qualidade, confiança e excelência.
        </p>

        <div className="footer-social">
          <a href={linkInstagram} target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              alt="Instagram"
            />
          </a>

          <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
            <img
              src={whatsapp}
              alt="WhatsApp"
            />
          </a>
        </div>

        <span>São Paulo - SP</span>
      </div>

      <div className="footer-right">
        <h4>CONTATOS</h4>

        <p>+55 11 96267-2165</p>

        <p>dantaslimpezacom@gmail.com</p>

        <p>
          <Link to="/duvidas" className="footer-link">DÚVIDAS</Link>
        </p>

        <p>
          <Link to="/politica-de-privacidade" className="footer-link">POLÍTICA DE PRIVACIDADE</Link>
        </p>

        <p>
          <Link to="/termos-de-uso" className="footer-link">TERMOS DE USO</Link>
        </p>
      </div>

      <div className="footer-bottom">
        © 2026 Dantas Limpeza Profissional. Todos os direitos reservados.
      </div>

    </footer>
  );
}

export default Footer;