"use client";

import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { postStudent } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import SocialButton from "./SocialButton";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const router = useRouter();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Passwords do not match",
      text: "Please enter the same password in both fields.",
    });
    return;
  }

  const userData = {
    name,
    email,
    password,
  };

  const result = await postStudent(userData);

  if (result.success) {
    await Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: "Your account has been created. Now please login.",
      confirmButtonText: "Go to Login",
    });

    router.push("/login");
    return;
  }

  Swal.fire({
    icon: "error",
    title: "Registration Failed",
    text: result.message,
  });
};

  return (
    <main className="relative min-h-screen overflow-hidden bg-base-200 px-4 py-10 sm:py-14">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl border border-base-300/70 bg-base-100/95 p-6 shadow-2xl shadow-primary/5 backdrop-blur-xl sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-2xl text-primary-content shadow-lg shadow-primary/20">
              🎓
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight">
              Create Account
            </h1>

            <p className="mt-2 text-sm leading-6 text-base-content/60">
              Create your account and start learning today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <User
                  size={19}
                  className="text-base-content/40"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="grow bg-transparent"
                  required
                />
              </label>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <Mail
                  size={19}
                  className="text-base-content/40"
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

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <Lock
                  size={19}
                  className="text-base-content/40"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="grow bg-transparent"
                  minLength={6}
                  required
                />
              </label>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Confirm Password
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <Lock
                  size={19}
                  className="text-base-content/40"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="grow bg-transparent"
                  minLength={6}
                  required
                />
              </label>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-base-300/60 bg-base-200/40 p-3 text-sm transition-colors duration-200 hover:border-primary/20">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-primary checkbox-sm mt-0.5"
                required
              />

              <span className="leading-5 text-base-content/60">
                I agree to the{" "}
                <span className="font-semibold text-primary">
                  Terms & Conditions
                </span>
              </span>
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-xl border-0 bg-linear-to-r from-primary to-secondary text-base font-semibold shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              Create Account
            </button>
          </form>

          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-300" />

            <span className="text-[11px] font-semibold tracking-wider text-base-content/40">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-base-300" />
          </div>

          <SocialButton></SocialButton>

          <div className="mt-7 text-center text-sm">
            <span className="text-base-content/60">
              Already have an account?{" "}
            </span>

            <Link
              href="/login"
              className="font-bold text-primary transition-colors hover:text-secondary hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;