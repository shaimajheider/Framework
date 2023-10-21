import React, { useEffect } from 'react'
import '../About/About.css'

export default function About() {
    useEffect(()=>{
        document.title='About'
    },[])
  return (
    <>
    <div className="about d-flex justify-content-center align-items-center">
    <div>
        <div className="star">
            <div className='pt-5 text-center text-white'>
                <h2 className='mb-5 fs-1 fw-bolder'>ABOUT COMPONENT</h2>
                <div className='d-flex align-items-center justify-content-center mb-3'>
                   <div className='line fs-1 mb-5 text-white'>_____________</div>
                    <i className="fa-solid fa-star fa-xl text-white"></i>
                    <div className='line fs-1 mb-5 text-white '>_____________</div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row px-5">
                <div className="col-md-6 ">
                    <p className='fw-bold fs-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete
                        source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                        easy customization.</p>
                </div>
                <div className="col-md-6 ">
                    <p className='fw-bold fs-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete
                        source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                        easy customization.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}
