import React from 'react'
import Seo from '../Components/Laouts/Seo'
import Header from '../Components/Laouts/Header'
import HeadContent from '../Components/Laouts/HeadContent'
import Myvideo from '../assets/the end.mp4'
import { ToastContainer } from 'react-toastify'
import Login from '../Components/Laouts/Login'
import Footer from '../Components/Laouts/Footer'

export default function SignIn() {
  return (
    <div>

 <Seo title="Sign-In Page" />
 <Header />
 <HeadContent
 
 Myvideo={Myvideo}
 
 
 /> <br /><br />
 <ToastContainer />

<Login /><br />
<Footer />


    </div>
  )
}
