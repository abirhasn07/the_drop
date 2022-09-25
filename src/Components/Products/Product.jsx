import React from 'react'
import SingleProduct from '../Product/SingleProduct'
import SectionHeader from '../SectionHeader/SectionHeader'
const headerData = {

    name:"MOST POPULAR",
    nameColor:"accent",
    title:"Selling our Soles for clout.",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText:"view all"
    
}
const Product = () => {

    return (
        <section className='products'>
            <div className="container">

                <SectionHeader headerData={headerData} />
                
                <SingleProduct />
            </div>
        </section>
  )
}

export default Product