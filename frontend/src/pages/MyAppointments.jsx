import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const MyAppointments = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [payment, setPayment] = useState('');

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
    };

    // Leer citas simuladas de localStorage
    const getUserAppointments = () => {
        const local = JSON.parse(localStorage.getItem('myAppointments') || '[]');
        setAppointments(local);
    };

    // Simular pago online

    const simulatePayment = (appointmentId) => {
        // Marcar la cita como pagada
        const updated = appointments.map(a => a._id === appointmentId ? { ...a, payment: true } : a);
        setAppointments(updated);
        localStorage.setItem('myAppointments', JSON.stringify(updated));

        // Eliminar el turno reservado de la lista de turnos disponibles del doctor (en localStorage)
        const paidAppointment = updated.find(a => a._id === appointmentId);
        if (paidAppointment) {
            // Guardar los turnos ocupados por doctor en localStorage
            const key = `bookedSlots_${paidAppointment.docData._id}`;
            const prev = JSON.parse(localStorage.getItem(key) || '[]');
            prev.push({ slotDate: paidAppointment.slotDate, slotTime: paidAppointment.slotTime });
            localStorage.setItem(key, JSON.stringify(prev));
        }
        toast.success('Pago simulado exitosamente. Turno agendado.');
    };

    // Simular cancelación
    const cancelAppointment = (appointmentId) => {
        const updated = appointments.map(a => a._id === appointmentId ? { ...a, cancelled: true } : a);
        setAppointments(updated);
        localStorage.setItem('myAppointments', JSON.stringify(updated));
        toast.info('Cita cancelada');
    };

    useEffect(() => {
        getUserAppointments();
    }, []);

    return (
        <div className="max-w-2xl mx-auto px-2 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My appointments</h2>
            {appointments.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No appointments found</h3>
                    <p className="text-gray-500 mb-6">Book your first appointment</p>
                    <button
                        onClick={() => navigate('/doctors')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Book Appointment
                    </button>
                </div>
            ) : (
                <div className="divide-y divide-gray-200">
                    {appointments.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-6 py-6">
                            <img
                                className="w-28 h-28 rounded-lg object-cover bg-blue-50 border"
                                src={item.docData.image}
                                alt={item.docData.name}
                            />
                            <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Dr. {item.docData.name}</h3>
                                        <p className="text-gray-700 text-sm font-medium mb-1">{item.docData.speciality}</p>
                                        <div className="text-xs text-gray-500">
                                            <span className="font-semibold">Address:</span> {item.docData.address.line1}
                                            {item.docData.address.line2 && <span>, {item.docData.address.line2}</span>}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            <span className="font-semibold">Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 md:items-end mt-2 md:mt-0">
                                        {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                                            <>
                                                <span className="inline-block px-4 py-2 rounded bg-yellow-50 text-yellow-700 border border-yellow-200 font-medium mb-2">Pending Payment</span>
                                                <button
                                                    onClick={() => setPayment(item._id)}
                                                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 font-medium"
                                                >
                                                    Pay Online
                                                </button>
                                            </>
                                        )}
                                        {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                            <button
                                                onClick={() => simulatePayment(item._id)}
                                                className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 font-medium"
                                                disabled={payment === item._id}
                                            >
                                                Confirm Simulated Payment
                                            </button>
                                        )}
                                        {!item.cancelled && item.payment && !item.isCompleted && (
                                            <span className="inline-block px-4 py-2 rounded bg-green-50 text-green-700 border border-green-200 font-medium">Paid</span>
                                        )}
                                        {item.isCompleted && (
                                            <span className="inline-block px-4 py-2 rounded bg-green-50 text-green-700 border border-green-200 font-medium">Completed</span>
                                        )}
                                        {item.cancelled && (
                                            <span className="inline-block px-4 py-2 rounded bg-red-50 text-red-700 border border-red-200 font-medium">Cancelled</span>
                                        )}
                                        {!item.cancelled && !item.isCompleted && (
                                            <button
                                                onClick={() => cancelAppointment(item._id)}
                                                className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50 font-medium"
                                            >
                                                Cancel appointment
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAppointments;
