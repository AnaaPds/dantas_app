import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Politica() {
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

        @keyframes plFadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pl-up {
          opacity: 0;
          animation: plFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .delay-pl-1 { animation-delay: 0.08s; }
        .delay-pl-2 { animation-delay: 0.18s; }
        .delay-pl-3 { animation-delay: 0.28s; }
        .delay-pl-4 { animation-delay: 0.38s; }

        .policy-main-content {
          max-width: 840px;
          width: 100%;
          margin: 0 auto;
          padding: 55px 20px 95px;
          box-sizing: border-box;
          flex: 1;
        }

        .policy-header-zone {
          text-align: center;
          margin-bottom: 42px;
        }

        .policy-title {
          color: #2B6884;
          font-size: 36px;
          font-weight: 800;
          margin: 0;
        }

        .policy-title-line {
          width: 60px;
          height: 4px;
          background-color: #2B6884;
          border-radius: 4px;
          margin: 14px auto 14px;
        }

        .policy-updated {
          color: #4A6B82;
          font-size: 14px;
          margin: 0;
        }

        .policy-sections-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .policy-section-card {
          background-color: #ffffff;
          border-left: 4px solid #2B6884;
          border-radius: 0 10px 10px 0;
          padding: 22px 24px;
          box-shadow: 0 6px 18px rgba(43, 104, 132, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-left-width 0.25s ease;
        }

        .policy-section-card:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 26px rgba(43, 104, 132, 0.13);
          border-left-width: 6px;
        }

        .policy-section-card h2 {
          color: #2B6884;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 10px 0;
        }

        .policy-section-card p {
          color: #4A6B82;
          font-size: 16px;
          line-height: 1.65;
          margin: 0;
        }

        .policy-section-card strong {
          color: #2B6884;
        }

        @media (max-width: 768px) {
          .policy-main-content {
            padding: 40px 16px 65px;
          }

          .policy-title {
            font-size: 30px;
          }

          .policy-section-card {
            padding: 18px;
          }

          .policy-section-card h2 {
            font-size: 18px;
          }

          .policy-section-card p {
            font-size: 15px;
          }

          .policy-section-card:hover {
            transform: translateY(-3px);
          }
        }
      `}</style>

      <Header />

      <main className="policy-main-content">
        <div className="policy-header-zone animate-pl-up delay-pl-1">
          <h1 className="policy-title">Política de Privacidade</h1>
          <div className="policy-title-line"></div>
          <p className="policy-updated">
            <em>Última atualização: Agosto de 2026</em>
          </p>
        </div>

        <div className="policy-sections-list">
          <section className="policy-section-card animate-pl-up delay-pl-2">
            <h2>1. Coleta de Informações</h2>
            <p>
              A Dantas Limpeza Profissional valoriza a privacidade dos seus
              visitantes. Nosso site é estritamente institucional e{" "}
              <strong>
                não possui formulários de cadastro ou banco de dados internos
              </strong>{" "}
              para armazenamento automático de informações.
            </p>
          </section>

          <section className="policy-section-card animate-pl-up delay-pl-3">
            <h2>2. Atendimento via WhatsApp</h2>
            <p>
              Ao clicar no botão do WhatsApp em nosso site, você é redirecionado
              para a plataforma oficial do aplicativo. Quaisquer dados
              fornecidos durante a conversa (como nome, telefone e detalhes
              sobre o local do serviço) são disponibilizados voluntariamente por
              você para a solicitação de orçamentos e esclarecimento de dúvidas.
            </p>
          </section>

          <section className="policy-section-card animate-pl-up delay-pl-4">
            <h2>3. Uso dos Dados e Proteção (LGPD)</h2>
            <p>
              Os dados informados durante o atendimento do WhatsApp são mantidos
              em sigilo e utilizados exclusivamente para prestar o atendimento
              solicitado. A Dantas Limpeza{" "}
              <strong>não compartilha, vende ou aluga</strong> suas informações
              para terceiros.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Politica;