import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Techs from "./components/Techs/Techs";
import Footer from "./components/Footer/Footer";
import jsIcon from './assets/javascript.png';
import reactIcon from './assets/react.png';
import tsIcon from './assets/typescript.png';
import nextIcon from './assets/next.png';
import tailwindIcon from './assets/tailwind.png';
import gitIcon from './assets/git.png';
import About from './components/About/About';
import pomoClockImg from './assets/Pomoclock.png';
import dailyNewsImg from './assets/daily-news.png';
import barbeariaImg from './assets/barbear.png';
import eletromidiaImg from './assets/zeladoria.png';
import petshopImg from './assets/petshop.png';
import blogImg from './assets/blogtswind.png';
import calculadoraImg from './assets/calc.png';



const sampleProjects = [
  {
    title: "PomoClock",
    description: "Um aplicativo de produtividade baseado na Técnica Pomodoro, construído com React estilizado com CSS Modules.",
    url: "https://pomoclock-six.vercel.app/",
    image: pomoClockImg,
  },
  {
    title: "DailyNews",
    description: "Aplicação consumindo API de notícias, construída com Next.js e Tailwind CSS. Utilização de slugs dinâmicos para páginas e categorias.",
    url: "https://daily-news-orcin-alpha.vercel.app/",
    image: dailyNewsImg,
  },
  {
    title: "Barbearia BarBear",
    description: "Aplicação em HTML e SASS para um site de barbearia, utilizando pré processador SASS para estilos avançados.",
    url: "https://barbear-barber.vercel.app/",
    image: barbeariaImg,
  },
  {
    title: "Eletromídia Zeladoria",
    description: "Uma aplicação desenvolvida para gerenciar a manutenção de abrigos de ônibus sob a responsabilidade da Eletromidia durante o bootcamp da SoulCode.",
    url: "https://eletromidia-zeladoria.web.app/2856",
    image: eletromidiaImg,
  },
  {
    title: "Landing Page PetShop",
    description: "Landing Page de um PetShop, desenvolvida com Next.js e Tailwind CSS, focando em design responsivo e experiência do usuário.",
    url: "https://github.com/dobsfoxx/Landing-Page-Next_Tailwind",
    image: petshopImg,
  },
  {
    title: "Calculadora de Estacionemnto - POO (JavaScript)",
    description: "Projeto de uma calculadora de estacionamento utilizando conceitos de Programação Orientada a Objetos (POO) em JavaScript.",
    url: "https://calculadora-de-estacionamento.vercel.app/",
    image: calculadoraImg,
  },
  {
    title: "Blog TS Wind",
    description: "Blog pessoal focado em TypeScript e tecnologias web, desenvolvido com Next.js e estilizado com Tailwind CSS.",
    url: "https://blogtswind.vercel.app/",
    image: blogImg,
  },

];

const sampleTechs = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Git', icon: gitIcon },
];

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <About />

      <main className='w-full container mx-auto' >
        
          <Techs techs={sampleTechs} />
          <Projects projects={sampleProjects} />
       
      </main>

      <Footer />
    </div>
  );
}
