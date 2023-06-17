import './App.css'
import { Routes, Router, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Blogs from './Pages/Blogs'

function App() {

  return (

    <>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/blogs' element={<Blogs />} />


      </Routes>

  </>

  )
  
}

export default App
