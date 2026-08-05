import limpezaposobra_card from "../assets/imagens/limpezaposobra.png"; 
import limpezaPosreforma_card from "../assets/imagens/limpeza-posreforma.png";
import limpezaPosmudanca_card from "../assets/imagens/limpeza-posmudanca.png";
import limpezaPremudanca_card from "../assets/imagens/limpeza-premudanca.png";
import higDecarpetes_card from "../assets/imagens/hig-decarpetes.png";
import limpDevidros_card from "../assets/imagens/limp-devidros.png";
import sanitDeambientes_card from "../assets/imagens/sanit-deambientes.png";
import tsle_card from "../assets/imagens/tsle.png";

import antesObra from "../assets/imagens/antes-dalimpeza.jpeg"; 
import depoisObra from "../assets/imagens/depois-dalimpeza.jpeg"; 
import antesApto from "../assets/imagens/antes-apto.png"; 
import depoisApto from "../assets/imagens/depois-apto.png"; 
import antesPosObra from "../assets/imagens/antes-posobra.png"; 
import depoisPosObra from "../assets/imagens/depois-posobra.png"; 
import antesEscritorio from "../assets/imagens/antes-escritorio.png"; 
import depoisEscritorio from "../assets/imagens/depois-escritorio.png"; 

export const servicesData = [

  {
    id: "servico-pos-obra",
    titulo: "Limpeza Pós-Obra: Muito Além da Limpeza Comum",
    imagemCard: limpezaposobra_card,
    descricao: "A limpeza pós-obra profissional vai além da remoção de sujeiras e resíduos. O grande diferencial está na atenção aos detalhes, na utilização correta de produtos químicos e no cuidado com pisos, vidros, revestimentos e demais acabamentos. Com técnicas especializadas, garantimos uma limpeza eficiente e segura, preservando os materiais e entregando um ambiente impecável, pronto para uso.",
    materiais: ["Produtos químicos de uso profissional", "Maquinário profissional"],
    resultado: "O resultado é um ambiente valorizado, seguro e pronto para receber pessoas, refletindo toda a qualidade do projeto executado."
  },
  {
    id: "servico-pos-reforma",
    titulo: "Limpeza Pós-Reforma",
    imagemCard: limpezaPosreforma_card,
    descricao: "A limpeza pós-reforma é focada em remover aquela sujeira característica de pequenas e grandes alterações residenciais ou comerciais, devolvendo o brilho e a organização ao espaço.",
    materiais: ["Produtos químicos de uso profissional", "Maquinário profissional"],
    resultado: "Ambientes renovados, limpo, protegido e impecável."
  },
  {
    id: "servico-pos-mudanca",
    titulo: "Limpeza Pós-Mudança",
    imagemCard: limpezaPosmudanca_card,
    descricao: "Realizada no imóvel antigo após a retirada de todos os móveis e caixas, deixando o local em perfeitas condições para entrega das chaves ou novos moradores.",
    materiais: ["Produtos químicos de uso profissional", "Maquinário profissional"],
    resultado: "Imóvel totalmente limpo, higienizado e pronto para entrega."
  },
  {
    id: "servico-pre-mudanca",
    titulo: "Limpeza Pré-Mudança",
    imagemCard: limpezaPremudanca_card,
    descricao: "Destinada ao novo imóvel antes de você desempacotar suas caixas e organizar seus pertences, garantindo uma entrada segura e confortável.",
    materiais: ["Produtos químicos de uso profissional", "Maquinário profissional"],
    resultado: "Seu novo lar perfeitamente limpo, higienizado, cheiroso e acolhedor."
  },
  {
    id: "servico-higienizacao-carpetes",
    titulo: "Higienização de carpetes",
    imagemCard: higDecarpetes_card,
    descricao: "Carpetes em ambientes corporativos e residenciais acumulam ácaros, fungos e poeira profunda. Nossa limpeza elimina esses agentes e devolve o aspecto original.",
    materiais: ["Máquina Extratora profissional", "Shampoo antibactericida", "Neutralizador de odores"],
    resultado: "Fibras totalmente higienizadas, livres de ácaros, manchas e odores."
  },
  {
    id: "servico-limpeza-vidros",
    titulo: "Limpeza de vidros",
    imagemCard: limpDevidros_card,
    descricao: "Limpeza técnica de vidraças, janelas, fachadas baixas e divisórias de vidro corporativas ou residenciais com equipamentos de segurança.",
    materiais: ["Rodos limpa-vidros", "Cabos extensores", "Detergente limpa-vidros profissional"],
    resultado: "Vidros perfeitamente cristalinos, sem marcas ou reflexos."
  },
  {
    id: "servico-sanitizacao-ambientes",
    titulo: "Sanitização de ambientes",
    imagemCard: sanitDeambientes_card,
    descricao: "A sanitização consiste na aplicação de uma névoa fina contendo sanitizantes de última geração para desinfecção profunda contra vírus e bactérias.",
    materiais: ["Nebulizador elétrico", "Quaternário de Amônia de 5ª geração"],
    resultado: "Um ambiente biologicamente seguro para colaboradores e familiares."
  },
  {
    id: "servico-terceirizacao-limpeza",
    titulo: "Terceirização de serviços de limpeza em escritórios",
    imagemCard: tsle_card,
    descricao: "Solução sob medida para empresas que buscam foco total no seu negócio principal, contando com profissionais treinados e cronograma de manutenção diária. A equipe certa para a necessidade do seu negócio. Oferecemos mão de obra especializada em limpeza, com flexibilidade, qualidade e gestão eficiente para atender a necessidade da sua empresa.",
    materiais: ["Cronograma técnico", "Maquinário necessário incluso", "Produtos de uso diário certificados"],
    resultado: "Estações de trabalho e áreas comuns higienizadas diariamente com padrão de excelência."
  },


  {
    id: "limpeza-pos-obra", 
    titulo: "Limpeza Pós Obra Corporativo",
    imagemAntes: antesObra, 
    imagemDepois: depoisObra, 
    descricao: "Realizamos uma limpeza pós obra completa em um escritório comercial localizado na região do Brooklyn-SP.",
    materiais: ["Produtos de uso profissional", "Maquinário profissional"],
    resultado: "O ambiente ficou completamente limpo, organizado e higienizado."
  },
  {
    id: "limpeza-apartamento", 
    titulo: "Limpeza apartamento",
    imagemAntes: antesApto, 
    imagemDepois: depoisApto, 
    descricao: "Limpeza residencial detalhada realizada em apartamento, focando na higienização completa de salas, quartos, banheiros e cozinha...",
    materiais: ["Detergentes neutros", "Desinfetantes perfumados", "Panos de microfibra"],
    resultado: "Apartamento totalmente higienizado, organizado e com aroma agradável."
  },
  {
    id: "limpezapos-obra", 
    titulo: "Limpeza Pós-obra residencial",
    imagemAntes: antesPosObra, 
    imagemDepois: depoisPosObra, 
    descricao: "A limpeza pós-obra residencial é uma etapa essencial para transformar o ambiente recém-construído ou reformado em um espaço pronto para morar...",
    materiais: ["Removedores de cimento", "Aspirador industrial", "Espátulas técnicas"],
    resultado: "Imóvel residencial impecável, higienizado e pronto para a mudança."
  },
  {
    id: "terceirizacao-de-servicos", 
    titulo: "Limpeza de escritório",
    imagemAntes: antesEscritorio, 
    imagemDepois: depoisEscritorio, 
    descricao: "Serviço técnico focado na manutenção e higienização de ambientes corporativos. Limpeza de estações de trabalho e remoção de resíduos...",
    materiais: ["Cronograma técnico", "Produtos bactericidas", "Maquinários inclusos"],
    resultado: "Estações de trabalho e áreas comuns higienizadas diariamente."
  }
];