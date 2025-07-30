import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext()

const AppProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://backend-docturn.vercel.app'
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState(null)
    const [doctors, setDoctors] = useState([])

    // Function to load user profile data
    const loadUserProfileData = async () => {
        try {
            if (token) {
                console.log('Loading user profile...')
                const { data } = await axios.get(backendUrl + '/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Profile response:', data)
                if (data.success) {
                    setUserData(data.userData);
                } else {
                    localStorage.removeItem('token');
                    setToken('');
                    setUserData(null);
                }
            }
        } catch (error) {
            console.log('Error loading user profile:', error);
            localStorage.removeItem('token');
            setToken('');
            setUserData(null);
        }
    };

    // Function to get user appointments
    const getUserAppointments = async () => {
        try {
            if (token) {
                console.log('Loading user appointments...');
                const { data } = await axios.get(backendUrl + '/api/user/appointments', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Appointments response:', data);
                if (data.success) {
                    return data.appointments;
                }
            }
            return [];
        } catch (error) {
            console.log('Error loading appointments:', error);
            toast.error('Error loading appointments');
            return [];
        }
    };

    // Function to cancel appointment
    const cancelAppointment = async (appointmentId) => {
        try {
            console.log('Cancelling appointment:', appointmentId);
            const { data } = await axios.post(
                backendUrl + '/api/user/cancel-appointment',
                { appointmentId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Cancel response:', data);
            if (data.success) {
                toast.success(data.message);
                return true;
            } else {
                toast.error(data.message);
                return false;
            }
        } catch (error) {
            console.log('Error cancelling appointment:', error);
            toast.error('Error cancelling appointment');
            return false;
        }
    };

    // Function to simulate payment
    const simulatePayment = async (appointmentId, paymentMethod = 'card') => {
        try {
            console.log('Processing payment for appointment:', appointmentId);
            const { data } = await axios.post(
                backendUrl + '/api/user/simulate-payment',
                { appointmentId, paymentMethod },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Payment response:', data);
            if (data.success) {
                toast.success(data.message);
                return true;
            } else {
                toast.error(data.message);
                return false;
            }
        } catch (error) {
            console.log('Error processing payment:', error);
            toast.error('Error processing payment');
            return false;
        }
    };

    // Function to get all doctors
    const getAllDoctors = async () => {
        try {
            console.log('Loading doctors...')
            const { data } = await axios.get(backendUrl + '/api/doctor/list');
            if (data.success) {
                setDoctors(data.doctors);
                console.log('Doctors loaded:', data.doctors.length)
            } else {
                toast.error("Error loading doctors.");
            }
        } catch (error) {
            console.log('Error loading doctors:', error);
            toast.error("Network error loading doctors.");
        }
    };

    // Load user data when token changes
    useEffect(() => {
        console.log('Token changed, token exists:', !!token)
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(null)
        }
    }, [token])

    // Load doctors on component mount
    useEffect(() => {
        getAllDoctors();
    }, []);

    const value = {
        doctors,
        backendUrl,
        token,
        setToken,
        userData,
        setUserData,
        loadUserProfileData,
        getUserAppointments,
        cancelAppointment,
        simulatePayment
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider