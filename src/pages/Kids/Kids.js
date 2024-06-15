import React from 'react'
import { useState } from 'react'
import Kidsfilter from './kidsfilter'
import KidsProducts from './KidsProducts'
import KidProductData from './kidsProductsData'


const Kids = ({ allproduct , addToCart }) => {

  //  This code for shorting product data array in random form

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = [...KidProductData ];
  shuffle(arr);
  

  

  // code of filter the cart products



  const[kProductData, setKProductData] = useState(arr);

  const filterCart = (cateItem) =>{ 
    const updatedItems = KidProductData.filter((curElem) => {
      return curElem.categary === cateItem;
    });

    setKProductData(updatedItems);
}


  return (
    <div className='main-container '>
      <Kidsfilter filterCart={filterCart} />
      <KidsProducts allproduct={allproduct} addToCart={addToCart} kProductData={kProductData}/> 

   

    </div>
  )
}

export default Kids
