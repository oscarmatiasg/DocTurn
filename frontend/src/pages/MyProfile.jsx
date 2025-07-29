import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Appcontex'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)
            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return userData ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Mi Perfil
                </h1>
                <p className="text-lg text-gray-600">
                    Gestiona tu información personal y preferencias
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Profile Image */}
                    <div className="lg:w-1/3">
                        <div className="text-center">
                            {isEdit ? (
                                <label htmlFor="image" className="cursor-pointer">
                                    <div className="relative inline-block">
                                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 hover:border-blue-200 transition-colors duration-200">
                                            <img 
                                                className="w-full h-full object-cover" 
                                                src={image ? URL.createObjectURL(image) : userData.image} 
                                                alt="Foto de perfil" 
                                            />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">Haz clic para cambiar foto</p>
                                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden accept="image/*" />
                                </label>
                            ) : (
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 mx-auto">
                                    <img 
                                        className="w-full h-full object-cover" 
                                        src={userData.image} 
                                        alt="Foto de perfil" 
                                    />
                                </div>
                            )}

                            {/* Name Section */}
                            <div className="mt-6">
                                {isEdit ? (
                                    <input 
                                        className="text-2xl font-bold text-gray-900 text-center bg-gray-50 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" 
                                        type="text" 
                                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                                        value={userData.name} 
                                    />
                                ) : (
                                    <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Information */}
                    <div className="lg:w-2/3 space-y-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Información de Contacto</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                    <p className="text-blue-600 font-medium">{userData.email}</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                                    {isEdit ? (
                                        <input 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" 
                                            type="text" 
                                            onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                                            value={userData.phone} 
                                        />
                                    ) : (
                                        <p className="text-blue-600 font-medium">{userData.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                    {isEdit ? (
                                        <div className="space-y-2">
                                            <input 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" 
                                                type="text" 
                                                placeholder="Línea 1"
                                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                                                value={userData.address.line1} 
                                            />
                                            <input 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" 
                                                type="text" 
                                                placeholder="Línea 2 (opcional)"
                                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                                                value={userData.address.line2} 
                                            />
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">
                                            {userData.address.line1}
                                            {userData.address.line2 && <br />}
                                            {userData.address.line2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Basic Information */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Información Básica</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Género</label>
                                    {isEdit ? (
                                        <select 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" 
                                            onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                                            value={userData.gender}
                                        >
                                            <option value="Not Selected">No seleccionado</option>
                                            <option value="Male">Masculino</option>
                                            <option value="Female">Femenino</option>
                                        </select>
                                    ) : (
                                        <p className="text-gray-600">{userData.gender}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                                    {isEdit ? (
                                        <input 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" 
                                            type="date" 
                                            onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                                            value={userData.dob} 
                                        />
                                    ) : (
                                        <p className="text-gray-600">{userData.dob}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6 border-t border-gray-200">
                            {isEdit ? (
                                <>
                                    <button 
                                        onClick={updateUserProfileData} 
                                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                        Guardar Cambios
                                    </button>
                                    <button 
                                        onClick={() => {
                                            setIsEdit(false)
                                            setImage(false)
                                        }} 
                                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                                    >
                                        Cancelar
                                    </button>
                                </>
                            ) : (
                                <button 
                                    onClick={() => setIsEdit(true)} 
                                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md"
                                >
                                    Editar Perfil
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cargando perfil...</h3>
                <p className="text-gray-500">Espera un momento mientras cargamos tu información</p>
            </div>
        </div>
    )
}

export default MyProfile