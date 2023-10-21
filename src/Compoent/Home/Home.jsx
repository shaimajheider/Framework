import React, { useEffect } from 'react'
import '../Home/Home.css'
import Protfoile from '../Assets/Images/Portofile.jpeg'

export default function Home() {
  useEffect(()=>{
    document.title='Home'
  },[])
  return (
    <>
    <div className="home d-flex justify-content-center align-items-center text-white ">
    <div className='text-center'>
        <img src={Protfoile} alt='' className='mb-3' />
        
   
    <div className="star">
        <div className='text-center pt-5 text-white'>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className='line ms-3'>____________</div>
            <i class="fa-solid fa-star fa-xl"></i>
            <div className='line'>_____________</div>
                {/* <div className='line ms-3 bg-white'></div> */}
            </div>
        </div>
    </div>
    <div className='pb-3'>
        Graphic Artist - Web Designer - Illustrator
        </div>
 </div>
</div>
</>
  )
}
