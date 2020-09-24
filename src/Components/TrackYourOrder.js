import React from 'react'


function TrackYourOrder() {
    return (
        <div className="container_track" >
            <h1 className="title_track" >Track Your Order</h1>
            <form>
                <h3>Enter Your Tracking Number</h3>
                <input className="input_track" type="text"/><br></br>
                <button className="button_track_a">Click to Submit</button>
            </form>
        </div>
    )
}

export default TrackYourOrder;
