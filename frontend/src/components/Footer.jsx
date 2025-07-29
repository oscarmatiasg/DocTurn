import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-20 border-t border-gray-200">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img className='w-32' src={assets.logo} alt='Logo DocTurn'/>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Tu conexión directa con doctores y turnos disponibles. 
              Simplificamos el proceso de reserva de citas médicas 
              para que puedas enfocarte en tu salud.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/docturn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/docturn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="https://x.com/docturn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/doctors" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Doctores
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Contacto
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-turn" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Mis Turnos
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Especialidades médicas */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Especialidades</h3>
            <ul className="space-y-3">
              <li>
                <a href="/doctors/General physician" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Médico General
                </a>
              </li>
              <li>
                <a href="/doctors/Gynecologist" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Ginecología
                </a>
              </li>
              <li>
                <a href="/doctors/Dermatologist" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Dermatología
                </a>
              </li>
              <li>
                <a href="/doctors/Pediatricians" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Pediatría
                </a>
              </li>
              <li>
                <a href="/doctors/Neurologist" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Neurología
                </a>
              </li>
              <li>
                <a href="/doctors/Gastroenterologist" className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm">
                  Gastroenterología
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">Av. Principal 123</p>
                  <p className="text-gray-600 text-sm">Ciudad, CP 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm">Lun - Vie: 8:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <p className="text-gray-600 text-sm">info@docturn.com</p>
                  <p className="text-gray-600 text-sm">soporte@docturn.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 DocTurn. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
