"use client"

import { useSession } from 'next-auth/react';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const {data: session} = useSession();

    const [cartItems, setCartItems] = useState([]);

    // islogin user cart load 
    useEffect(()=>{

       if (!session?.user?.id) {
      setCartItems([])
      return;
    }

    const cartKey= `edtech-cart-${session.user.id}`;

    // localStorage
    const savedCart = localStorage.getItem(cartKey);

    if(savedCart){
        setCartItems(JSON.parse(savedCart));
    }else{
        setCartItems([]);
    }
    },[session]);

    // if cart change localstorage will save
    useEffect(() => {
    
        if(!session?.user?.id) return;

        const cartKey =`edtech-cart-${session.user.id}`

    // set to localstorage
    localStorage.setItem(cartKey, JSON.stringify(cartItems));

    }, [cartItems, session]);

    // add item to cart
    const addToCart = (item)=>{
        setCartItems((previousItems)=>{
            const alreadyExists = previousItems.some(
                (cartItem)=>
                    cartItem.id === item.id && cartItem.type === item.type
            );

            if(alreadyExists){
                return previousItems
            }
            return [...previousItems, item];

        });
    };

    
    

    return (
        <CartContext.Provider
            value={{
                cartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )

};

export const useCart =()=>{
    return useContext(CartContext);
}