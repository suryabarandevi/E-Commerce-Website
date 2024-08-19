import React from "react";
import './footer.css'
import foote_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={foote_logo} style={{ width: '50px', height: '50px' }} alt="" />
                <p>Pohs</p>
            </div>
            <ul className="footerlinks">
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 -All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer;