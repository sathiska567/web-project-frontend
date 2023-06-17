import React from 'react'
import { Helmet } from "react-helmet";


export default function Seo({ title,description, keywords, author}) {
  return (
    <div>
          <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />


          <title>{title}</title>
        </Helmet>
      </div>
    </div>
  )


}



