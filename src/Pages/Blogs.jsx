import React from 'react'
import Header from '../Components/Laouts/Header'
import UploardBlog from '../Components/Laouts/UploardBlog'
import blog from '../Components/Laouts/images/blog01.jpg'

export default function Blogs() {

 
  return (
    <div>

     <Header />
     <div>
      <img src={blog} alt="" width={'100%'} height={'100%'} />
     </div>

   
    {/* <BlogContent /> */}

    <UploardBlog />
    {/* <UploadImage /> */}

    </div>



  )
}
