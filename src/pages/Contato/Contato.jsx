import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import whatsappIcon from "../../assets/imagens/whatsapp.png";
import "./Contato.css";

function Contato() {
  const [copiedKey, setCopiedKey] = useState(null);

  const telefoneWhatsApp = "5511962672165";
  const telefoneFormatado = "(11) 96267-2165";
  const emailContato = "dantaslimpezacom@gmail.com";
  const linkWhatsApp = `https://wa.me/${telefoneWhatsApp}`;

  const handleCopy = (texto, chave) => {
    navigator.clipboard.writeText(texto);
    setCopiedKey(chave);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <div className="contact-page-wrapper">
      <Header />

      <main className="contact-main-content">
        <div className="contact-header-zone animate-ct-up delay-ct-1">
          <h1 className="contact-title">Entre em contato</h1>
          <div className="contact-title-line"></div>
        </div>

        <div className="contact-sections-container">
          <p className="contact-intro-text animate-ct-up delay-ct-2">
            Estamos prontos para atender você e oferecer soluções completas em
            limpeza pós-obra corporativa, comercial e residencial.
          </p>

          <div className="contact-cards-grid animate-ct-up delay-ct-3">
            <div className="contact-info-block">
              <h3>Informações para Contato</h3>

              <div className="contact-row">
                <div>
                  <strong>Telefone</strong>
                  <p>
                    <a
                      href={linkWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-inline-link"
                    >
                      {telefoneFormatado}
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(telefoneFormatado, "tel")}
                  title="Copiar telefone"
                >
                  {copiedKey === "tel" ? "Copiado!" : "Copiar"}
                </button>
              </div>

              <div className="contact-row">
                <div>
                  <strong>E-mail</strong>
                  <p>
                    <a
                      href={`mailto:${emailContato}`}
                      className="contact-inline-link"
                    >
                      {emailContato}
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(emailContato, "email")}
                  title="Copiar e-mail"
                >
                  {copiedKey === "email" ? "Copiado!" : "Copiar"}
                </button>
              </div>
            </div>

            <div className="contact-info-block">
              <h3>Localização</h3>
              <p className="contact-location-text">São Paulo – SP</p>
            </div>
          </div>

          <div className="contact-action-block animate-ct-up delay-ct-4">
            <h3>Solicite um Atendimento</h3>
            <p>
              Entre em contato para tirar dúvidas, solicitar informações ou
              realizar um orçamento. Nossa equipe terá prazer em atender você
              com rapidez, atenção e profissionalismo.
            </p>

            <div className="whatsapp-box">
              <div>
                <h3>WhatsApp</h3>
                <p>
                  Atendimento rápido e prático diretamente pelo WhatsApp para
                  agendamentos e orçamentos.
                </p>
              </div>

              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-redirect-link"
                aria-label="Chamar no WhatsApp"
              >
                <img
                  src={whatsappIcon}
                  alt="Chamar no WhatsApp"
                  className="whatsapp-button-img"
                />
                <span>Chamar no WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contato;