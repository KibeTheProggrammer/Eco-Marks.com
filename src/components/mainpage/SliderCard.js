import React from 'react'
import Sdata from './Sdate'
import { Link } from 'react-router-dom'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const SliderCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    };



    return (
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {

                    return (
                        <div>
                         <div className="box sliderCard" key={index}>
                             <div className="left">
                                 <h1>{value.title}</h1>
                                 <p>{value.desc}</p>
                                 <button className='btn-primary'><Link to="/all-products">Visit Collection</Link>
                                 </button>
                             </div>
                             <div className="right">
                                 <img src={value.cover} alt="" />
                             </div>
                         </div>

                         {/* <div className="box sliderCard secondDesign" key={index}>
                            <div className="left">
                                <h1>{value.title}</h1>
                                <p>{value.desc}</p>
                                <img src={value.cover} alt="" />

                                <button className='btn-primary'><Link to="/all-products">Visit Collection</Link>
                                </button>
                            </div>
                            
                        </div> */}
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default SliderCard
