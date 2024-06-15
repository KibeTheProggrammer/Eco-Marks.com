import React from 'react'
import './Header.css';

const Head = () => {
  return (
    <>
      <section className='head' id='headId'>
        <div className="container f_flex">
          <div className="left row">

            <a href="https://api.whatsapp.com/send/?phone=%2B918871960800&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-whatsapp"></i>
              <label>+91 8871960800</label>
            </a>
          
           <a href = "mailto: anandsa271@gmail.com" target="_blank" rel="noreferrer" >
           <i className='fa fa-envelope'></i>
              <label>anandsa271@gmail.com</label>
           </a>

           
           


          </div>
          <div className="right row RText">

        
          <a href="https://instagram.com/cheap_deal2021?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" >
          <label> Instagram  </label>
          <i className="fa-brands fa-instagram"></i>
          </a>

              <label> Theme  </label>
              <i className="fa-solid fa-circle-half-stroke"></i>
            
            <span>₹</span>
            <label >INR</label>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
