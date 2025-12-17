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
import Verify from './pages/verify/verify'
import MyOrder from './pages/MyOrder/MyOrder'

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
        <Route path="/verify" element={<Verify/>} />
        <Route path="/myorders" element={<MyOrder />} />
      </Routes>
      <AppDownload/>
      <Footer />
    </>
  )
}

export default App
