import React from 'react'

function Coupons() {
    return (
        <div>
            <h1 className="coupon_title">Coupons</h1>
            <h1 className="coupon_a">Check out your coupons here for amazing discounts!</h1>
            <div className="coupon_img">
                <img className="coupon_img_a" src="/img/sales_a.jpg" alt="Logo" />
                <img className="coupon_img_b" src="/img/sales_b.jpg" alt="Logo" /><br></br>
                <img className="coupon_img_c" src="/img/sales_c.jpg" alt="Logo" />
                <img className="coupon_img_d" src="/img/sales_d.jpg" alt="Logo" /><br></br>
                <img className="coupon_img_e" src="/img/sales_e.jpg" alt="Logo" />
                <img className="coupon_img_f" src="/img/sales_f.jpg" alt="Logo" />
            </div>
            
        </div>
    )
}

export default Coupons;
