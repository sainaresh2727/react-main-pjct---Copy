import React from 'react'
import { Images } from '../../assets/asset'

function Section() {
  return (
  <>
  <section id='section' className='container-fluid'>
    <div className="container">
      <div className="row d-flex align-items-stretch">
      <div className="col-lg-4 col-12 h-100">
        <div className="card" id='sectioncard'>
          <img src={Images.SectionImg1} alt="" id='sectionimg'/>
          <a href="" className='btn' id='sectionbtn'>Shop Now</a>
        </div>
      </div>
      <div className="col-lg-8 col-12 h-100">
      <div className="card" id='sectioncard2'>
        <img src={Images.SectionImg2} alt="" id='sectionimg2' />
         <div className='Section1Content'>
          <h5>URBAN MUSE</h5>
          <h2>Classic Beauties <br />For Modern <br />Women</h2>
          <a href="" className='btn' id='sectionbtn2'>SHOP NOW</a>
        </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  
  </>
  )
}

export default Section