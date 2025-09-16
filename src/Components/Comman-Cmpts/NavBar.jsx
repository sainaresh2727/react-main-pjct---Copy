import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Datas, Images } from '../../assets/asset';

function NavBar() {
  let [input,setInput]=useState('')
  function Fun(e){
    setInput(e.target.value)
  }
  let inputLower=input.toLowerCase()
  let filterPdts=Datas.filter((values,index)=>{
      return values.description.toLowerCase().includes(inputLower)
  })
  
  return (
    <>
    <section id='Navbar' className='container-fluid'>
    <nav className='navbar navbar-expand-lg'>
    <div className="container d-flex justify-content-between align-items-center">

    {/* TogglerBtn and Brand */}
    <div className='d-flex align-items-center gap-3'>
    <button className='navbar-toggler d-lg-none' type='button' data-bs-toggle='offcanvas' data-bs-target='#Offcanvas'>
    <span className='navbar-toggler-icon' id='NavBarBtn'></span>
    </button>  
    <a href=""><img src={Images.Logo} alt="" height={'30px'}  id='Logo' className='nav-brand'/ ></a>
    </div>
    
    {/* NAVLINKS -LG KU MATHUM VISIBILE AGUM OFFCANVASS  */}
    <div className='d-none d-lg-block' id='NavLink'>
    <ul className='navbar-nav flex-row gap-3'>
    <li className='nav-item'>
    <Link className='nav-link' to={'/'}>HOME</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to={'/shop'}>SHOP</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to={'/faqs'}>FAQ'S</Link>
    </li>
    <li className='nav-item'>
    <Link to={'/contact'} className='nav-link'>CONTACT US</Link>
    </li>
    
    </ul>
    </div>

    {/* ICONS */}
    <div className='d-flex gap-3' id='Icons'>
     <i class="fa-regular fa-user"></i>
     <i class="fa-solid fa-magnifying-glass" data-bs-toggle='offcanvas' data-bs-target='#offcanvas'></i>
     <i class="fa-regular fa-heart"></i>
     <i class="fa-solid fa-bag-shopping"></i>
    </div>
    </div>
    </nav>
    </section>

    {/* {/* OFFCANVAS * FOR SIDENAVBAR/} */}
    <div class="offcanvas offcanvas-start" tabindex="-1" id="Offcanvas">
  <div class="offcanvas-header">
    <h1></h1>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <ul className='navbar-nav'>
    <li className='nav-item'>
      <a href="" className='nav-link'>HOME</a>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to={'/shop'}>SHOP</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to={'/faqs'}>FAQ'S</Link>
    </li>
    <li className='nav-item'>
      <a href="" className='nav-link'>CONTACT-US</a>
    </li>
   
    </ul>
  </div>
</div>

  
        <div class="offcanvas offcanvas-top h-100"  id="offcanvas" >
       <div class="offcanvas-header">
        <input type="text" name="" id="" className='form-control' placeholder='Search Items Here' onChange={Fun} />
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    <div className="container">
      <div className="row">
       {
        input.length===0
        ? 
        ''
        :
         filterPdts.map((v,i)=>{
          return(
            <div className="col-lg-3 col-6" key={i}>
              <div className="card">
                <img src={v.img} alt="" />
                <div className="card-body">
                  <p>{v.title}</p>
                  <h5>{v.description}</h5>
                  <p>{v.price}</p>
                </div>
              </div>
            </div>
          )
        })
       }
      </div>
    </div>
  </div>
</div>
      
    </>
  );
}

export default NavBar;
