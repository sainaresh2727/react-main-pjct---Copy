import React from 'react'
import { Datas } from '../../assets/asset'

function ShopComp1() {
  return (
   <>
   <section id='ShopHead' className='container-fluid mt-5'>
    <div className="container">
        <div className='text-center'>
            <h1>SHOP</h1>
            <p><span>Home</span> / Shop</p>
        </div>
    </div>
   </section>
   

   <section id='ShopMain' className='container-fluid'>
    <div className="container d-flex justify-content-between align-items-center">
        <div className='Show'>
            <p>Showing 1-12 Of 42 Results</p>
        </div>
        <div className='d-flex gap-5'>
            <div className='d-flex gap-3' id='Show'>
                <p>Show</p>
                <p>12</p>
                <p>15</p>
                <p>30</p>
            </div>
            <div>
                <select name="" id="Select">
                <option value="">Default Sorting</option>
                <option value="">Sort by Popularity</option>
                <option value="">Sort By Average Rating</option>
                <option value="">Sort By Latest</option>
                </select>
            </div>
        </div>
    </div>
   </section>
   
   
   <section className='container-fluid mt-5' id='ShopProducts'>
    <div className="container">
    <div className="row">
    {
        Datas.filter((values,index)=>{
            return(
                values.category==="shop"
            )
        }).map((v,i)=>{
            return(
        <div className="col-lg-4 mt-5 col-12" key={i}>
         <div className="card h-100" id='ShopCart'>
         <img src={v.img} alt="" />
         <div className="card-body">
            <p>{v.title}</p>
            <h5>{v.description}</h5>
            <p>{v.price}</p>
             <div id='ShopsIcons'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-clipboard"></i>
            </div>
         </div>
         </div>
        </div>
            )
        })
    }
        </div>
    </div>
   </section>
  
   </>
  )
}

export default ShopComp1