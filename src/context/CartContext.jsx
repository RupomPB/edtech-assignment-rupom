"use client";

import { useSession } from "next-auth/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

const CartStateProvider = ({ children, userId }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (!userId || typeof window === "undefined") {
      return [];
    }

    const cartKey = `edtech-cart-${userId}`;
    const savedCart = localStorage.getItem(cartKey);

    if (!savedCart) {
      return [];
    }

    try {
      const parsedCart = JSON.parse(savedCart);

      return parsedCart.map((item)=>({
        ...item,
        quantity: item.quantity || 1,
      }))

    } catch {
      return [];
    }
  });

  // if cart change it will save in  localStorage 
  useEffect(() => {
    if (!userId) return;

    const cartKey = `edtech-cart-${userId}`;

    localStorage.setItem(cartKey, JSON.stringify(cartItems));
  }, [cartItems, userId]);

  // add item to cart
  const addToCart = (item) => {
    setCartItems((previousItems) => {
      const alreadyExists = previousItems.some(
        (cartItem) =>
          cartItem.id === item.id && cartItem.type === item.type,
      );

      if(alreadyExists){
        return previousItems.map((cartItem)=>
        cartItem.id === item.id && cartItem.type === item.type
        ? {...cartItem, quantity: (cartItem.quantity || 1) + 1}
        : cartItem,
        )
      }

      return [...previousItems, {...item, quantity: 1}];
    });
  };

  // increase function
  const increaseQuantity =(id, type)=>{
    setCartItems(
      (previousItems)=>
        previousItems.map(item =>
          item.id === id && item.type=== type
          ? {...item, quantity:  (item.quantity || 1) + 1}
          : item,
        )
    )
  }

// decrease function
  const decreaseQuantity =(id, type)=>{
    setCartItems(
      (previousItems)=>
        previousItems.map(item =>
          item.id === id && item.type=== type
          ? {...item, quantity: Math.max(1, (item.quantity || 1) - 1)}
          : item,
        )
    )
  }

  // remove item from cart
  const removeFromCart = (id, type) => {
    setCartItems((previousItems) => {
      return previousItems.filter(
        (item) => !(item.id === id && item.type === type),
      );
    });
  };

  // clear all cart
  const clearCart = () => {
    setCartItems([]);
  };

  // total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartTotal,
        clearCart,
        increaseQuantity,
        decreaseQuantity,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartProvider = ({ children }) => {
  const { data: session } = useSession();

  const userId = session?.user?.id;

  return (
    <CartStateProvider key={userId || "guest"} userId={userId}>
      {children}
    </CartStateProvider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};