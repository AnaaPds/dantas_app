import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SobreOSite.css";

function SobreOSite() {
  const navigate = useNavigate();

  return (
    <div className="sobre-site-page">
      <Header />

      <main className="sobre-site-main">
        <div className="sobre-site-header animate-ss-up delay-ss-1">
          <h1 className="sobre-site-title">Sobre o Site</h1>
          <div className="sobre-site-line"></div>
          <p className="sobre-site-subtitle">
            Conheça o propósito da plataforma, como ela foi estruturada e quem
            desenvolveu este projeto.
          </p>
        </div>

        <section className="sobre-site-content animate-ss-up delay-ss-2">
          <div className="sobre-site-card">
            <h2>Objetivo do Projeto</h2>
            <p>
              Este site foi desenvolvido para apresentar os serviços da{" "}
              <strong>Dantas Limpeza Profissional</strong> de forma clara,
              objetiva e acessível, destacando serviços como limpeza pós-obra,
              ambientes corporativos, higienização e manutenção de espaços, além
              de facilitar o contato para solicitações de orçamento.
            </p>
          </div>

          <div className="sobre-site-card">
            <h2>Design, Navegação e Responsividade</h2>
            <p>
              A interface foi construída com foco em leitura rápida, identidade
              visual em tons de azul institucional, transições suaves e
              adaptação para diferentes tamanhos de tela garantindo boa
              experiência tanto no computador quanto no tablet e no celular.
            </p>
          </div>

          <div className="sobre-site-card">
            <h2>Tecnologias e Ferramentas Utilizadas</h2>
            <ul className="sobre-site-list">
              <li>
                <strong>React (JSX) e JavaScript:</strong> para componentização,
                dinamismo e organização das páginas.
              </li>
              <li>
                <strong>React Router:</strong> para navegação entre seções e
                páginas de detalhes de cada serviço.
              </li>
              <li>
                <strong>CSS:</strong> para estilização, animações e layout
                responsivo.
              </li>
              <li>
                <strong>Visual Studio Code:</strong> ambiente utilizado para o
                desenvolvimento e estruturação do código.
              </li>
              <li>
                <strong>Vercel:</strong> plataforma utilizada para publicação e
                hospedagem do site online.
              </li>
            </ul>
          </div>

          <div className="sobre-site-card sobre-site-credits">
            <h2>Desenvolvimento e Créditos</h2>
            <p>
              Site planejado e desenvolvido por <strong>Ana Paula Dantas</strong>,
              Técnica em ADS e desenvolvedora front-end.
            </p>
            <div className="sobre-site-links">
              <a
                href="https://github.com/AnaaPds"
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-site-ext-link"
              >
                GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/anapauladantasds"
                target="_blank"
                rel="noopener noreferrer"
                className="sobre-site-ext-link"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div className="sobre-site-actions">
            <button
              type="button"
              className="sobre-site-back-btn"
              onClick={() => navigate("/")}
            >
              ← Voltar para o Início
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SobreOSite;