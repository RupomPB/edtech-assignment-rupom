"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "No item selected",
        confirmButtonColor: "#7c3aed",
      });
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

    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${item.title} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    });
  };

  return (
    <button
      onClick={add2Cart}
      className="btn btn-outline btn-primary flex-1 gap-2 rounded-full transition duration-300 hover:-translate-y-0.5"
    >
      <FaShoppingCart size={16} />
      Add to Cart
    </button>
  );
};

export default CartButton;