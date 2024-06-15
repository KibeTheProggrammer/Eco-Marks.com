import React from 'react'

const womenfilter = ({filterCart }) => {


    const menfilterData = [
        {
            filterImg: "./images/filter/womenfilter/tshirt.png",
            filterName: "T-shirt",
            filterCate:"t-shirt"
        },
        {
            filterImg: "./images/filter/womenfilter/top.png",
            filterName: "Top",
            filterCate:"top"
        },
        {
            filterImg: "./images/filter/womenfilter/dress.png",
            filterName: "Dress",
            filterCate:"dress"
        },
        {
            filterImg: "./images/filter/womenfilter/lahenga.png",
            filterName: "Lahenga",
            filterCate:"lahenga"
        },
        {
            filterImg: "./images/filter/womenfilter/jeans.png",
            filterName: "Jeans",
            filterCate:"jeans"
        },
        {
            filterImg: "./images/filter/womenfilter/shorts.png",
            filterName: "Shorts",
            filterCate:"shorts"
        },
        {
            filterImg: "./images/filter/womenfilter/jewellery.png",
            filterName: "Jewellery",
            filterCate:"jewellery"
        },
        {
            filterImg: "./images/filter/womenfilter/handbag.png",
            filterName: "Handbag",
            filterCate:"handbag"
        },
        {
            filterImg: "./images/filter/womenfilter/high-heel.png",
            filterName: "Heels",
            filterCate:"heels"
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

export default womenfilter
