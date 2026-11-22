import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ServiceDetail.css";

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const servico = servicesData.find((item) => item.id === id);

  if (!servico) {
    return (
      <div className="service-detail-page">
        <Header />
        <main className="detail-main-content detail-not-found">
          <h2>Serviço não encontrado!</h2>
          <button
            type="button"
            className="detail-back-btn"
            onClick={() => navigate("/servicos")}
          >
            ← Voltar para Serviços
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const isEscritorioRecente = servico.id === "limpeza-escritorio-recente";

  return (
    <div className="service-detail-page">
      <Header />

      <main className="detail-main-content">
        <div className="detail-header-zone animate-sd-up delay-sd-1">
          <h1 className="detail-main-title">
            {servico.id === "limpezapos-obra"
              ? "Limpeza Pós-Obra"
              : servico.titulo}
          </h1>
          <div className="detail-title-line"></div>
        </div>

        {servico.imagemAntes && servico.imagemDepois && (
          <div className="before-after-container animate-sd-up delay-sd-2">
            <div
              className={`image-box ${
                isEscritorioRecente ? "before-escritorio-recente" : ""
              }`}
            >
              <div className="image-frame">
                <img src={servico.imagemAntes} alt="Antes" />
              </div>
              <span className="image-label">ANTES</span>
            </div>
            <div className="image-box">
              <div className="image-frame">
                <img src={servico.imagemDepois} alt="Depois" />
              </div>
              <span className="image-label">DEPOIS</span>
            </div>
          </div>
        )}

        <div className="detail-text-section animate-sd-up delay-sd-3">
          <div className="detail-card-block">
            <p className="detail-description">{servico.descricao}</p>
          </div>

          <div className="detail-card-block">
            <h3>Materiais e equipamentos utilizados</h3>
            <ul className="detail-list">
              {servico.materiais.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-card-block">
            <h3>Resultado</h3>
            <p className="detail-result-text">{servico.resultado}</p>
          </div>

          <div className="detail-actions-row">
            <button
              type="button"
              className="detail-back-btn"
              onClick={() => navigate(-1)}
            >
              <span>← Voltar</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ServiceDetail;