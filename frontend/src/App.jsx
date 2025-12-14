import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPop from './components/LoginPop/LoginPop'
import {ToastContainer} from "react-toastify"

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <ToastContainer/>
      {showLogin && <LoginPop setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Routes>
      <AppDownload/>
      <Footer />
    </>
  )
}

export default App
