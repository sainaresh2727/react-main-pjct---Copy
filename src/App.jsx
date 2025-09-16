import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'


import Shop from './Pages/Shop'
import Faqs from './Pages/Faqs'
import Contact from './Pages/Contact'
import Product1 from './Productpage/Product1'
function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/faqs' element={<Faqs/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product1/:id' element={<Product1/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App