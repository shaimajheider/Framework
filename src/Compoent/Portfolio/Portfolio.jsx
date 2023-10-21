import React, { useEffect } from 'react'
import Home from '../Assets/Images/port1.png'
import Cake from '../Assets/Images/port2.png'
import Circus from '../Assets/Images/port3.png'

import '../Portfolio/Portfolio.css'

export default function Portfolio() {
    useEffect(()=>{
   document.title='Portfolio'
  },[])

  return (
    <>
  <div className=" mb-5">
      <div className=" pt-5">
         <div className="star">
              <div className="text-center pt-5 mt-5">
                     <h2 className='mb-2 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='line ms-3'>____________</div>
                            <i class="fa-solid fa-star fa-xl"></i>
                            <div className='line'>_____________</div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6">
                                <div  className=" image-container position-relative rounded-3 overflow-hidden">
                                    <img  className=" w-100 rounded-3" src={Home}  alt="" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " >
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-6">
                                <div  className="image-container position-relative rounded-3 overflow-hidden">
                                <img  className=" w-100 rounded-3" src={Cake}  alt="" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                <img  className=" w-100 rounded-3" src={Circus}  alt="" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                <img  className=" w-100 rounded-3" src={Home}  alt="" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                <img  className=" w-100 rounded-3" src={Cake}  alt="" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                            <div  className="col-lg-4 col-md-6">
                                <div className="image-container position-relative rounded-3 overflow-hidden">
                                <img  className=" w-100 rounded-3" src={Circus}  alt="" />
                                    <div  className="overlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                        <div className="bg-overlay position-fixed start-0 w-100 h-100 top-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
                        <img src="" className="rounded-3" onclick="bringToFront(this)"/>
                    </div>
                    </div>
                </div>
            </div>
            
        </>
  )
}
