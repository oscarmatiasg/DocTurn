import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontex'

const Navb = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const { token, setToken, userData } = useContext(AppContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken(false)
        navigate('/login')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
            <NavLink to='/'>
                <img className='w-44 cursor-pointer' src={assets.logo} alt='Logo DocTurn'/>
            </NavLink>
            
            {/* Desktop Navigation */}
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
                <a href="https://admin-docturn.vercel.app/" target="_blank" rel="noopener noreferrer" className='bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 cursor-pointer transition-all duration-300 hidden md:block'>
                    Panel Docturn
                </a>
                {token && userData ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={userData.image} alt="Foto de perfil" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-10 right-0 bg-white shadow-lg rounded-md p-3 z-10 text-black font-medium flex flex-col gap-2 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded p-4 text-black flex flex-col gap-4'>
                                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>Mi perfil</p>
                                <p onClick={() => navigate('/my-turn')} className='hover:text-black cursor-pointer'>Mis turnos</p>
                                <p onClick={logout} className='hover:text-black cursor-pointer'>Cerrar sesión</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button 
                        onClick={() => navigate('/login')} 
                        className='bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/80 cursor-pointer hover:translate-y-[10px] transition-all duration-300 hidden md:block'
                    >
                        Iniciar Sesión
                    </button>
                )}

                {/* Mobile Menu Button */}
                <img 
                    onClick={() => setShowMenu(true)} 
                    className='w-6 md:hidden cursor-pointer' 
                    src={assets.menu_icon} 
                    alt="Menú móvil" 
                />

                {/* Mobile Menu */}
                <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img src={assets.logo} className='w-36' alt="Logo DocTurn" />
                        <img 
                            onClick={() => setShowMenu(false)} 
                            src={assets.cross_icon} 
                            className='w-7 cursor-pointer' 
                            alt="Cerrar menú" 
                        />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'>
                            <p className='px-4 py-2 rounded-full inline-block'>INICIO</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                            <p className='px-4 py-2 rounded-full inline-block'>DOCTORES</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'>
                            <p className='px-4 py-2 rounded-full inline-block'>NOSOTROS</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                            <p className='px-4 py-2 rounded-full inline-block'>CONTACTO</p>
                        </NavLink>
                    </ul>
                    
                    {/* Mobile Login Button */}
                    {!token && (
                        <div className='flex justify-center mt-8'>
                            <button 
                                onClick={() => {
                                    setShowMenu(false)
                                    navigate('/login')
                                }} 
                                className='bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/80 cursor-pointer transition-all duration-300'
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navb
