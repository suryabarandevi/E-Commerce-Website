import React from "react";
import './relatedproducts.css'
import data_product from "../Assets/data";
import Item from "../items/items";
const RelatedProducts=()=>{
    return(
        // <div></div>
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproduct-item">
                {data_product.map((item,i)=>{
                   return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                      
                })}
            </div>
            <br />
            <br /><br />
            <br />
            <br />
        </div>
        
    )
}
export default RelatedProducts;