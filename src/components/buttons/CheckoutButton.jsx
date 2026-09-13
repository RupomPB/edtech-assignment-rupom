"use client";

import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import { createPurchase } from "@/actions/server/purchase";
import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const { data: session } = useSession();
  const { cartItems, cartTotal, clearCart } = useCart();

  const router = useRouter();

  const handleCheckout = async () => {
    if (!session?.user?.id) {
      router.push("/login");
      return;
    }

    // protection for admin role (only student can make purchase)
    if (session.user.role !== "student") {
      router.push("/forbidden");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const purchaseData = {
      studentId: session.user.id,
      studentEmail: session.user.email,
      items: cartItems,
      totalPrice: cartTotal,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await createPurchase(purchaseData);

    if (result.success) {
      alert("Purchase request submitted!");

      clearCart();

      router.push("/dashboard");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn-primary w-full">
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
