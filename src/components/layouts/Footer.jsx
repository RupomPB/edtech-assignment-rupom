
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-base-300/70 bg-base-100">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-base-content/60">
              Learn new skills, explore quality courses, and grow your
              knowledge with our online learning platform.
            </p>

            <Link
              href="/courses"
              className="btn btn-primary mt-6 rounded-full border-0 bg-linear-to-r from-primary to-secondary px-5 text-primary-content shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              Explore Courses
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Explore */}
          <nav>
            <h6 className="mb-4 text-sm font-bold uppercase tracking-wider text-base-content">
              Explore
            </h6>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/courses"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Courses
              </Link>

              <Link
                href="/contact"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Contact
              </Link>

              <Link
                href="/dashboard"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Dashboard
              </Link>
            </div>
          </nav>

          {/* Platform */}
          <nav>
            <h6 className="mb-4 text-sm font-bold uppercase tracking-wider text-base-content">
              Platform
            </h6>

            <div className="flex flex-col gap-3">
              <Link
                href="/courses"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Online Courses
              </Link>

              <Link
                href="/courses"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Combo Packages
              </Link>

              <Link
                href="/login"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Create Account
              </Link>
            </div>
          </nav>

          {/* Support */}
          <nav>
            <h6 className="mb-4 text-sm font-bold uppercase tracking-wider text-base-content">
              Support
            </h6>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Contact Us
              </Link>

              <a
                href="#"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Terms of Use
              </a>

              <a
                href="#"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="w-fit text-sm text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                Cookie Policy
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex   flex-col gap-3 border-t border-base-300/70 pt-6 text-sm text-base-content/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EdTech Platform. All rights reserved.
          </p>

          <p>Learn. Grow. Succeed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

