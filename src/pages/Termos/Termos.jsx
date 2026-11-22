import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Termos() {
  return (
    <div className="institucional-page">
      <style>{`
        .institucional-page {
          width: 100%;
          background: linear-gradient(180deg, #f4f8fa 0%, #ffffff 35%, #f8fbfd 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }

        @keyframes tmFadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-tm-up {
          opacity: 0;
          animation: tmFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .delay-tm-1 { animation-delay: 0.08s; }
        .delay-tm-2 { animation-delay: 0.18s; }
        .delay-tm-3 { animation-delay: 0.28s; }
        .delay-tm-4 { animation-delay: 0.38s; }

        .terms-main-content {
          max-width: 840px;
          width: 100%;
          margin: 0 auto;
          padding: 55px 20px 95px;
          box-sizing: border-box;
          flex: 1;
        }

        .terms-header-zone {
          text-align: center;
          margin-bottom: 42px;
        }

        .terms-title {
          color: #2B6884;
          font-size: 36px;
          font-weight: 800;
          margin: 0;
        }

        .terms-title-line {
          width: 60px;
          height: 4px;
          background-color: #2B6884;
          border-radius: 4px;
          margin: 14px auto 14px;
        }

        .terms-updated {
          color: #4A6B82;
          font-size: 14px;
          margin: 0;
        }

        .terms-sections-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .terms-section-card {
          background-color: #ffffff;
          border-left: 4px solid #2B6884;
          border-radius: 0 10px 10px 0;
          padding: 22px 24px;
          box-shadow: 0 6px 18px rgba(43, 104, 132, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-left-width 0.25s ease;
        }

        .terms-section-card:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 26px rgba(43, 104, 132, 0.13);
          border-left-width: 6px;
        }

        .terms-section-card h2 {
          color: #2B6884;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 10px 0;
        }

        .terms-section-card p {
          color: #4A6B82;
          font-size: 16px;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 768px) {
          .terms-main-content {
            padding: 40px 16px 65px;
          }

          .terms-title {
            font-size: 30px;
          }

          .terms-section-card {
            padding: 18px;
          }

          .terms-section-card h2 {
            font-size: 18px;
          }

          .terms-section-card p {
            font-size: 15px;
          }

          .terms-section-card:hover {
            transform: translateY(-3px);
          }
        }
      `}</style>

      <Header />

      <main className="terms-main-content">
        <div className="terms-header-zone animate-tm-up delay-tm-1">
          <h1 className="terms-title">Termos de Uso</h1>
          <div className="terms-title-line"></div>
          <p className="terms-updated">
            <em>Última atualização: Agosto de 2026</em>
          </p>
        </div>

        <div className="terms-sections-list">
          <section className="terms-section-card animate-tm-up delay-tm-2">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Dantas Limpeza Profissional, você
              concorda em cumprir e vincular-se aos presentes Termos de Uso, além
              de todas as leis e regulamentos aplicáveis.
            </p>
          </section>

          <section className="terms-section-card animate-tm-up delay-tm-3">
            <h2>2. Propriedade Intelectual e Imagens</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, marcas,
              logotipos e código fonte, é de propriedade exclusiva da Dantas
              Limpeza Profissional. Algumas imagens e fotos exibidas possuem
              caráter meramente ilustrativo para demonstração dos serviços
              oferecidos e poderão ser atualizadas ou alteradas a qualquer
              momento sem aviso prévio.
            </p>
          </section>

          <section className="terms-section-card animate-tm-up delay-tm-4">
            <h2>3. Uso das Informações e Orçamentos</h2>
            <p>
              As informações disponibilizadas neste site têm caráter
              exclusivamente institucional e informativo. O detalhamento final de
              escopos de serviço, prazos e valores de orçamentos será
              formalizado diretamente através dos nossos canais de atendimento
              oficiais, como o WhatsApp.
            </p>
          </section>

          <section className="terms-section-card animate-tm-up delay-tm-4">
            <h2>4. Limitação de Responsabilidade</h2>
            <p>
              Buscamos manter as informações do site sempre atualizadas e
              corretas. No entanto, a Dantas Limpeza Profissional não se
              responsabiliza por eventuais indisponibilidades temporárias do site
              ou por problemas decorrentes de conexões de terceiros.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Termos;