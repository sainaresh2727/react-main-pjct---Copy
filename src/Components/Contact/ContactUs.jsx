import React from 'react'

function ContactUs() {
  return (
   <>
   
   <section className='container-fluid mt-5 h-100' id='ContactHead'>
    <div className="container">
      <div className='text-center'>
        <h1>Contact Us</h1>
        <p><span>Home/</span> Contactus</p>
      </div>
      <div className="row">
      <div className="col-lg-3 h-100">
        <div className="card h-100 b-none">
          <div className="card-body">
            <div id='ContactIcons'>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div id="adress" className='text-center mt-3'>
              <h4>Store Address</h4>
              <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 h-100">
        <div className="card h-100 b-none">
          <div className="card-body">
            <div id='ContactIcons'>
              <i class="fa-solid fa-phone-volume"></i>
            </div>
            <div id="adress" className='text-center mt-3'>
              <h4>Call-Info</h4>
              <p>Open a chat or give us call at 7598092377</p>
              
            </div>
          </div>
        </div>
      </div>

    <div className="col-lg-3 h-100">
        <div className="card h-100 ">
          <div className="card-body">
            <div id='ContactIcons'>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div id="adress" className='text-center mt-3'>
              <h4>Email-Support</h4>
              <p>Sent mail tosupport@mixtas.com</p>
             </div>
          </div>
        </div>
      </div>

     <div className="col-lg-3 h-100">
        <div className="card h-100" id='Ccart'>
          <div className="card-body">
            <div id='ContactIcons'>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div id="adress" className='text-center mt-3'>
              <h4>Live-Support</h4>
              <p>Live chat service https://www.livechat.com</p>
              
             </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   </section>
   
   </>
  )
}

export default ContactUs