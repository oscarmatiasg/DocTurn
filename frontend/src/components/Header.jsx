import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
      <div>
        <p>Tu conexión directa con doctores y turnos disponibles.</p>
        <p>Reserva una cita con <br /> Médicos de confianza</p>
        <div>
            <img src={assets.group_profiles} alt="" />
            <p>Tu salud empieza con un turno. <br /> Con DocTurn, simplemente explorá <br />nuestra extensa lista de médicos de confianza <br />y agendá tu cita sin complicaciones</p>
        </div>
        <a href="">Reservar un turno</a>
      </div>
      
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>

  )
}

export default Header
