import React from 'react'


const menFilter = ({ filterCart }) => {



    const menfilterData = [
        {
            filterImg: "./images/filter/menfilter/t-shirt.png",
            filterName: "T-shirt",
            filterCate:"t-shirt"
        },
        {
            filterImg: "./images/filter/menfilter/shirt.png",
            filterName: "Shirt",
            filterCate:"shirt"
        },
        {
            filterImg: "./images/filter/menfilter/jeans.png",
            filterName: "Jeans",
            filterCate:"jeans"
        },
        {
            filterImg: "./images/filter/menfilter/kurta.png",
            filterName: "Kurta",
            filterCate:"kurta"
        },
        {
            filterImg: "./images/filter/menfilter/hoodies.png",
            filterName: "Hoodies",
            filterCate:"hoodies"
        },
        {
            filterImg: "./images/filter/menfilter/shoes.png",
            filterName: "Shoes",
            filterCate:"shoes"
        },
        {
            filterImg: "./images/filter/menfilter/watch.png",
            filterName: "Watch",
            filterCate:"watch"
        },
        {
            filterImg: "./images/filter/menfilter/sunglasses.png",
            filterName: "Sunglass",
            filterCate:"sunglass"
        },
        {
            filterImg: "./images/filter/menfilter/wallet.png",
            filterName: "Wallet",
            filterCate:"wallet"
        },
    ];

    return (

        <>

            <div >
                <div className='filter'>
                    <div className="filterHeading">
                        <h4>Filter</h4>
                        
                    </div>
                    <div className='filterItem'>


                        {
                            menfilterData.map((value, index) => {
                                return (


                                    <div className="items"  key={index} onClick={() => filterCart(value.filterCate)}>
                                        <img src={value.filterImg} alt="" />
                                        <p>{value.filterName}</p>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>


        </>


    )




}

export default menFilter
