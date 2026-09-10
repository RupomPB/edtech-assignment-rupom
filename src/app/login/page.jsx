import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
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

          {/* Login Form */}
          <form className="mt-8 space-y-5">
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
              className="btn btn-primary w-full rounded-xl text-base"
            >
              Login
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
          <button
            type="button"
            className="btn btn-outline w-full rounded-xl"
          >
            <FaGoogle size={18} />

            Continue with Google
          </button>

          {/* Register */}
          <div className="mt-7 text-center text-sm">
            <span className="text-base-content/60">
              Don  t have an account?{" "}
            </span>

            <Link
              href="/register"
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