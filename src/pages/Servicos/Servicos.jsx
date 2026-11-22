import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { servicesData } from "../../data/servicesData";
import { Link } from "react-router-dom";
import "./Servicos.css";

function Servicos() {
  const servicosLista = servicesData.filter((item) =>
    item.id.startsWith("servico-")
  );

  return (
    <div className="services-page-wrapper">
      <Header />

      <main className="services-main-content">
        <div className="services-header-zone animate-srv-up">
          <h1 className="services-title">Serviços</h1>
          <p className="services-subtitle">Residencial e Comercial</p>
          <div className="services-title-line"></div>
        </div>

        <div className="services-grid">
          {servicosLista.map((servico, index) => (
            <div
              key={servico.id}
              className="service-card-item animate-srv-card"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div className="card-image-wrapper">
                <img src={servico.imagemCard} alt={servico.titulo} />
                <div className="card-overlay">
                  <h3 className="card-title-text">{servico.titulo}</h3>
                </div>
              </div>

              <Link to={`/servico/${servico.id}`} className="card-action-btn">
                <span>Mais informações</span>
                <span className="srv-btn-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Servicos;