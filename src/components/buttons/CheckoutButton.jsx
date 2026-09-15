"use client";

import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import { createPurchase } from "@/actions/server/purchase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "info",
        title: "Your Cart Is Empty",
        text: "Please add a course or combo before checkout.",
        confirmButtonText: "Browse Courses",
        confirmButtonColor: "#6d28d9",
      });
      return;
    }

    const purchaseData = {
      items: cartItems,
    };

    setLoading(true);

    try {
      const result = await createPurchase(purchaseData);

      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Purchase Request Submitted!",
          text: "Your purchase request has been submitted successfully.",
          confirmButtonText: "Go to Dashboard",
          confirmButtonColor: "#6d28d9",
        });

        clearCart();
        router.push("/dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Purchase Failed",
          text: result.message || "Something went wrong.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#6d28d9",
        });
      }
    } catch (error) {
      console.error("Checkout error:", error);

      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "Please try again later.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#6d28d9",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="btn btn-primary w-full rounded-xl border-0 bg-linear-to-r from-primary to-secondary text-base font-semibold shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:hover:translate-y-0"
    >
      {loading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Processing...
        </>
      ) : (
        "Proceed to Checkout"
      )}
    </button>
  );
};

export default CheckoutButton;