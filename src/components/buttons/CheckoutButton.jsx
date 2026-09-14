"use client";

import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import { createPurchase } from "@/actions/server/purchase";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutButton = () => {
  const { data: session } = useSession();
  const { cartItems, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleCheckout = async () => {
    if (!session?.user?.id) {
      router.push("/login");
      return;
    }

    // Only student can make purchase
    if (session.user.role !== "student") {
      router.push("/forbidden");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const purchaseData = {
      items: cartItems,
    };

    setLoading(true);

    try {
      const result = await createPurchase(purchaseData);

      if (result.success) {
        alert("Purchase request submitted!");

        clearCart();
        router.push("/dashboard");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="btn btn-primary w-full"
    >
      {loading ? "Processing..." : "Proceed to Checkout"}
    </button>
  );
};

export default CheckoutButton;
