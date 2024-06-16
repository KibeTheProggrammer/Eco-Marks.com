import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_header">
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-content">
          <div className="pic_Area">
            <div className="back_Img">
              <img src="./images/my-pic.jpeg" alt="" />
              <div className='backgroud-shadow'>im backgroud</div>
              <div className="info">

                {/* Child one head info */}

                <div className="top_head_info">
                  <h2>Contact Information</h2>
                  <p>Fill up the form and our Team will get back to you within 24 horus.</p>

                </div>


                {/* child 2nd contact details */}
                <div className="contact-info">

                  <a href="tel:+254 716112625" target="_blank" rel="noreferrer">

                    <div className="ChaildOfCon_info">
                      <i class="fa-solid fa-phone"></i>
                      <p>+254 716112625</p>
                    </div>
                  </a>

                  <a href="mailto: briancheruiyot776@gmail.com" target="_blank" rel="noreferrer">

                    <div className="ChaildOfCon_info">
                      <i class="fa-solid fa-envelope"></i>
                      <p>briancheruiyot776@gmail.com</p>
                    </div>
                  </a>

                  <a href="" target="_blank" rel="noreferrer">

                    <div className="ChaildOfCon_info">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>Kenya, (C. G.)</p>
                    </div>
                  </a>

                </div>

                {/* child 3rd social links */}

                <div className="social_links">


                  <a href="" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>

                  <a href="/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank" rel='noreferrer'>
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="" target="_blank" rel='noreferrer'>
                    <i class="fa-brands fa-instagram"></i>
                  </a>

                </div>

              </div>
            </div>

          </div>

          {/* form area start there */}
          <div className="form_Area">

            <form >
              <div className="row">
                <div className="fullName input_Div">
                  <label for="fname">Full Name</label>
                  <input type="text" name="fname" placeholder='Enter Full Name' />
                </div>

                <div className="email input_Div">
                  <label for="lname">Email</label>
                  <input type="email" name="lname" placeholder='Enter Your Email' />
                </div>

              </div>

              <div className="row">

                <div className="phoneNo input_Div">
                  <label for="number">Number</label>
                  <input type="number" name="fname" placeholder='Enter Mobile No.' />
                </div>

                <div className="Subject input_Div">
                  <label for="lname">Subject</label>
                  <input type="text" name="lname" placeholder='Enter Queries Subject' />
                </div>

              </div>

              <div className="row big_Input_Div">
                <label for="lname">Message</label>
                <input type="text" name="lname" placeholder='Write your message' />
              </div>


              <input type="submit" className='submit_Bth' value="Send Message" />


            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
