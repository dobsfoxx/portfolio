import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import perfil from '../../assets/perfil.png'

const ripple = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    color: rgb(0, 0, 0);
  }
  50% {
    transform: translateY(-15px) scale(1);
    color: rgb(0, 0, 0);
  }
`

const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${ripple} 1.2s infinite ease-in-out;
  font-family: 'Montserrat', sans-serif;
  animation-delay: ${(props) => props.$delay || '0s'};
`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-yellow-400">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#about"
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="hidden sm:flex flex-col leading-tight">
        
          </div>
       
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ">
          <a href="#about" className=" hover:underline ">
            Sobre
          </a>
          <a href="#techs" className="hover:underline">
            Tecnologias
          </a>
          <a href="#projects" className="hover:underline">
            Projetos
          </a>
            <a href="#footer" className=" hover:underline ">
            Contato
          </a>
        </nav>


        <button
          type="button"
          className="md:hidden flex flex-col justify-between w-7 h-6 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu de navegação"
        >
          <div className={`h-[3px] bg-black rounded transition-transform ${open ? 'translate-y-[9px] rotate-45' : ''}`}></div>
          <div className={`h-[3px] bg-black rounded transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-[3px] bg-black rounded transition-transform ${open ? '-translate-y-[9px] -rotate-45' : ''}`}></div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-yellow-400 border-t border-yellow-500">
          <div className="container mx-auto px-6 py-3 flex flex-col gap-2">
            <a href="#about" onClick={() => setOpen(false)} className="text-left py-1">
              Sobre
            </a>
            <a href="#techs" onClick={() => setOpen(false)} className="text-left py-1">
              Tecnologias
            </a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-left py-1">
              Projetos
            </a>
          </div>
        </nav>
      )}

      <div className="container mx-auto px-6 pt-4 pb-8 flex flex-col items-center gap-6 md:flex-row md:gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-[Montserrat] font-bold text-black lg:text-5xl">
            Oi, eu sou o{' '}
            <AnimatedLetter $delay="0s">D</AnimatedLetter>
            <AnimatedLetter $delay="0.1s">o</AnimatedLetter>
            <AnimatedLetter $delay="0.2s">u</AnimatedLetter>
            <AnimatedLetter $delay="0.25s">g</AnimatedLetter>
          </h1>
          <p className="mt-4 text-xl text-gray-800">
            Desenvolvedor Front-End em transição de carreira. Em busca de uma primeira oportunidade.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-lg flex items-center justify-center">
            <img src={perfil} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}
