import React from 'react'
import logo from "../../components/assets/images/logo.png"
import { Link } from 'react-router-dom'

const Search = ({ cartItem }) => {


  // This code is for like skicky search bar

  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })

  // const [searchKey , setsearchKet]


  // button.onclick = function click() {
  //   console.log('Button clicked');
  // };

  // const searchFun = () => {
  //     document.querySelector('#search-form').classList.add('active');
  // } 

  // document.querySelector('#search-logo').onclick = () =>{
  //   document.querySelector('#search-form').classList.toggle('active');
  // }

  // document.querySelector('#search-logo').onclick = () =>{
  //   document.querySelector('#search-form').classList.remove('active');
  // }



  return (
    <>
      <section id='SearchNav' className='search'>

        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Search and hit enter...' />
            <span>Search</span>
          </div>

          <div className="icon f_flex width">
            <div className="cart Search-icon">
              <Link to="/">
                <i className="fa-solid fa-magnifying-glass icon-circle" id='search-logo' ></i>
              </Link>
            </div>
            <div className="cart">
              <Link to="/">
                <i className="fa-solid fa-user icon-circle"></i>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
              </Link>
            </div>

          </div>
        </div>

        {/* search form  */}



        <div id='last-div'></div>
      </section>
    </>
  )
}

export default Search
