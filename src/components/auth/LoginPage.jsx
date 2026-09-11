"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SocialButton from "./SocialButton";

const LoginPage = () => {

   const params = useSearchParams();
      const callback=params.get("callbackUrl")|| "/";

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      // redirect: false,
      callbackUrl: params.get("callbackUrl")|| "",
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-content">
              🎓
            </div>

            <h1 className="mt-5 text-3xl font-extrabold">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Login to continue your learning journey
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mt-6 rounded-xl">
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

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl">
                <Mail
                  size={19}
                  className="text-base-content/50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="grow"
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
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl">
                <Lock
                  size={19}
                  className="text-base-content/50"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full rounded-xl text-base"
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
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-300"></div>

            <span className="text-xs font-medium text-base-content/50">
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
              className="font-bold text-primary hover:underline"
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