import React from 'react';
import Product from './Product';


function Home() {
    return (
        <div className="Home">
            <img src ="./dd.png"  className="Home_Banner"  alt="Banner" />
            <div className="Home_rowa">
            <div className="Home_rowaa">
            <Product className="Home_dis"
            id="123245"
            title="Cassava"
            price={8.99}
            rating={5}
            image ="./cassava.jpg"
            />
            </div>

            <div className="Home_rowbb">
            <Product
            id="234245"
            title="Ghana Yam"
            price={9.99}
            rating={5}
            image ="./yam.jpg"
            />
            </div>
            <div className="Home_rowcc">
            <Product
            id="564745"
            title="Wheat Flour"
            price={5.99}
            rating={4}
            image ="./w.jpeg"
            />
            </div>
            </div>

            <div className="Home_rowb">
            <div className="Home_rowaa">
            <Product
            id="878785"
            title="Africa Shea Butter"
            price={12.99}
            rating={5}
            image ="./shea.jpg"
            />
            </div>
            <div className="Home_rowbb">
            <Product
            id="675935"
            title="Paani Meat Pie"
            price={7.99}
            rating={5}
            image ="./pie.jpg"
            />
            </div>
            </div>

            <div className="Home_rowa">
            <div className="Home_rowaa">
            <Product
            id="516936"
            title="Paani Goat Suya"
            price={15.99}
            rating={5}
            image ="./suya.jpg"
            />
            </div>
            <div className="Home_rowbb">
            <Product
            id="425945"
            title="Okra"
            price={4.99}
            rating={5}
            image ="./okra.jpg"
            />
            </div>
            <div className="Home_rowcc">
            <Product
            id="213605"
            title="Zomi African Palm Oil"
            price={10.99}
            rating={5}
            image ="./palm.jpg"
            />
            </div>
            </div>

            <div className="Home_rowb">
            <div className="Home_rowaa">
            <Product
            id="675910"
            title="Paani Egusi Soup"
            price={9.99}
            rating={5}
            image ="./egusi.jpg"
            />
            </div>
            <div className="Home_rowbb">
            <Product
            id="352685"
            title="Taste of Caribbean Plantain Chips"
            price={3.99}
            rating={5}
            image ="./chip.jpg"
            />
            </div>
            </div>

            <div className="Home_rowa">
            <div className="Home_rowaa">
            <Product
            id="897943"
            title="Ola Ola Pounded Yam"
            price={9.99}
            rating={4}
            image ="./iyan.jpg"
            />
            </div>
            <div className="Home_rowbb">
            <Product
            id="678585"
            title="Paani Steamed Ugwu"
            price={6.99}
            rating={5}
            image ="./ugwu.jpg"
            />
            </div>
            <div className="Home_rowcc">
            <Product
            id="657402"
            title="Gari Ijebu"
            price={10.99}
            rating={4}
            image ="./gari.jpg"
            />
            </div>
            </div>

        </div>
    )
}

export default Home;
