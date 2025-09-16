import React from 'react'
import NavBar from '../Components/Comman-Cmpts/NavBar'
import { Datas, Images } from '../assets/asset'
import { useParams } from 'react-router-dom'

function Product1() {
    const {id}=useParams()
    let seperate=Datas.find((v,i)=>{
        return(
            v.id===Number(id)
        )
    })
  return (
   <>
   <NavBar/>
   <section id='Product1' className='container-fluid mt-5'>
    <div className="container">
    <div className="path d-flex gap-1">
        <p>Home/</p>
        <p>Shop/</p>
        <p style={{color:'grey'}}>Dime Classic Small Logo Sweatpants, black</p>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <div className="card">
                <img src={seperate.img} alt="" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card" id='Prouct1Crt'>
            <div className="card-body">
            <h1>{seperate.description}z</h1>
            <h3 style={{color:'grey'}}>${seperate.price}</h3>
            <hr />
           
            </div>
            </div>
        </div>
    </div>
    </div>
   </section>
   
   
   
   </>
  )
}

export default Product1