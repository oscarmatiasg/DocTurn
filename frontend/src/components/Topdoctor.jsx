import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontex'

const Topdoctor = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 md:mx-100' id='topdoctor'>
      <h1 className='text-4xl sm:text-4xl font-extrabold text-primary drop-shadow-xl tracking-tight mb-4'>Los mejores médicos para reservar turno</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simplemente navegue a través de nuestra extensa lista de médicos de confianza.</p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-20'>
        {doctors.slice(0,8).map((item, index) => (
          <div onClick={()=> navigate(`/turns/${item._id}`)} 
          className='flex flex-col items-center gap-2 p-4 border rounded-lg overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-300' key={index}>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='px-2 text-center'>
                <div className='flex items-center text-sm gap-2 text-green-500'> 
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p> Disponible</p>
                </div>
                <h2 className='text-gray-900 text-base font-medium'>{item.name}</h2>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0); }} 
      className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer hover:translate-y-[10px] transition-all duration-300'>Ver más</button>
    </div>
  )
}

export default Topdoctor
