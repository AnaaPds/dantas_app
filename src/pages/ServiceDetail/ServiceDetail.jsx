import { useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ServiceDetail.css";

function ServiceDetail() {
  const { id } = useParams();
  
 
  const servico = servicesData.find((item) => item.id === id);

  if (!servico) {
    return (
      <>
        <Header />
        <div style={{ padding: "100px", textAlign: "center", color: "#2B6884" }}>
          <h2>Serviço não encontrado!</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="service-detail-page">
      <Header />
      
      <main className="detail-main-content">
        <div className="detail-header-zone">
          <h1 className="detail-main-title">
            {servico.id === "limpezapos-obra" ? "Limpeza Pós-Obra" : servico.titulo}
          </h1>
        </div>
        
       
        {servico.imagemAntes && servico.imagemDepois && (
          <div className="before-after-container">
            <div className="image-box">
              <img src={servico.imagemAntes} alt="Antes" />
              <span className="image-label">ANTES</span>
            </div>
            <div className="image-box">
              <img src={servico.imagemDepois} alt="Depois" />
              <span className="image-label">DEPOIS</span>
            </div>
          </div>
        )}

       
        <div className="detail-text-section">
          <p className="detail-description">{servico.descricao}</p>
          
          <h3>Materiais e equipamentos utilizados</h3>
          <ul className="detail-list">
            {servico.materiais.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h3>Resultado</h3>
          <p className="detail-result-text">{servico.resultado}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ServiceDetail;