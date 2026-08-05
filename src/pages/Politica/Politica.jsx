import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Politica() {
  return (
    <div className="institucional-page">
      <Header />
      
      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", color: "#4A6B82", lineHeight: "1.6" }}>
        <h1 style={{ color: "#2B6884", marginBottom: "20px" }}>Política de Privacidade</h1>
        <p><em>Última atualização: Agosto de 2026</em></p>
        
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>1. Coleta de Informações</h2>
          <p>
            A Dantas Limpeza Profissional valoriza a privacidade dos seus visitantes. Nosso site é estritamente institucional e <strong>não possui formulários de cadastro ou banco de dados internos</strong> para armazenamento automático de informações.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>2. Atendimento via WhatsApp</h2>
          <p>
            Ao clicar no botão do WhatsApp em nosso site, você é redirecionado para a plataforma oficial do aplicativo. Quaisquer dados fornecidos durante a conversa (como nome, telefone e detalhes sobre o local do serviço) são disponibilizados voluntariamente por você para a solicitação de orçamentos e esclarecimento de dúvidas.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>3. Uso dos Dados e Proteção (LGPD)</h2>
          <p>
            Os dados informados durante o atendimento do WhatsApp são mantidos em sigilo e utilizados exclusivamente para prestar o atendimento solicitado. A Dantas Limpeza <strong>não compartilha, vende ou aluga</strong> suas informações para terceiros.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Politica;