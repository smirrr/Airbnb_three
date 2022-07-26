import React from "react"
import collage from "./images/collage.png"

export default function Hero(){
    return(
       <section className="hero" >
            {/* <div className="herocollage"> */}
                <img src={collage} className="collage"/>
            {/* </div> */}
            {/* <div className="herotext"> */}
                <h1 className="heroh1">Online Experiences</h1>
                <p className="herop"> Join unique interactive activities led by one-of-a-kind 
                    hosts-all without leaving home. Lorem Ipsum is simply dummy text of the
                     printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            {/* </div> */}
       </section>
    )
}