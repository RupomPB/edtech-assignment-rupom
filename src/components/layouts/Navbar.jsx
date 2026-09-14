"use client";

import React from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import AuthButtons from "../buttons/AuthButtons";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const { cartItems } = useCart();

  const nav = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/courses">Courses</NavLink>
      </li>

      <li>
        <NavLink href="/contact">Contact</NavLink>
      </li>

      <li>
        {session?.user?.role === "admin" ? (
          <NavLink href="/admin">Admin</NavLink>
        ) : (
          <NavLink href="/dashboard">Dashboard</NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="relative z-50 px-3 pt-3 sm:px-4">
      <div
        className="
          navbar
          min-h-16
          rounded-2xl
          border border-base-300/60
          bg-base-100/90
          px-3
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
          hover:shadow-md
          sm:px-5
          lg:px-6
        "
      >
        {/* LEFT - Logo + Mobile Menu */}
        <div className="navbar-start gap-1">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="
                btn
                btn-ghost
                btn-circle
                transition-all
                duration-200
                hover:bg-primary/10
                hover:text-primary
              "
              aria-label="Open navigation menu"
            >
              <FiMenu className="h-5 w-5" />
            </div>

            <ul
              tabIndex={0}
              className="
                menu
                menu-sm
                dropdown-content
                z-50
                mt-3
                w-60
                rounded-2xl
                border
                border-base-300/60
                bg-base-100/95
                p-3
                shadow-xl
                backdrop-blur-xl
              "
            >
              {nav}
            </ul>
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* CENTER - Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul
            className="
              menu
              menu-horizontal
              items-center
              gap-1
              rounded-full
              bg-base-200/60
              px-2
              py-1.5
            "
          >
            {nav}
          </ul>
        </div>

        {/* RIGHT - Cart + Auth */}
        <div className="navbar-end gap-2 sm:gap-3">
          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="
              btn
              btn-circle
              btn-ghost
              relative
              border
              border-base-300/60
              bg-base-100
              transition-all
              duration-200
              hover:border-primary/30
              hover:bg-primary/10
              hover:text-primary
              hover:shadow-md
            "
          >
            <FiShoppingCart className="h-5 w-5" />

            {cartItems.length > 0 && (
              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-5
                  min-w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  px-1
                  text-[10px]
                  font-bold
                  text-primary-content
                  shadow-md
                  ring-2
                  ring-base-100
                "
              >
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Auth */}
          <AuthButtons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;