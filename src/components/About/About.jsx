import curriculoPdf from '../../assets/Curriculo (2).pdf'

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center">Sobre Mim</h2>
        <p className="mt-4 text-gray-700  text-lg text-justify font-sans">
            Olá! Meu nome é Douglas, tenho 30 anos, residente em Uberlândia - MG. Atualmente no terceiro
            período de Sistemas de Informação pela UNIUBE e cursando Desenvolvimento Front-End Pela EBAC.
            Sou apaixonado por música, jogos, viagens e tecnologia. Estou em transição de carreira para a área do desenvolvimento ,
            buscando minha primeira oportunidade. Estou animado para aplicar minhas habilidades e crescer profissionalmente. Possuo 
            grande dedicação e vontade de aprender, já atuei em diversas áreas de atendimento ao cliente e também em ambientes de cozinhas e restaurantes,
            que me proporcionaram habilidades valiosas de comunicação e trabalho em equipe, além de resolução de conflitos e adaptabilidade.
            Possuo rápido aprendizado e comprometimento com meus objetivos. Me ajude a dar o próximo passo na minha carreira! 
        </p>
       
       <div className="mt-6 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={curriculoPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border bg-yellow-400 text-white font-semibold rounded  hover:bg-yellow-500 transition"
            aria-label="Abrir currículo em nova aba"
          >
            Visualizar Currículo
          </a>
        </div>
        </div>
    
    </section>
  )
}