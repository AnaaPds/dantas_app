import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ id, imagem, titulo }) {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <img src={imagem} alt={titulo} />

      <div className="service-content">
        <h3>{titulo}</h3>
        
        <button onClick={() => navigate(`/servico/${id}`)}>
          Mais informações
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;