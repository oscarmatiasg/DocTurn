import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/*---------------izquierda-----------------*/}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-7'>
                <p>Sumate a DocTurn y <br />hacé crecer tu consulta médica</p>
            </div>
            <button 
                onClick={() => {
                    navigate('/login');
                    scrollTo(0, 0);
                }}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 cursor-pointer hover:translate-y-[10px] transition-all duration-300"
            >
                Crear Cuenta
            </button>
        </div>  
         {/*---------------derecha-----------------*/}
        <div className='hidden md:block md:w-1/2 lg:w-1/3 relative'>
            <img className='w-full absolute bottom-0 right-0' src={assets.appointment_img} alt="" />
        </div>
    </div>
   
  )
}

export default Banner