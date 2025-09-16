import React from 'react'
import NavBar from '../Components/Comman-Cmpts/NavBar'
import Swipper from '../Components/Home/Swipper'
import Section from '../Components/Home/Section'
import NewArrivals from '../Components/Home/NewArrivals'
import Offers from '../Components/Home/Offers'
import OurBrands from '../Components/Home/OurBrands'
import Blog from '../Components/Home/Blog'
import Footer from '../Components/Comman-Cmpts/Footer'

function Home() {
  return (
   <>
   
   <NavBar/>
   <Swipper/>
   <Section/>
   <NewArrivals/>
   <Offers/>
   <OurBrands/>
   <Blog/>
   <Footer/>
   </>
  )
}

export default Home