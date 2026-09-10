import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
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
              Create Account
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Create your account and start learning today
            </p>
          </div>

          {/* Register Form */}
          <form className="mt-8 space-y-5">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl">
                <User size={19} className="text-base-content/50" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl">
                <Mail size={19} className="text-base-content/50" />

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
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl">
                <Lock size={19} className="text-base-content/50" />

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Confirm Password
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl">
                <Lock size={19} className="text-base-content/50" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="grow"
                  required
                />
              </label>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm mt-0.5"
                required
              />

              <span className="text-base-content/60">
                I agree to the{" "}
                <span className="font-semibold text-primary">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-primary w-full rounded-xl text-base"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-300" />

            <span className="text-xs font-medium text-base-content/50">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-base-300" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="btn btn-outline w-full rounded-xl"
          >
            <FaGoogle size={18} />

            Continue with Google
          </button>

          {/* Login */}
          <div className="mt-7 text-center text-sm">
            <span className="text-base-content/60">
              Already have an account?{" "}
            </span>

            <Link
              href="/login"
              className="font-bold text-primary hover:underline"
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