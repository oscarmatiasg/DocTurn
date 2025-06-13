import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import Turns from './pages/Turns'
import MyProfile from './pages/MyProfile'
import MyTurn from './pages/MyTurn'
import Navb from './components/Navb'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:specialty' element={<Doctors />} />
        <Route path='/my-turn' element={<MyTurn />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/turns/:docId' element={<Turns />} />
      </Routes>
    </div>
  )
}

export default App
