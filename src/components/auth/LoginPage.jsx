"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SocialButton from "./SocialButton";
import Swal from "sweetalert2";

const LoginPage = () => {

   const params = useSearchParams();
      const callback=params.get("callbackUrl")|| "/";

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const form = e.target;

  const email = form.email.value.trim();
  const password = form.password.value;

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
    callbackUrl: callback,
  });

  setLoading(false);

  if (!result?.ok) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Email or password is incorrect... or try to Google or Register",
      confirmButtonText: "Try Again",
    });

    return;
  }

  await Swal.fire({
    icon: "success",
    title: "Welcome Back!",
    text: "You have logged in successfully.",
    confirmButtonText: "Continue",
  });

  router.push(callback);
  router.refresh();
};
  return (
    <main className="relative min-h-screen overflow-hidden bg-base-200 px-4 py-10 sm:py-14">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl border border-base-300/70 bg-base-100/95 p-6 shadow-2xl shadow-primary/5 backdrop-blur-xl sm:p-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl text-primary-content shadow-lg shadow-primary/20">
              🎓
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm leading-6 text-base-content/60">
              Login to continue your learning journey
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mt-6 rounded-xl border border-error/20">
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <Mail
                  size={19}
                  className="text-base-content/40 transition-colors duration-200"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="grow bg-transparent"
                  required
                />
              </label>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-xs font-semibold text-primary transition-colors hover:text-secondary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <Lock
                  size={19}
                  className="text-base-content/40 transition-colors duration-200"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="grow bg-transparent"
                  required
                />
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary mt-2 w-full rounded-xl border-0 bg-gradient-to-r from-primary to-secondary text-base font-semibold shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-300"></div>

            <span className="text-[11px] font-semibold tracking-wider text-base-content/40">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-base-300"></div>
          </div>

          {/* Google Login */}
          <SocialButton></SocialButton>

          {/* Register */}
          <div className="mt-7 text-center text-sm">
            <span className="text-base-content/60">
              Don&apos;t have an account?{" "}
            </span>

            <Link
              href={`/register?callbackUrl=${callback}`}
              className="font-bold text-primary transition-colors hover:text-secondary hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;