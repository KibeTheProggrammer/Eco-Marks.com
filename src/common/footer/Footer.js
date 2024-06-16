import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../components/assets/images/logo.png"

import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footerBox">
                    <div className="box">
                        <img src={logo} alt="" />
                        <p>EcoMarkets is a platfrom there you can shop products in good rate also we have &nbsp;
                            <a href="#" target="_blank" rel="noreferrer">
                                Instagram page Click to Visit :)</a> </p>
                        <div className="icon d_flex">
                            <a className='store-btn' href="#" target="_blank" rel="noreferrer">
                                <i className='fa-brands fa-instagram'></i>
                                <span>Instagram</span>
                            </a>

                            <a className='store-btn' href="#" target="_blank" rel="noreferrer">
                                <i className='fa-brands fa-github'></i>
                                <span>Whatsapp</span>
                            </a>


                        </div>
                    </div>

                    <div className="box">
                        <h2>Social Media</h2>
                        <ul>
                            
                            <li>
                                <a href="#" target="_blank" rel="noreferrer">Whats <i className="fa-brands fa-github"></i> app</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noreferrer">Face <i className="fa-brands fa-github"></i> book</a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noreferrer">Insta <i className="fa-brands fa-github"></i> gram</a>
                            </li>
                            
                            <li>
                                <a href="" target="_blank" rel="noreferrer">Tele <i className="fa-brands fa-telegram"></i> gram</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/brian-cheruiyot-2811bb282/" target="_blank" rel="noreferrer">Linke <i className="fa-brands fa-linkedin"></i> din</a>
                            </li>

                        </ul>
                    </div>

                    <div className="box">
                        <h2>Pages</h2>
                        <ul>
                            <li>
                                <Link to="/men">Men</Link>
                            </li>
                            <li>
                                <Link to="/women">Women</Link>
                            </li>
                            <li>
                                <Link to="/kids"> Kids</Link>
                            </li>
                            <li>
                                <Link to="/all-products">All Products</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>


                        </ul>
                    </div>

                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            
                            <li>
                                <a href="mailto: briancheruiyot776@gmail.com" target="_blank" rel="noreferrer">Gmail: briancheruiyot776.com</a>
                            </li>
                            <li>
                                <a href="tel:+254716112625" target="_blank" rel="noreferrer">Call - +254716112625</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p> &#169; Copyright 2024 <span> <Link to="/contact">Cheap_Deal</Link> </span>. All rights reserved. </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
