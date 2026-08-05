import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { duvidasData } from "../../data/duvidasData";
import "./Duvidas.css";

function Duvidas() {
  return (
    <div className="faq-page-wrapper">
      <Header />

      <main className="faq-main-content">
        {/* Título Principal Centralizado */}
        <div className="faq-header-zone">
          <h1 className="faq-title">Dúvidas</h1>
        </div>

        {/* Listagem de Perguntas e Respostas */}
        <div className="faq-list-container">
          {duvidasData.map((item, index) => (
            <div key={index} className="faq-item-box">
              <h3 className="faq-question-text">{item.pergunta}</h3>
              <p className="faq-answer-text">{item.resposta}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Duvidas;