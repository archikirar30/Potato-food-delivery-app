import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import {ToastContainer} from "react-toastify"

function App() {

  return (
    <>
    <ToastContainer />
      <Navbar />
      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
