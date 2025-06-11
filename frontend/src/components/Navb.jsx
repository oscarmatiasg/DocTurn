import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navb = () => {

    const navigate = useNavigate();
    
    const [showMenu, setShowMenu] = React.useState(false)   
    const [token, setToken] = React.useState(true)

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
            {
                token ?
                <div className='flex items-center gap-2 cursor-pointer relative' onClick={()=>setShowMenu(!showMenu)}>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-10 right-0 bg-white shadow-lg rounded-md p-3 z-10 text-black font-medium flex flex-col gap-2' style={{display: showMenu ? 'block' : 'none'}}>
                        <div className='min-w-48 bg-stone-100 rounded p-4 text-black flex flex-col gap-4'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-ponter'>Mi perfil</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-ponter'>Mis citas</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-ponter'>Cerrar sesión</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/80 transition-all duration-400 mr-3'>Iniciar Sesión</button>
            }
        </div>
    </div>
  )
}

export default Navb
