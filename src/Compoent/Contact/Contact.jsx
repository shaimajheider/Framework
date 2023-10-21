import React, { useEffect } from 'react'
import '../Contact/Contact.css'

export default function Contact() {
  

  useEffect(()=>{
    document.title='Contact'
   },[])
  
  function showLabels(e) {
    let input = e.target
    let label = (e.target).previousSibling.classList
    label.remove("top")
    if (input.value === "") {
        label.add("top")
    }
}
  return (
    <>
            <div className="mb-5">
                <div className="container pt-5">
                <div className="star">
              <div className="text-center pt-5 mt-5">
                     <h2 className='mb-2 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='line ms-3'>____________</div>
                            <i class="fa-solid fa-star fa-xl"></i>
                            <div className='line'>____________</div>
                            </div>
                        </div>
                          </div>
                    <form className=' w-50 p-3 mx-auto mt-5'>
                        <label htmlFor="userName" className='1 position-relative top-0 top mt-2'>userName :</label>
                        <input onInput={showLabels} type="text" id='userName' placeholder='userName' name='userName' className=' form-control border-0 border-bottom py-3 position-relative' />
                        <label htmlFor="userAge" className='2 position-relative top-0 top mt-2'>userAge :</label>
                        <input onInput={showLabels} type="text" id='userAge' placeholder='userAge' name='userAge' className=' form-control border-0 border-bottom py-3 position-relative' />
                        <label htmlFor="userEmail" className='4 position-relative top-0 top mt-2'>userEmail :</label>
                        <input onInput={showLabels} type="email" id='userEmail' placeholder='userEmail' name='userEmail' className=' form-control border-0 border-bottom py-3 position-relative' />
                        <label htmlFor="userPassword" className='3 position-relative top-0 top mt-2'>userPassword :</label>
                        <input onInput={showLabels} type="password" id='userPassword' placeholder='userPassword' name='userPassword' className=' form-control border-0 border-bottom py-3 position-relative' />
                        <button className='btn mt-4 text-white'>Send Message</button>
                    </form>
                </div>
            </div>
        </>
  )
}
