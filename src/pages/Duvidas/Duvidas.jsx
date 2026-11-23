import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { duvidasData } from "../../data/duvidasData";
import "./Duvidas.css";

function Duvidas() {
 
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-page-wrapper">
      <Header />

      <main className="faq-main-content">
        <div className="faq-header-zone animate-faq-up">
          <h1 className="faq-title">Dúvidas</h1>
          <div className="faq-title-line"></div>
        </div>

        <div className="faq-list-container">
          {duvidasData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item-box animate-faq-item ${
                  isOpen ? "is-open" : ""
                }`}
                style={{ animationDelay: `${0.07 * (index + 1)}s` }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="faq-question-text">{item.pergunta}</h3>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    +
                  </span>
                </button>

                <div className="faq-answer-collapse">
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.resposta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Duvidas;