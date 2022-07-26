import React from "react"
// import cardpic from "../images/card1.png"
import star from "./images/star.png"

export default function Card(props){
   
    return(
        
        <div className="cards">
            
            {props.openspots === 0 && <div className="soldout">SOLD OUT</div>}
            {/* <img src={`../images/${props.img}`} className="card--image" /> */}
            <img src={props.img} className="cardpic" alt="" />
            <div className="descri" >
                 
                <img src={star} className="staricon" alt=""/>
                <h5 className="rating">{props.rating}</h5>
                <h5 className="reviews">({props.reviewCount})</h5>
                <h5 className="country">• {props.location}</h5>
            </div>
            <h5 className="course">{props.title}</h5>
            <div className="priceline">
            <h5 className="price">From ${props.price}</h5>
            <h5 className="person"> / person</h5>
            </div>
        </div>
    )
}