
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/Appcontex';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {
    const { docId } = useParams()
    const { doctors } = useContext(AppContext)
    const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    // Función para convertir dólares a guaraníes
    const convertToGuaranies = (dollars) => {
        return (dollars * 3000).toLocaleString()
    }

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {
        setDocSlots([]);
        let today = new Date();
        let slotsArray = [];
        // Leer turnos ocupados de localStorage
        const bookedSlots = JSON.parse(localStorage.getItem(`bookedSlots_${docId}`) || '[]');

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);
            if (currentDate.getDay() === 0) {
                slotsArray.push([]);
                continue;
            }
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }
            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                let day = currentDate.getDate();
                let month = currentDate.getMonth() + 1;
                let year = currentDate.getFullYear();
                const slotDate = day + "_" + month + "_" + year;
                const slotTime = formattedTime;
                // Verificar si el turno ya fue reservado y pagado
                const isBooked = bookedSlots.some(bs => bs.slotDate === slotDate && bs.slotTime === slotTime);
                // Simular disponibilidad solo si no está reservado
                const isSlotAvailable = !isBooked && Math.random() > 0.3;
                if (isSlotAvailable) {
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    });
                }
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            slotsArray.push(timeSlots);
        }
        setDocSlots(slotsArray);
    }

    const { userData, backendUrl, token } = useContext(AppContext);
    const bookAppointment = async () => {
        const slot = docSlots[slotIndex][0];
        if (!slot) {
            toast.error('Selecciona un horario válido');
            return;
        }
        if (!userData || !userData._id) {
            toast.error('Debes iniciar sesión para reservar una cita.');
            navigate('/login');
            return;
        }
        try {
            const slotDate = `${slot.datetime.getDate()}_${slot.datetime.getMonth() + 1}_${slot.datetime.getFullYear()}`;
            const slotTime = slot.time;
            const res = await axios.post(
                backendUrl + '/api/user/book-appointment',
                {
                    userId: userData._id,
                    docId: docInfo._id,
                    slotDate,
                    slotTime
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (res.data.success) {
                toast.success('Cita reservada exitosamente');
                navigate('/my-turn');
            } else {
                toast.error(res.data.message || 'Error al reservar la cita');
            }
        } catch (err) {
            toast.error('Error al conectar con el backend.');
        }
    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* ---------- Detalles del Doctor ----------- */}
            <div className='flex flex-col lg:flex-row gap-8 mb-12'>
                {/* Imagen del Doctor */}
                <div className="lg:w-1/3">
                    <div className="bg-blue-600 rounded-lg p-8 flex items-center justify-center">
                        <img 
                            className='w-64 h-64 object-cover rounded-lg' 
                            src={docInfo.image} 
                            alt={docInfo.name} 
                        />
                    </div>
                </div>

                {/* Información del Doctor */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-2 mb-4">
                        <h1 className="text-3xl font-bold text-gray-900">{docInfo.name}</h1>
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-gray-600 font-medium">{docInfo.degree} - {docInfo.speciality}</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {docInfo.experience}
                        </span>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">Acerca de</h3>
                            <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-gray-600">i</span>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{docInfo.about}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-gray-900">Costo de consulta: Gs. {convertToGuaranies(docInfo.fees)}</span>
                    </div>
                </div>
            </div>

            {/* Espacios de Reserva */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Espacios de reserva</h2>
                
                {/* Fechas */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Seleccionar fecha</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {docSlots.length && docSlots.map((item, index) => {
                            // Obtener la fecha correspondiente al índice
                            let currentDate = new Date()
                            currentDate.setDate(currentDate.getDate() + index)
                            
                            return (
                                <div 
                                    onClick={() => item.length > 0 && setSlotIndex(index)} 
                                    key={index} 
                                    className={`text-center py-6 min-w-16 rounded-lg transition-all duration-200 ${
                                        slotIndex === index 
                                            ? 'bg-blue-600 text-white shadow-lg cursor-pointer' 
                                            : item.length === 0 
                                                ? 'bg-gray-100 border-2 border-gray-200 text-gray-400 cursor-not-allowed' 
                                                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md cursor-pointer'
                                    }`}
                                >
                                    <p className="text-sm font-medium">{daysOfWeek[currentDate.getDay()]}</p>
                                    <p className="text-lg font-bold">{currentDate.getDate()}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Horarios */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Seleccionar horario</h3>
                    <div className="flex gap-3 flex-wrap overflow-x-auto pb-2">
                        {docSlots.length && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
                            <p 
                                onClick={() => setSlotTime(item.time)} 
                                key={index} 
                                className={`text-sm font-medium flex-shrink-0 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                    item.time === slotTime 
                                        ? 'bg-blue-600 text-white shadow-lg' 
                                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md'
                                }`}
                            >
                                {item.time.toLowerCase()}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Botón de reserva */}
                <button 
                    onClick={bookAppointment} 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 mt-6 shadow-lg hover:shadow-xl"
                >
                    Reservar cita
                </button>
            </div>

            {/* Otros Especialistas */}
            <div className="bg-blue-50 rounded-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Otros especialistas</h2>
                    <p className="text-gray-600">Simplemente navegue a través de nuestra extensa lista de médicos de confianza.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {doctors.slice(0, 5).map((doctor, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                            {/* Imagen del doctor */}
                            <div className="bg-blue-50 h-32 flex items-center justify-center">
                                <img 
                                    className="w-full h-full object-cover" 
                                    src={doctor.image} 
                                    alt={doctor.name} 
                                />
                            </div>
                            
                            {/* Información del doctor */}
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-green-500 text-xs font-medium">Disponible</span>
                                </div>
                                <h3 className="text-gray-900 font-semibold text-sm mb-1">{doctor.name}</h3>
                                <p className="text-gray-600 text-xs">{doctor.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500">Cargando...</p>
        </div>
    )
}

export default Appointment