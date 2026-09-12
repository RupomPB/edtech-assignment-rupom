"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useCart } from "@/context/CartContext";

const CartButton = ({ course, combo, type }) => {
  const { status } = useSession();
  const { addToCart } = useCart();

  const router = useRouter();
  const path = usePathname();

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

    const cartItem = {
      id: item._id.toString(),
      type: type,
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
    };

    addToCart(cartItem);

    alert("Added to cart!");
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