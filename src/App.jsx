import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogPage from './BlogPage'
import Community from './pages/Community/Community'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogPage' element={<BlogPage />} />
        <Route path='/waitlist' element={<Community />} />
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
