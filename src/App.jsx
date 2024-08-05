import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import MyTrains from './pages/MyTrains/MyTrains'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/my-trains" element={<MyTrains/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
