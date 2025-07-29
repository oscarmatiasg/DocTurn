import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontex'

const Doctors = () => {
  const { specialty } = useParams()
  const navigate = useNavigate()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if(specialty) {
      setFilterDoc(doctors.filter(item => item.speciality === specialty))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [specialty, doctors])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
        Navega a través de los médicos especialistas.
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Columna de filtros - Izquierda */}
        <div className="lg:w-1/4">
          <div className="flex flex-col gap-3">
            <p onClick={() => specialty === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className="px-4 py-3 text-left rounded-lg border transition-all duration-200 cursor-pointer bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Médico General
            </p>
            <p onClick={() => specialty === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className="px-4 py-3 text-left rounded-lg border transition-all duration-200 cursor-pointer bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Ginecología
            </p>
            <p onClick={() => specialty === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className="px-4 py-3 text-left rounded-lg border transition-all duration-200 cursor-pointer bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Dermatología
            </p>
            <p onClick={() => specialty === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className="px-4 py-3 text-left rounded-lg border transition-all duration-200 cursor-pointer bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Pediatría
            </p>
            <p onClick={() => specialty === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className="px-4 py-3 text-left rounded-lg border transition-all duration-200 cursor-pointer bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Neurología
            </p>
            <p onClick={() => specialty === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className="px-4 py-3 text-left rounded-lg border transition-all duration-200 cursor-pointer bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Gastroenterología
            </p>
          </div>
        </div>

        {/* Columna de doctores - Derecha */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDoc.length > 0 ? filterDoc.map((item, index) => (
              <div 
                onClick={() => navigate(`/turns/${item._id}`)}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:translate-y-[-2px]"
                key={index}
              >
                {/* Imagen del doctor */}
                <div className="bg-blue-50 h-48 flex items-center justify-center">
                  <img 
                    className="w-full h-full object-cover" 
                    src={item.image} 
                    alt={item.name} 
                  />
                </div>
                
                {/* Información del doctor */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 text-sm font-medium">Disponible</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No hay médicos disponibles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
