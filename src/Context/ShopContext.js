import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index =0; index < 300+1;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [all_product,setAll_Product]=useState([]);
    const [cartItem , setCartItem]=useState(getDefaultCart());

    useEffect(()=>{
        const URL = `${process.env.URL}/allproducts`
        fetch(URL).then((response)=>response.json()).then((data)=>setAll_Product(data))
        
        if(localStorage.getItem('auth-token')){
            const URL_G = `${process.env.URL}/getcart`
            fetch(URL_G,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItem(data))
        }

    },[])

    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            const URL = `${process.env.URL}/addtocart`
            fetch(URL,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'itemId':itemId }),
            })
            .then((response)=>response.json()).then((data)=>console.log("added"))
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            const URL = `${process.env.URL}/removefromcart`
            fetch(URL,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'itemId':itemId }),
            })
            .then((response)=>response.json()).then((data)=>console.log('Removed'))
        }
        
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount+= itemInfo.new_price * cartItem[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItem =() =>{
        let totalItem =0;
        for(const item in cartItem){
            if(cartItem[item]>0)totalItem+=cartItem[item];
        }
        return totalItem;
    }
    const contextValue = {all_product,cartItem, addToCart , removeFromCart,getTotalCartAmount,getTotalCartItem}; 
      return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider ;