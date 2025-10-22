import './Header.module.css'
import perfil from '../../assets/perfil.png'

export default function Header() {
  return (
    <header className="w-full bg-yellow-400">
      <div className="container mx-auto p-6 flex flex-col items-center gap-8  ">
        <div className="flex-1">
          <h1 className="text-4xl text-center font-[Montserrat] font-bold text-black lg:text-5xl ">
            Oi, eu sou o <span>D</span><span>o</span><span>u</span><span>g</span>
          </h1>
          <p className="mt-4 text-xl text-gray-800 text-center">Desenvolvedor Front-End em transição de carreira. Em busca de uma primeira oportunidade.</p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 rounded-full shadow-lg flex items-center justify-center">
            <img src={perfil} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}
