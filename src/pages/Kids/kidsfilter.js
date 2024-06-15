import React from 'react'

const kidsfilter = ({ filterCart }) => {
    const menfilterData = [
        {
            filterImg: "./images/filter/kidsfilter/toys.png",
            filterName: "Toys",
            filterCate:"toys"
        },
        {
            filterImg: "./images/filter/kidsfilter/dress.png",
            filterName: "Dress",
            filterCate:"dress"
        },
        {
            filterImg: "./images/filter/kidsfilter/baby-care.png",
            filterName: "Baby care",
            filterCate:"baby-care"
        },
        {
            filterImg: "./images/filter/kidsfilter/backpack.png",
            filterName: "Bags",
            filterCate:"bags"

        },
        {
            filterImg: "./images/filter/kidsfilter/baby-shoe.png",
            filterName: "Baby shoe",
            filterCate:"shoe"

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

export default kidsfilter
