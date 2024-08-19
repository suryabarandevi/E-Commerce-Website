import React from "react";
import Hero from "../Components/Hero/hero"
import Popular from "../Components/Popular/popular";
import Offers from "../Components/Offers/offers"
import NewCollections from "../Components/NewCollections/newcollections";
import NewsLetter from "../Components/NewLetter/newletter";
const Shop=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}
export default Shop;