import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className="Home">
            <img src ="./dd.png"  className="Home_Banner"  alt="Banner" />

            <Product
            id="123245"
            title="Wheat Flour"
            price={5.99}
            rating={5}
            image=""
            />
        </div>
    )
}

export default Home
