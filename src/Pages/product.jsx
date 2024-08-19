import React, { useContext } from "react";
import { ShopContext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/Productdisplay/productdisplay";
// import all_product from "../Components/Assets/all_product";
import RelatedProducts from "../Components/RelatedProducts/relatedproducts";
const Product=()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=> e.id===Number(productId));
    return(
        <div>
            <ProductDisplay product={product}/>
            <RelatedProducts/>
        </div>
    )
}
export default Product;