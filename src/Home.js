import React from 'react';
import Product from './Product';

function Home() {
    return (
        <div className="Home">
            <img src ="./dd.png"  className="Home_Banner"  alt="Banner" />

            <Product
            id="123245"
            title="Wheat Flour"
            price={5.99}
            rating={4}
            image ="https://goodeggs2.imgix.net/product_photos/nnVTRjdTy3zIiaaSSx7A_2017_0926_KingArthur_OrganicWholeWheatFlour_2lbs%20%28b4cbfcae34e21fd306172bd53d691301573b7078%29.jpg?w=840&h=525&fm=jpg&q=80&fit=crop"
            />
            
            
        </div>
    )
}

export default Home
