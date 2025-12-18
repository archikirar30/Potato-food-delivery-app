import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import {ToastContainer} from "react-toastify"

function App() {

  const url = "http://localhost:4000"

  return (
    <>
    <ToastContainer />
      <Navbar />
      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path='/add' element={<Add url={url}/>}></Route>
          <Route path='/list' element={<List url={url} />}></Route>
          <Route path='/orders' element={<Orders url={url} />}></Route>
          <Route path='*' element={<Navigate replace to="/add" />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
