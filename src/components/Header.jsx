import { useState } from "react"
import { Link } from 'react-scroll';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 start-0 flex justify-between items-center text-black py-3 px-8 md:px-32 backdrop-blur-lg bg-white/70 shadow-[0px_4px_6px_rgba(0,0,0,0.1)] z-50">
                
                <a href="">
                    <img src="./logo.png" alt="" className="w-52 hover:scale-105 transition-all" />
                </a>
                
                <ul className="hidden 2xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><Link to="inicio" smooth={true} duration={500}>Inicio</Link></li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><Link to="detalles" smooth={true} duration={500}>Detalles</Link></li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><Link to="caracteristicas" smooth={true} duration={500}>Características</Link></li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><Link to="formas-de-pago" smooth={true} duration={500}>Formas de pago</Link></li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><Link to="ubicacion" smooth={true} duration={500}>Ubicación</Link></li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><Link to="contacto" smooth={true} duration={500}>Contacto</Link></li>
                </ul>

                <i className="bx bx-menu 2xl:!hidden block text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute 2xl:hidden top-17 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "transform 0,3s ease, opacity 0,3s ease" }}>
                <li className="list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="inicio" smooth={true} duration={500}>Inicio</Link></li>
                <li className="list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="detalles" smooth={true} duration={500}>Detalles</Link></li>
                <li className="list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="caracteristicas" smooth={true} duration={500}>Características</Link></li>
                <li className="list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="formas-de-pago" smooth={true} duration={500}>Formas de pago</Link></li>
                <li className="list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="ubicacion" smooth={true} duration={500}>Ubicación</Link></li>
                <li className="list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer pb-6"><Link to="contacto" smooth={true} duration={500}>Contacto</Link></li>
            </div>
        </header>
    )
}

export default Header