"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-8">
        My Cart
      </h1>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-3">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-6">
            Add some courses or combos to your cart.
          </p>

          <Link href="/courses" className="btn btn-primary">
            Browse Courses
          </Link>
        </div>
      ) : (

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex gap-4 rounded-xl border p-4"
              >

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-24 w-32 rounded-lg object-cover"
                />

                <div className="flex-1">

                  <p className="text-sm text-gray-500 capitalize">
                    {item.type}
                  </p>

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-semibold">
                    ৳ {item.price}
                  </p>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id, item.type)
                  }
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="rounded-xl border p-6 h-fit">

            <h2 className="text-xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>৳ {cartTotal}</span>
            </div>

            <button className="btn btn-primary w-full mt-6">
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default CartPage;