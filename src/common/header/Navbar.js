import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import homelogo from './Navlogos/home.png'
import menlogo from './Navlogos/man.png'
import womenlogo from './Navlogos/woman.png'
import kidlogo from './Navlogos/little-kid.png'
import productlogo from './Navlogos/distributed.png'
import contactlogo from './Navlogos/email.png'

// Resct toast liberay import component and css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Navbar = () => {

   // code for Add to Cart Alert

   const tryFilterNotifier = () => {
    toast.info('Use Filter to Find', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   }

  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header className='header'>
        <div className="container">
          {/* <div className="categories d_flex">
               <span className='fa-solid fa-border-all'></span>
               <h4>Categories <i className='fa fa-chevron-down' ></i></h4>
             </div> */}
          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitialize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/"  > Home</Link>
              </li>
              <li>
                <Link to="/" > <img src={homelogo} alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/men" onClick={tryFilterNotifier}>  Mans</Link>
              </li>
              <li>
                <Link to="/men" onClick={tryFilterNotifier}> <img src={menlogo} alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/women" onClick={tryFilterNotifier} > Woman</Link>
              </li>
              <li>
                <Link to="/women" onClick={tryFilterNotifier}> <img src={womenlogo} alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/kids" onClick={tryFilterNotifier}>Kids</Link>
              </li>
              <li>
                <Link to="/kids" onClick={tryFilterNotifier}> <img src={kidlogo} alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/all-products">All Products</Link>
              </li>
              <li>
                <Link to="/all-products"> <img src={productlogo} alt="homelogo" /></Link>
              </li>
              <li>
                <Link to="/contact"> Contact Us</Link>
              </li>
              <li>
                <Link to="/contact"> <img src={contactlogo} alt="homelogo" /></Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu ? < i className='fas fa-times close home-bth'></i> : <i className="fa-solid fa-bars open"></i>
              }
            </button>
          </div>
        </div>

      </header>
      <ToastContainer />

    </>
  )
}

export default Navbar

