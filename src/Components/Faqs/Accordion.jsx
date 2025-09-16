import React from 'react'

function Accordion() {
  return (
    <>
    <section className='container-fluid mt-5'>
    <div className="container">
    <div className="text-center">
        <h1>FAQ'S</h1>
        <p><span>Home</span> / Faqs</p>
    </div>
    <div className="row">
    
    <div className="col-lg-6 col-12 mt-3">
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">
       <h5><b>What is Your Return Policy?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      <p>We offer a hassle-free return policy. If you’re not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions.</p>
      </div>
    </div>
    </div>
    </div>
    </div>

    <div className="col-lg-6 col-12 mt-3">
        <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" >
    <h5><b>Do you offer gift wrapping services?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
       Yes, we offer gift wrapping services for a small additional fee. You can select this option during the checkout process.
      </div>
    </div>
  </div>
    </div>
    
    <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" >
    <h5><b>How do I track my order?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
       Tracking your order is easy! Once your order is shipped, we’ll send you a confirmation email with a tracking number. You can use this number to track your order’s status on our Order Tracking page.
      </div>
    </div>
  </div>
    </div>
    
    <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" >
    <h5><b>How do I care for my garments?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
      <div class="accordion-body">
       Care instructions can usually be found on the product’s care label or on the product page itself. We recommend following the provided guidelines to ensure the longevity and quality of your items.
      </div>
    </div>
  </div>
    </div>
    
    <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" >
    <h5><b>What payment methods do you accept?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
      <div class="accordion-body">
       We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure and convenient payments.
      </div>
    </div>
  </div>
    </div>
    
    <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingsix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix" >
    <h5><b>Do you offer online ordering and shipping?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapsesix" class="accordion-collapse collapse">
      <div class="accordion-body">
     Yes, we offer online ordering with shipping options available. Contact us for more information.
      </div>
    </div>
  </div>
    </div>
    
     <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingseven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseseven" >
    <h5><b>Do you offer international shipping?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseseven" class="accordion-collapse collapse">
      <div class="accordion-body">
    Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please refer to our Shipping Information page for more details.
      </div>
    </div>
  </div>
    </div>
    
     <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingeight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseeight" >
    <h5><b>Can I sign up for exclusive offers and updates?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseeight" class="accordion-collapse collapse">
      <div class="accordion-body">
  Absolutely! Join our newsletter to receive exclusive offers, promotions, and updates on the latest fashion trends. You can sign up at the bottom of our homepage.
      </div>
    </div>
  </div>
    </div>
    
    <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingnine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsenine" >
    <h5><b>How can I contact your customer support?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapsenine" class="accordion-collapse collapse">
      <div class="accordion-body">
  You can reach our friendly customer support team through our Contact Us page, where you’ll find a contact form and our email address. We’re here to assist you with any questions or concerns you may have.
      </div>
    </div>
  </div>
    </div>
    
    <div className="col-lg-6 col-12 mt-3">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingten">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseten" >
    <h5><b>How do I create an account?</b></h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseten" class="accordion-collapse collapse">
      <div class="accordion-body">
  Creating an account is easy! Simply click on the “Sign Up” link at the top of the page and follow the prompts to enter your information. You’ll then have access to order history, wishlists, and faster checkout.
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

export default Accordion