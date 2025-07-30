import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)
  const navigate = useNavigate()

  const logout = () => {
    if (dToken) {
      setDToken('')
      localStorage.removeItem('dToken')
    }
    if (aToken) {
      setAToken('')
      localStorage.removeItem('aToken')
    }
    navigate('/login') // Redirect to login page after logout
  }

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <img 
          onClick={() => navigate('/')} 
          className="w-36 sm:w-40 cursor-pointer hover:opacity-80 transition-opacity duration-200" 
          src={assets.admin_logo} 
          alt="Logo DocTurn Admin" 
        />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            {aToken ? 'Administrador' : 'Médico'}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Panel de Control</span>
        </div>
        
        <button 
          onClick={logout} 
          className="bg-red-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}

export default Navbar