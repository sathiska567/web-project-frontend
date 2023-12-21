import React from 'react'

export default function HeadContent({Myvideo}) {
  return (
    <div>
    <video
          src={Myvideo}
          muted
          autoPlay={"autoplay"}
          loop
          width="100%"
          height="70%"
        >

        </video>
        
    </div>
  )
}
