import React from 'react'
import { Images } from '../../assets/asset'

function Offers() {
  return (
   <>
  <section id='offers' className='container-fluid mb-5'>
  <div className="container">
  <div className="row">
    <div className="col-lg-6 col-12">
      <div className="card h-100 mt-3" id='offerCard'>
        <img src={Images.OfferImg1} alt="" />
        <div id='offersContent'>
          <h5>SALE OFF UP TO </h5>
          <h1 className='percent'>50%</h1>
          <a href="" className='btn' id='offerbtn1'>SHOP NOW</a>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-12">
    <div className="card h-100 mt-3" id='offerCard2'>
      <img src={Images.OfferImg2} alt="" />
      <div className="offersContent2">
        <h5>NEWTRENDING</h5>
        <h2>A Floral <br />Fantasy <br />Wardrobe</h2>
         <a href="" className='btn' id='offerbtn2'>SHOP NOW</a>
      </div>
    </div>
    </div>
  </div>
    </div>
  </section>
   </>
  )
}

export default Offers