import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Termos() {
  return (
    <div className="institucional-page">
      <Header />
      
      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", color: "#4A6B82", lineHeight: "1.6" }}>
        <h1 style={{ color: "#2B6884", marginBottom: "20px" }}>Termos de Uso</h1>
        <p><em>Última atualização: Agosto de 2026</em></p>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site da Dantas Limpeza Profissional, você concorda em cumprir e vincular-se aos presentes Termos de Uso, além de todas as leis e regulamentos aplicáveis.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>2. Propriedade Intelectual e Imagens</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, marcas, logotipos e código fonte, é de propriedade exclusiva da Dantas Limpeza Profissional. Algumas imagens e fotos exibidas possuem caráter meramente ilustrativo para demonstração dos serviços oferecidos e poderão ser atualizadas ou alteradas a qualquer momento sem aviso prévio.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>3. Uso das Informações e Orçamentos</h2>
          <p>
            As informações disponibilizadas neste site têm caráter exclusivamente institucional e informativo. O detalhamento final de escopos de serviço, prazos e valores de orçamentos será formalizado diretamente através dos nossos canais de atendimento oficiais, como o WhatsApp.
          </p>
        </section>

        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#2B6884" }}>4. Limitação de Responsabilidade</h2>
          <p>
            Buscamos manter as informações do site sempre atualizadas e corretas. No entanto, a Dantas Limpeza Profissional não se responsabiliza por eventuais indisponibilidades temporárias do site ou por problemas decorrentes de conexões de terceiros.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Termos;