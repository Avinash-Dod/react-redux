import React from 'react'

function Home(props) {
    return (
        <div className="Container" >
        <div className="Image">
            <img src="https://th.bing.com/th/id/OIP.tQrub1zAabyvMHOrVRPJNAHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.18&pid=1.7" alt="product" />
            <br></br>
            <button type="button" onClick={
                ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}
                    className="btn-cart w3-button w3-red" >Add to Cart</button><br></br>
           
            <br></br>
            <button type="button"
                        onClick={()=>{props.removeFromCartHandler()}}

                        className="btn-cart w3-button w3-red" >Remove from Cart</button>


        </div>


    </div>
    )
}
export default Home