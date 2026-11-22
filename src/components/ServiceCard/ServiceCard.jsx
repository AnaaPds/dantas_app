import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ id, imagem, titulo }) {
  const navigate = useNavigate();

  return (
    <div className="service-card" onClick={() => navigate(`/servico/${id}`)}>
      <div className="service-card-img-box">
        <img src={imagem} alt={titulo} />
        <span className="service-card-tag">Destaque</span>
      </div>

      <div className="service-content">
        <h3>{titulo}</h3>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/servico/${id}`);
          }}
        >
          <span>Mais informações</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;