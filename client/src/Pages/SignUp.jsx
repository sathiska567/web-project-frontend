import React from 'react'
import Seo from '../Components/Laouts/Seo'
import Header from '../Components/Laouts/Header'
import HeadContent from '../Components/Laouts/HeadContent'
import Myvideo from '../assets/the end sign-up.mp4'
import Registration from '../Components/Laouts/Registration'
import { ToastContainer } from 'react-toastify'
import Footer from '../Components/Laouts/Footer'

export default function SignUp() {
  return (
    <div>

 <Seo title="Sign-Up Page" />
 <Header />
 <HeadContent
 
 Myvideo={Myvideo}
 
 
 /> <br /><br />
 <ToastContainer />

 <Registration /><br />
 <Footer />

    </div>
  )
}
