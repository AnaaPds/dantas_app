import { useNavigate } from "react-router-dom";
import "./Home.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { servicesData } from "../../data/servicesData";

import bannerHome from "../../assets/imagens/banner-limpeza-pos-obra.jpg";

function Home() {
  const navigate = useNavigate();

  const idsRecentes = [
    "limpeza-pos-obra",
    "limpeza-banheiros-recente",
    "limpeza-escritorio-recente",
  ];

  const servicosRecentes = idsRecentes
    .map((id) => servicesData.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <div className="home">
      <Header />

      {/* BANNER PRINCIPAL COM ZOOM E ENTRADA ANIMADA */}
      <section className="banner">
        <img
          src={bannerHome}
          alt="Banner Dantas Limpeza Profissional"
          className="img-banner"
        />

        <div className="overlay">
          <span className="banner-badge animate-fade-up delay-1">
            +10 ANOS DE EXCELÊNCIA EM SÃO PAULO
          </span>

          <h1 className="animate-fade-up delay-2">Limpeza Profissional</h1>

          <p className="animate-fade-up delay-3">
            Soluções completas em limpeza pós-obra, ambientes corporativos e
            terceirização especializada de mão de obra.
          </p>

          <div className="banner-actions animate-fade-up delay-4">
            <button
              className="btn-cta-primary"
              onClick={() => navigate("/contato")}
            >
              Solicitar Orçamento
            </button>
            <button
              className="btn-cta-secondary"
              onClick={() => navigate("/servicos")}
            >
              Conhecer Serviços
            </button>
          </div>
        </div>
      </section>

      {/* TEXTO DE BOAS-VINDAS + PILARES */}
      <section className="home-text">
        <div className="welcome-box">
          <p>
            Bem-vindo à <strong>Dantas Limpeza Profissional</strong>.
            <br />
            Cada serviço é executado com rigor técnico, segurança e dedicação
            para que seu ambiente esteja impecável e pronto para receber novas
            histórias.
          </p>
        </div>

        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-number">01</div>
            <h3>Pós-Obra Detalhado</h3>
            <p>
              Remoção técnica de resíduos, poeira fina e acabamentos sem
              danificar superfícies.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-number">02</div>
            <h3>Padrão Corporativo</h3>
            <p>
              Conservação contínua para escritórios, clínicas e salas comerciais
              com discrição.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-number">03</div>
            <h3>Equipe Treinada</h3>
            <p>
              Profissionais uniformizados, equipados com EPIs e produtos de alta
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS RECENTES */}
      <section className="services">
        <h2>Serviços Recentes</h2>
        <div className="title-underline"></div>

        <div className="services-grid">
          {servicosRecentes.map((servico) => (
            <div key={servico.id} className="single-card-wrapper">
              <ServiceCard
                id={servico.id}
                imagem={servico.imagemDepois}
                titulo={servico.titulo}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;