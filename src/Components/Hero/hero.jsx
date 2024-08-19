import React from "react";
import './hero.css'

import arrow_icon from '../Assets/arrow.png'
import hero_imagr from '../Assets/hero_image.png'
const Hero=()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                {/* <h2>New Arrivals only</h2> */}
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <div className="pp">
                    <p>collections</p>
                    <p>for everyone</p>
                    </div>
                   
                </div>
                {/* <div className="hero-latest-btn">
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt="" />
                </div> */}
            </div>
             <div className="hero-right">
                <img className="jiraya" src={hero_imagr}alt="" />
            </div>
        </div>
    )
}
export default Hero;