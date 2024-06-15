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

                  <a href="tel:+918871960800" target="_blank" rel="noreferrer">

                    <div className="ChaildOfCon_info">
                      <i class="fa-solid fa-phone"></i>
                      <p>+91 8871960800</p>
                    </div>
                  </a>

                  <a href="mailto: anandsa271@gmail.com" target="_blank" rel="noreferrer">

                    <div className="ChaildOfCon_info">
                      <i class="fa-solid fa-envelope"></i>
                      <p>anandsa271@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://www.google.co.in/maps/place/Kirodimalnagar,+Chhattisgarh+496005/@21.9270188,83.3240829,15z/data=!3m1!4b1!4m5!3m4!1s0x3a273ca13545b875:0x8070b8be8a62ccb6!8m2!3d21.9269995!4d83.3328377" target="_blank" rel="noreferrer">

                    <div className="ChaildOfCon_info">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>Raigarh, (C. G.)</p>
                    </div>
                  </a>

                </div>

                {/* child 3rd social links */}

                <div className="social_links">


                  <a href="https://api.whatsapp.com/send/?phone=%2B918871960800&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/santosh-kumar-anand-96b670231/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Anand271" target="_blank" rel='noreferrer'>
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="https://instagram.com/anand_d.e.o?igshid=YmMyMTA2M2Y=" target="_blank" rel='noreferrer'>
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
