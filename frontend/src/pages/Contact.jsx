import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          CONTÁCTANOS
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para cualquier consulta.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
        {/* Left Column - Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-1"></div>
            <div className="relative bg-white rounded-lg p-2">
              <img 
                className="w-full h-auto rounded-lg object-cover" 
                src={assets.contact_image} 
                alt="Oficina de DocTurn" 
              />
            </div>
          </div>
        </div>

        {/* Right Column - Contact Information */}
        <div className="lg:w-1/2 space-y-8">
          {/* Office Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-gray-900">
                  NUESTRA OFICINA
                </h2>
                <div className="space-y-1 text-gray-600">
                  <p>Av. Principal 123, Edificio DocTurn</p>
                  <p>Asunción, Paraguay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-600">Tel: (595) 21 123-456</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-600">Email: contacto@docturn.com</span>
            </div>
          </div>

          {/* Careers Section */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                CARRERAS EN DOCTURN
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Conoce más sobre nuestros equipos y oportunidades laborales. 
                Únete a nosotros para transformar la atención médica digital.
              </p>
            </div>
            
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              <span>Explorar Oportunidades</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Support Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Soporte Técnico</h3>
          <p className="text-gray-600 text-sm">
            Asistencia técnica disponible 24/7 para resolver cualquier problema
          </p>
        </div>

        {/* Feedback Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Comentarios</h3>
          <p className="text-gray-600 text-sm">
            Comparte tu experiencia y ayúdanos a mejorar nuestro servicio
          </p>
        </div>

        {/* Partnership Card */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Alianzas</h3>
          <p className="text-gray-600 text-sm">
            Colabora con nosotros para expandir la atención médica digital
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
