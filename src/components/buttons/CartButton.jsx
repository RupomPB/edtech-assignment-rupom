"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { useCart } from "@/context/CartContext";


const CartButton = ({ course, combo, type }) => {
  const { status } = useSession();

  const router = useRouter();
  const path = usePathname();

  // cart context
  const {cartItems} = useCart();
  console.log("Cart:", cartItems);

  const add2Cart = () => {
    
    if (status !== "authenticated") {
    router.push(`/login?callbackUrl=${path}`);
    return;
  }

   
    const item = course || combo;

    if (!item) {
      alert("No item selected");
      return;
    }

    const productId = item._id.toString();

    alert(`Added to cart!\nID: ${productId}\nType: ${type}`);
  };

  return (
    <button
      onClick={add2Cart}
      className="btn btn-outline btn-primary flex-1 rounded-full"
    >
      Add to Cart
    </button>
  );
};

export default CartButton;