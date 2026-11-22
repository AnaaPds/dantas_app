import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logodl from "../../assets/imagens/logodl.png";
import "./QuemSomos.css";

function QuemSomos() {
  const navigate = useNavigate();

  return (
    <div className="about-page-wrapper">
      <Header />

      <main className="about-main-content">
        {/* Cabeçalho da seção */}
        <div className="about-header-block animate-qs-up delay-qs-1">
          <h1 className="about-title">Quem somos</h1>
          <div className="about-title-line"></div>
        </div>

        {/* Bloco Central com a Logo Grande Animada */}
        <div className="about-logo-container animate-qs-up delay-qs-2">
          <div className="about-logo-frame">
            <img
              src={logodl}
              alt="Dantas Limpeza Logo"
              className="about-large-logo"
            />
          </div>
        </div>

        {/* Faixa de números / pilares rápidos */}
        <div className="about-stats-bar animate-qs-up delay-qs-3">
          <div className="about-stat-item">
            <strong>+10 anos</strong>
            <span>De experiência no mercado</span>
          </div>
          <div className="about-stat-divider"></div>
          <div className="about-stat-item">
            <strong>Pós-Obra &amp; Corporativo</strong>
            <span>Especialização técnica</span>
          </div>
          <div className="about-stat-divider"></div>
          <div className="about-stat-item">
            <strong>Qualidade &amp; Pontualidade</strong>
            <span>Compromisso em cada entrega</span>
          </div>
        </div>

        {/* Seção de Parágrafos Corporativos */}
        <div className="about-text-section animate-qs-up delay-qs-4">
          <div className="about-text-card">
            <p>
              Há mais de 10 anos no mercado, somos especializados em serviços de
              limpeza profissional para escritórios, salas comerciais e pós-obra,
              oferecendo qualidade, confiança e dedicação em cada atendimento.
            </p>
          </div>

          <div className="about-text-card">
            <p>
              Nossa missão é proporcionar ambientes limpos, organizados e
              agradáveis, utilizando produtos e equipamentos adequados para
              garantir um serviço eficiente e com excelência em cada detalhe.
            </p>
          </div>

          <div className="about-text-card">
            <p>
              Atuamos com profissionalismo, compromisso e responsabilidade, sempre
              buscando atender às necessidades de cada cliente com atenção e
              cuidado.
            </p>
          </div>

          <div className="about-text-card">
            <p>
              Ao longo dos anos, conquistamos a confiança de diversos clientes por
              meio de um trabalho sério, pontual e realizado com alto padrão de
              qualidade.
            </p>
          </div>
        </div>

        {/* Chamada para ação no final */}
        <div className="about-cta-box animate-qs-up delay-qs-4">
          <p>Quer elevar o padrão de limpeza do seu espaço?</p>
          <button
            className="about-cta-btn"
            onClick={() => navigate("/contato")}
          >
            <span>Fale com a equipe</span>
            <span className="about-btn-arrow">→</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default QuemSomos;