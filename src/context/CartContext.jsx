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
      return JSON.parse(savedCart);
    } catch {
      return [];
    }
  });

  // cart change হলে localStorage-এ save হবে
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

      if (alreadyExists) {
        return previousItems;
      }

      return [...previousItems, item];
    });
  };

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
    (total, item) => total + item.price,
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