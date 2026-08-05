import "./Home.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import bannerHome from "../../assets/imagens/banner-limpeza-pos-obra.jpg";
import depoisObra from "../../assets/imagens/depois-dalimpeza.jpeg"; 

function Home() {
  return (
    <div className="home">
      <Header />

      <section className="banner">
        <img 
          src={bannerHome} 
          alt="Banner Dantas Limpeza Profissional" 
          className="img-banner" 
        />

        <div className="overlay">
          <h1>Limpeza Profissional</h1>
          <p>
            Soluções profissionais em limpeza pós-obras, corporativo e
            terceirização de mão de obra.
          </p>
        </div>
      </section>

      <section className="home-text">
        <p>
          Bem-vindo à nossa empresa de limpeza profissional. 
          <br />
          Na Dantas Limpeza, cada serviço é realizado com profissionalismo, segurança e dedicação para que seu ambiente esteja sempre pronto para receber novas histórias.
        </p>
      </section>

      <section className="services">
        <h2>Serviços Recentes</h2>

        <div className="services-grid">
          {/* Wrapper que garante a centralização absoluta do card */}
          <div className="single-card-wrapper">
            <ServiceCard
              id="limpeza-pos-obra"
              imagem={depoisObra} 
              titulo="Limpeza Pós Obra Corporativo"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;