import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt=''/>
        <ul>
            <NavLink>
                <li>INICIO</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>DOCTORES</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ACERCA DE</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>CONTACTO</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>INICIAR SESIÓN</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>
                Crear cuenta
            </button>
        </div>
    </div>
  )
}

export default Navbar
