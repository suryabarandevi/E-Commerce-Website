import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";


const getDefaultCart=()=>{
    let cart={};
    for(let index= 0;index<all_product.length+1;index++){
            cart[index]=0;
    }
    return cart;

}

export const ShopContext= createContext(null);

const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());

    

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems);
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    const getTotalCartAmount=()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item))
                totalamount+=iteminfo.new_price * cartItems[item];
            }
        }
        return totalamount;
    }
    const getTotalCartItems=()=>{
        let totalitems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalitems+=cartItems[item];
            }
        }
        return totalitems;
    }
    const contextValue={all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;