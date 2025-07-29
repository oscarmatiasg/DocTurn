import { createContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext()

const AppProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState(null)

    // Function to load user profile data
    const loadUserProfileData = async () => {
        try {
            if (token) {
                const { data } = await axios.get(backendUrl + '/api/user/profile', { 
                    headers: { token } 
                })
                if (data.success) {
                    setUserData(data.userData)
                }
            }
        } catch (error) {
            console.log(error)
            // Si hay error, limpiar token
            localStorage.removeItem('token')
            setToken('')
            setUserData(null)
        }
    }

    // Function to get user appointments
    const getUserAppointments = async () => {
        try {
            if (token) {
                const { data } = await axios.get(backendUrl + '/api/user/appointments', { 
                    headers: { token } 
                })
                if (data.success) {
                    return data.appointments
                }
            }
            return []
        } catch (error) {
            console.log(error)
            toast.error('Error loading appointments')
            return []
        }
    }

    // Function to cancel appointment
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', 
                { appointmentId }, 
                { headers: { token } }
            )
            if (data.success) {
                toast.success(data.message)
                return true
            } else {
                toast.error(data.message)
                return false
            }
        } catch (error) {
            console.log(error)
            toast.error('Error cancelling appointment')
            return false
        }
    }

    // Function to simulate payment
    const simulatePayment = async (appointmentId, paymentMethod = 'card') => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/simulate-payment', 
                { appointmentId, paymentMethod }, 
                { headers: { token } }
            )
            if (data.success) {
                toast.success(data.message)
                return true
            } else {
                toast.error(data.message)
                return false
            }
        } catch (error) {
            console.log(error)
            toast.error('Error processing payment')
            return false
        }
    }

    // Load user data when token changes
    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(null)
        }
    }, [token])

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
