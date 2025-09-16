import React from 'react'
import {Datas} from '../../assets/asset'
import { useNavigate } from 'react-router-dom'
function NewArrivals() {
  const navi=useNavigate()
  return (
    
   <>
   <section id='newArrivals' className='container-fluid'>
    <div className="container">
      <h3 className='text-center'id='arrivalsh3'>You Are In New <span className='arrivals'>Arrivals</span></h3>
      <div className="row">
        {
          Datas.filter((values,index)=>{
            return(
              values.category==="newarrivals"
            )
          }).map((v,i)=>{
            return(
             <div className="col-lg-3 col-12 mt-5" key={i}>
            <div className="card h-100" id='ArrivalsCard'onClick={()=>navi(`/product1/${v.id}`)}>
              <img src={v.img} alt="" id='arrivalimg7' />
              <div className="card-body" id='newarrivalscardbody'>
                <h6>{v.title}</h6>
                <h5>{v.description}</h5>
                <h6 className=''>${v.price}</h6>
                <div id='arrivalsIcons'>
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

export default NewArrivals