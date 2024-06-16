import React from 'react'

// Resct toast liberay import component and css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const KidsProducts = ({ allproduct, addToCart, kProductData }) => {

     // code for Add to Cart Alert

     const addToCartSuccessAlert = () => toast.warn("Something Worng! Try in All Products");

    // const RandomKProData = kProductData[Math.ceil(Math.random()*kProductData.length)];
    const RandomKProData = kProductData;


    return (
        <div className='productContainer'>
            {
                RandomKProData.map((kidProduct) => {
                    const { img, name, price, discount } = kidProduct;

                    return (

                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                    <span className='discount'>{discount}% Off</span>
                                    <img src={img} alt="" />
                                    <div className="product-like">
                                        <label >0</label> <br />
                                        <i className='fa-regular fa-heart' ></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>

                                    </div>
                                    <div className="price">
                                        <h4>{price} $</h4>
                                        <button onClick={() => addToCart(allproduct)} >
                                                <span onClick={addToCartSuccessAlert} >Add to cart <i class="fa-solid fa-bag-shopping"></i> </span>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )

                })
            }

       <ToastContainer />

        </div>
    )
}

export default KidsProducts
