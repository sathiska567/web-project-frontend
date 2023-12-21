import React from 'react'
import Header from '../Components/Laouts/Header'
import HeadContent from '../Components/Laouts/HeadContent'
import Myvideo from '../assets/the end.mp4'
import Seo from '../Components/Laouts/Seo'
// import ContactContent from '../Components/Laouts/ContactContent'
import Catagory from '../Components/Laouts/Catagory'
import About_Us from '../Components/Laouts/About_Us'
import Footer from '../Components/Laouts/Footer'

const Home = () => {
  return (
    <>

      <Seo title="Blog App Home Page" />
      <Header />

      <HeadContent

        Myvideo={Myvideo}

      /> <br /><br />

     <Catagory /><br />
     <About_Us /> <br /><br /><br /><br /><br />

     <Footer />






    </>
  )
}

export default Home