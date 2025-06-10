import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navb = () => {

    const navigate = useNavigate();
    

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt=''/>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>INICIO</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>DOCTORES</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>NOSOTROS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACTO</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            <div>
                <img src={assets.profile_pic} alt="" />
                <img src={assets.dropdown_icon} alt="" />
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/80 transition-all duration-400 mr-3'>
                Crear cuenta
            </button>
        </div>
    </div>
  )
}

export default Navb
