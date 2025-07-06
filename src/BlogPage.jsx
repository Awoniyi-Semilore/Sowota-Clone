import React from 'react'
import Blog from './component/Blog/BlogComponenet'
import Footer from './component/Footer/Footer'
import Header from './component/header'

const BlogPage = () => {
  return (
    <div>
        <Header />
       <div style={{paddingTop: '100px'}}>
         <Blog />
       </div>
       <div style={{marginTop: "-150px"}}>
         <Footer />
       </div>
    </div>
  )
}

export default BlogPage
