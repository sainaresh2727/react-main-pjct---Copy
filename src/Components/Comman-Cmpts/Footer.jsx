import React from 'react'
import { Images } from '../../assets/asset'

function Footer() {
  return (
   <>
   <section id='Footer' className='container-fluid'>
    <div className="container" id='Fcontent'>
    <div className="row">
        <div className="col-lg-3 col-6 mt-5">
        <h1>MIXTAS</h1>
        <p>Whether You're a trendsetter a minimalist, or an adventurer at heat,Mixtas has Something for everyone. Our diverse range of styles caters to various person</p>
        <div id='FooterIcone'>

        </div>
    </div>
    <div className="col-lg-2 col-6 mt-5">
        <h4>About Us</h4>
        <p>Our Story</p>
        <p>Mission & Values</p>
        <p>Meet The Team</p>
        <p>Sustainabilty Efforts</p>
        <p>Brand Partnership</p>
        <p>Influencer Colloboration</p>
    </div>
    <div className="col-lg-2 col-6 mt-5">
        <h4>Accessability</h4>
        <p>Accessibilty Statement</p>
        <p>Site Map</p>
        <p>Web Accessability Options</p>
        <p>ADA Complaince</p>
        <p>Privacy Policy</p>
        <p>Terms & Services</p>
    </div>
    <div className="col-lg-2 col-6 mt-5">
        <h4>Join Our Community</h4>
        <p>VIP Membership</p>
        <p>Loyality Program</p>
        <p>Customer's Reviews</p>
        <p>Style Forums</p>
        <p>Job Openings</p>
        <p>Culture and Values</p>
    </div>
    <div className="col-lg-3 col-12 mt-5">
        <h4> Let's Get In Touch</h4>
        <p>Sign Up For Our NewsSteller Receive 10% off Your</p>
        <input type="email" placeholder='Enter Your Email' id='FooterEmail' />
    </div>
    </div>
    </div>
   </section>

    </>
  )
}

export default Footer