"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CheckoutButton from "@/components/buttons/CheckoutButton";
import Image from "next/image";

const CartPage = () => {
  const { cartItems, removeFromCart, cartTotal,increaseQuantity,
  decreaseQuantity, } = useCart();

  return (
    <div className="min-h-screen bg-base-200/50">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="mb-8">
          <p className="mb-1 text-sm font-semibold text-primary">
            Shopping Cart
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            My Cart
          </h1>

          <p className="mt-2 text-sm text-base-content/60">
            Review your selected courses and combos before checkout.
          </p>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex min-h-[55vh] items-center justify-center">
            <div className="w-full max-w-lg rounded-3xl border border-base-300/70 bg-base-100 p-8 text-center shadow-xl shadow-primary/5 sm:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
                🛒
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Your cart is empty
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-base-content/60">
                Add some courses or combos to your cart.
              </p>

              <Link
                href="/courses"
                className="btn btn-primary mt-7 rounded-full border-0 px-7 shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className="group flex gap-4 rounded-2xl border border-base-300/70 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:p-5"
                >
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-28 sm:w-40">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={128}
                      height={96}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {item.type}
                      </p>

                      <h2 className="mt-1 line-clamp-2 text-lg font-bold leading-6 sm:text-xl">
                        {item.title}
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
  <div className="flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 p-1">
    <button
      onClick={() => decreaseQuantity(item.id, item.type)}
      className="btn btn-sm btn-circle btn-ghost hover:bg-primary/10 hover:text-primary"
      aria-label={`Decrease quantity of ${item.title}`}
    >
      −
    </button>

    <span className="min-w-8 text-center text-sm font-bold">
      {item.quantity}
    </span>

    <button
      onClick={() => increaseQuantity(item.id, item.type)}
      className="btn btn-sm btn-circle btn-ghost hover:bg-primary/10 hover:text-primary"
      aria-label={`Increase quantity of ${item.title}`}
    >
      +
    </button>
  </div>

  <p className="text-lg font-extrabold text-primary">
    ৳ {(item.price * item.quantity).toLocaleString()}
  </p>
</div>
                  </div>

                  <div className="flex items-start">
                    <button
                      onClick={() => removeFromCart(item.id, item.type)}
                      className="btn btn-error btn-sm rounded-full border-0 px-4 text-error-content shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl border border-base-300/70 bg-base-100 p-6 shadow-lg shadow-primary/5 lg:sticky lg:top-6">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Checkout
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Order Summary
                </h2>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-base-200/60 px-4 py-3 text-sm">
                <span className="text-base-content/60">
                  Items
                </span>

                <span className="font-bold">
                  {cartItems.length}
                </span>
              </div>

              <div className="divider my-4"></div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-base-content/70">
                  Total
                </span>

                <span className="text-2xl font-extrabold text-primary">
                  ৳ {cartTotal.toLocaleString()}
                </span>
              </div>

              <div className="mt-6">
                <CheckoutButton></CheckoutButton>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-base-content/50">
                Your purchase request will be submitted securely.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;