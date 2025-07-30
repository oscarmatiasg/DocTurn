import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Appcontex';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Login'); // Default to Login
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  // Debug logging
  console.log('🔍 Login component rendered');
  console.log('🌐 Backend URL:', backendUrl);
  console.log('🎫 Current token:', token ? 'exists' : 'null');
  console.log('🔧 Context values:', { backendUrl, token: !!token, setToken: !!setToken });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('🔥 onSubmitHandler called');
    console.log('📊 Form data:', { email, password, state, backendUrl });

    if (!backendUrl) {
      console.error('❌ Backend URL is not defined');
      toast.error('Error de configuración: URL del backend no definida');
      return;
    }

    if (!email || !password) {
      console.error('❌ Email or password is empty');
      toast.error('Por favor completa todos los campos');
      return;
    }

    try {
      console.log('🚀 Making API request...');
      
      if (state === 'Sign Up') {
        if (!name) {
          toast.error('Por favor ingresa tu nombre');
          return;
        }
        console.log('📝 Registering user...');
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        console.log('📥 Register response:', data);
        
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Cuenta creada exitosamente');
        } else {
          toast.error(data.message);
        }
      } else { // 'Login' state
        console.log('🔐 Logging in user...');
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
        console.log('📥 Login response:', data);
        
        if (data.success) {
          console.log('✅ Login successful, setting token...');
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Inicio de sesión exitoso');
        } else {
          console.log('❌ Login failed:', data.message);
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error('💥 Login/Register error:', error);
      console.error('📋 Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      toast.error(error.response?.data?.message || 'Error de conexión. Verifica que el servidor esté funcionando.');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Crear Cuenta' : 'Iniciar Sesión'}</p>
        <p>Por favor {state === 'Sign Up' ? 'regístrate' : 'inicia sesión'} para reservar citas</p>
        {state === 'Sign Up' && (
          <div className='w-full '>
            <p>Nombre Completo</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
        )}
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Contraseña</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button type="submit" className='bg-blue-600 text-white w-full py-2 my-2 rounded-md text-base'>
          {state === 'Sign Up' ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </button>
        {state === 'Sign Up'
          ? <p>¿Ya tienes una cuenta? <span onClick={() => setState('Login')} className='text-blue-600 underline cursor-pointer'>Inicia sesión aquí</span></p>
          : <p>¿No tienes una cuenta? <span onClick={() => setState('Sign Up')} className='text-blue-600 underline cursor-pointer'>Regístrate aquí</span></p>
        }
      </div>
    </form>
  );
}

export default Login;