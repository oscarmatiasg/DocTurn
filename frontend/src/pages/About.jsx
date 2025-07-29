import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          NOSOTROS
        </h1>
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
                src={assets.about_image} 
                alt="Equipo médico de DocTurn" 
              />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 space-y-8">
          {/* Welcome Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Bienvenido a DocTurn
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tu aliado confiable para gestionar tus necesidades de salud de manera conveniente y eficiente. 
              En DocTurn, entendemos los desafíos que enfrentan las personas al programar citas médicas 
              y administrar sus historiales clínicos.
            </p>
          </div>

          {/* Commitment Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              DocTurn está comprometido con la excelencia en tecnología para la salud
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos esforzamos continuamente por mejorar nuestra plataforma, integrando los últimos avances 
              para mejorar la experiencia del usuario y brindar un servicio superior. Ya sea que estés 
              reservando tu primera cita o manejando cuidados continuos, DocTurn está aquí para 
              apoyarte en cada paso del camino.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Nuestra Visión
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestra visión en DocTurn es crear una experiencia de atención médica fluida para cada usuario. 
              Aspiramos a cerrar la brecha entre pacientes y profesionales de la salud, facilitando el acceso 
              a la atención cuando la necesites.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="space-y-12">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            PORQUÉ ELEGIRNOS
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Efficiency Card */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                EFICIENCIA
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Programación de citas optimizada que se adapta a tu estilo de vida ocupado.
              </p>
            </div>
          </div>

          {/* Convenience Card */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                CONVENIENCIA
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acceso a una red de profesionales de la salud confiables en tu área.
              </p>
            </div>
          </div>

          {/* Personalization Card */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                PERSONALIZACIÓN
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recomendaciones y recordatorios personalizados para ayudarte a mantener el control de tu salud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
