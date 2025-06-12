import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-4xl sm:text-4xl font-extrabold text-primary drop-shadow-xl tracking-tight mb-4'>
          Buscar por especialidad
        </h1>
        <p className='sm:w-1/3 text-center text-sm'>Simplemente navegue a través de nuestra extensa lista de médicos confiables y programe su cita sin complicaciones.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {
                specialityData.map((item, index) => (
                    <Link 
                    className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
                    key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
                        <p>{item.speciality}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
export default SpecialityMenu
