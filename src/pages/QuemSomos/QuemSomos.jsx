import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logodl from "../../assets/imagens/logodl.png";
import "./QuemSomos.css";

function QuemSomos() {
  return (
    <div className="about-page-wrapper">
      <Header />

      <main className="about-main-content">
        {/* Título Principal */}
        <h1 className="about-title">Quem somos</h1>

        {/* Bloco Central com a Logo Grande */}
        <div className="about-logo-container">
          <img src={logodl} alt="Dantas Limpeza Logo" className="about-large-logo" />
        </div>

        {/* Seção de Parágrafos Corporativos */}
        <div className="about-text-section">
          <p>
            Há mais de 10 anos no mercado, somos especializados em serviços de limpeza 
            profissional para escritórios, salas comerciais e pós-obra, oferecendo qualidade, 
            confiança e dedicação em cada atendimento.
          </p>
          
          <p>
            Nossa missão é proporcionar ambientes limpos, organizados e agradáveis, utilizando 
            produtos e equipamentos adequados para garantir um serviço eficiente e com 
            excelência em cada detalhe.
          </p>

          <p>
            Atuamos com profissionalismo, compromisso e responsabilidade, sempre buscando 
            atender às necessidades de cada cliente com atenção e cuidado.
          </p>

          <p>
            Ao longo dos anos, conquistamos a confiança de diversos clientes por meio de um 
            trabalho sério, pontual e realizado com alto padrão de qualidade.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default QuemSomos;