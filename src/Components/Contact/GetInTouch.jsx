import React from 'react'

function GetInTouch() {
  return (
   <>
   <section id='GetInTouch' className='container-fluid mt-5 mb-5'>
    <div className="container">
    <h1>GET IN TOUCH</h1>
    <div className="row">
    <div className="col-lg-6 col-12">
    <form action="">
       <div className='MainIn'>
            <label for='name'>Your Name</label> <br />
            <input type="text"  id='name' className=' Input'/>
       </div>
        
        <div className='MainIn'>
         <label for='email'>Your Email</label> <br />
         <input type="email" name="" id="email" className='Input' />
       </div>

        <div className='MainIn'>
         <label for='text'>Subject</label> <br />
         <input type="text" name="" id="text" className='Input' />
       </div>
       <div className="MainIn">
        <button id='btnContact'>Send Me</button>
       </div>
     </form>
    </div>
    <div className="col-lg-6">
   <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.54966675706!2d-122.73295737720754!3d37.75760298458377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1751368336108!5m2!1sen!2sin"
  width="100%"                     
  height="450"
  style={{ border: 0 }}            
  allowFullScreen=""               
               
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map"
></iframe>

    </div>
    </div>
    </div>
   </section>
   
   
   </>
  )
}

export default GetInTouch