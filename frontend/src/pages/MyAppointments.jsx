
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/Appcontex';

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const MyAppointments = () => {
    const navigate = useNavigate();
    const { getUserAppointments, simulatePayment, cancelAppointment, token, backendUrl } = useContext(AppContext);
    
    // Debug logging
    console.log('MyAppointments component loaded');
    console.log('Context functions available:', { 
        getUserAppointments: !!getUserAppointments, 
        simulatePayment: !!simulatePayment, 
        cancelAppointment: !!cancelAppointment,
        token: !!token,
        backendUrl 
    });
    const [appointments, setAppointments] = useState([]);
    const [payment, setPayment] = useState('');
    const [loading, setLoading] = useState(false);

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
    };

    // Fetch appointments from backend
    const fetchAppointments = async () => {
        console.log('Fetching appointments...');
        setLoading(true);
        try {
            if (getUserAppointments) {
                const appts = await getUserAppointments();
                console.log('Fetched appointments:', appts);
                setAppointments(appts || []);
            } else {
                console.error('getUserAppointments function not available');
                toast.error('Error: Function not available');
            }
        } catch (error) {
            console.error('Error in fetchAppointments:', error);
            toast.error('Error loading appointments');
        }
        setLoading(false);
    };

    // Simulate payment via backend
    const handleSimulatePayment = async (appointmentId) => {
        const success = await simulatePayment(appointmentId, 'online');
        if (success) fetchAppointments();
    };

    // Cancel appointment via backend
    const handleCancelAppointment = async (appointmentId) => {
        const success = await cancelAppointment(appointmentId);
        if (success) fetchAppointments();
    };

    // Refrescar citas: recargar desde backend
    const refreshAppointments = () => {
        fetchAppointments();
        toast.info('Citas refrescadas.');
    };

    useEffect(() => {
        fetchAppointments();
    }, [token]);

    return (
        <div className="max-w-2xl mx-auto px-2 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">My appointments</h2>
                <button
                    onClick={refreshAppointments}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                    Refrescar citas
                </button>
            </div>
            {loading ? (
                <div className="text-center py-16 text-gray-500">Cargando citas...</div>
            ) : appointments.length === 0 ? (
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
                        <div key={item._id || index} className="flex flex-col md:flex-row items-center gap-6 py-6">
                            <img
                                className="w-28 h-28 rounded-lg object-cover bg-blue-50 border"
                                src={item.docData?.image}
                                alt={item.docData?.name}
                            />
                            <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Dr. {item.docData?.name}</h3>
                                        <p className="text-gray-700 text-sm font-medium mb-1">{item.docData?.speciality}</p>
                                        <div className="text-xs text-gray-500">
                                            <span className="font-semibold">Address:</span> {item.docData?.address?.line1}
                                            {item.docData?.address?.line2 && <span>, {item.docData.address.line2}</span>}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            <span className="font-semibold">Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 md:items-end mt-2 md:mt-0">
                                        {!item.payment && !item.isCompleted && payment !== item._id && (
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
                                        {!item.payment && !item.isCompleted && payment === item._id && (
                                            <button
                                                onClick={() => handleSimulatePayment(item._id)}
                                                className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 font-medium"
                                                disabled={payment === item._id}
                                            >
                                                Confirm Payment
                                            </button>
                                        )}
                                        {item.payment && !item.isCompleted && (
                                            <span className="inline-block px-4 py-2 rounded bg-green-50 text-green-700 border border-green-200 font-medium">Paid</span>
                                        )}
                                        {item.isCompleted && (
                                            <span className="inline-block px-4 py-2 rounded bg-green-50 text-green-700 border border-green-200 font-medium">Completed</span>
                                        )}
                                        {!item.isCompleted && (
                                            <button
                                                onClick={() => handleCancelAppointment(item._id)}
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
