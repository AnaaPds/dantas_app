import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import whatsappIcon from "../../assets/imagens/whatsapp.png"; 
import "./Contato.css";

function Contato() {
  
  const telefoneWhatsApp = "5511962672165"; 
  const linkWhatsApp = `https://wa.me/${telefoneWhatsApp}`;

  return (
    <div className="contact-page-wrapper">
      <Header />

      <main className="contact-main-content">
        <div className="contact-header-zone">
          <h1 className="contact-title">Entre em contato</h1>
        </div>

        <div className="contact-sections-container">
          <p className="contact-intro-text">
            Estamos prontos para atender você e oferecer soluções completas em limpeza pós-obra corporativa, comercial e residencial.
          </p>

          <div className="contact-info-block">
            <h3>Informações para Contato</h3>
            <p><strong>Telefone</strong><br />(11) 962672165</p>
            <p><strong>E-mail</strong><br />dantaslimpezacom@gmail.com</p>
          </div>

          <div className="contact-info-block">
            <h3>Localização</h3>
            <p>São Paulo – SP</p>
          </div>

          <div className="contact-action-block">
            <h3>Solicite um Atendimento</h3>
            <p>
              Entre em contato para tirar dúvidas, solicitar informações ou realizar um orçamento. Nossa equipe terá prazer em atender você com rapidez, atenção e profissionalismo.
            </p>

            <h3>WhatsApp</h3>
            <p>Atendimento rápido e prático diretamente pelo WhatsApp para agendamentos e orçamentos.</p>

           
            <a 
              href={linkWhatsApp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-redirect-link"
            >
              <img src={whatsappIcon} alt="Chamar no WhatsApp" className="whatsapp-button-img" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contato;