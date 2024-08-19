import React, { useContext } from "react";
import './productdisplay.css'
import star_dull_icon from "../Assets/star_dull_icon.png"
import star_icon from "../Assets/star_icon.png"
import { ShopContext } from "../../Context/shopcontext";
const ProductDisplay=(props)=>{
    const{product}=props;
    const {addToCart}=useContext(ShopContext);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
              <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
              <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
              </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    {/* <img src={star_icon} alt="" /> */}
                    
                    <img src={star_dull_icon} alt="" /><img src={star_dull_icon} alt="" />
                    
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>

                </div>
                <div className="productdisplay-right-description">Our shirts are perfect for all your workout needs. With advanced moisture-wicking technology and quick dry design, you’ll have your shirt ready to wear right after your workout. Sweat condensation is eliminated while you train with this shirt. It is easy to wash, and you won’t have to worry about shrinkage!</div>
                 <div className="productdisplay-right-size">
                   <h1> Select Size</h1>
                   <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                   </div>
                 </div>
                 <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                 <p className=" productdisplay-right-category">
                    

                 </p>
                
            </div>
        </div>
    )
}
export default ProductDisplay;