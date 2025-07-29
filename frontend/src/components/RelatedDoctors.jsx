import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality, docId }) => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Médicos Relacionados
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explora nuestra extensa lista de médicos especialistas confiables en {speciality}
                </p>
            </div>

            {/* Doctors Grid */}
            {relDoc.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {relDoc.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => { 
                                navigate(`/appointment/${item._id}`); 
                                scrollTo(0, 0) 
                            }} 
                            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:translate-y-[-4px] border border-gray-100 overflow-hidden"
                        >
                            {/* Doctor Image */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                    src={item.image} 
                                    alt={`Dr. ${item.name}`} 
                                />
                                {/* Availability Badge */}
                                <div className="absolute top-3 right-3">
                                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                        item.available 
                                            ? 'bg-green-100 text-green-700 border border-green-200' 
                                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                                    }`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${
                                            item.available ? 'bg-green-500' : 'bg-gray-400'
                                        }`}></div>
                                        <span>{item.available ? 'Disponible' : 'No Disponible'}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Doctor Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    {item.speciality}
                                </p>
                                
                                {/* Action Button */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">
                                        Ver perfil completo
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No hay médicos relacionados
                    </h3>
                    <p className="text-gray-500">
                        No se encontraron otros médicos en esta especialidad
                    </p>
                </div>
            )}

            {/* View All Button */}
            {relDoc.length > 0 && (
                <div className="text-center mt-12">
                    <button 
                        onClick={() => navigate(`/doctors/${speciality}`)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                        <span>Ver todos los médicos</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    )
}

export default RelatedDoctors