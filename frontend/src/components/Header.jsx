import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="w-full bg-primary flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 px-6 md:px-20 py-2 md:py-4">

      {/* Sección de texto */}
      <div className="text-white md:w-1/2 max-w-xl flex flex-col items-center md:items-start">
        {/* Texto principal arriba */}
        <p className="text-lg md:text-xl font-medium mb-4 whitespace-nowrap">
          Tu conexión directa con doctores y turnos disponibles.
        </p>

        {/* Título principal */}
        <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-8 text-center sm:text-left">
          Reserva una cita con <br />
          <span className="text-white">Médicos de confianza</span>
        </h1>

        {/* Sección con perfiles y descripción */}
        <div className="flex items-start gap-4 mb-8">
          <div className="flex-shrink-0">
            <img
              src={assets.group_profiles}
              alt="Perfiles de doctores"
              className="w-16 h-12 object-contain"
            />
          </div>
          <div>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Tu salud empieza con un turno. <br />
              Con DocTurn, simplemente explorá <br />
              nuestra extensa lista de médicos de <br />
              confianza y agendá tu cita sin <br />
              complicaciones
            </p>
          </div>
        </div>

        {/* Botón */}
        <a href='#speciality' className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-4 00 shadow-lg">
          Reservar un turno
        </a>
      </div>

       {/* Imagen del doctor */}
      <div className="md:w-1/2 flex items-end justify-center h-full">
        <img
          src={assets.doc_header}
          alt="Doctor profesional"
          className="w-auto max-h-[70vh] object-contain"
        />
      </div>
    
    </div>
  )
}

export default Header