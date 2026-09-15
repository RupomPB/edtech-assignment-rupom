"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButtons = () => {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <div className="flex items-center justify-center px-2">
        <span className="loading loading-spinner loading-sm text-primary"></span>
      </div>
    );
  }

  return (
    <div>
      {session.status === "authenticated" ? (
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="
            btn
            btn-sm
            rounded-full
            border-0
            bg-linear-to-r
            from-primary
            to-secondary
            px-5
            text-primary-content
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            hover:shadow-primary/20
          "
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="
            btn
            btn-sm
            rounded-full
            border-primary/30
            bg-primary/5
            px-5
            text-primary
            transition-all
            duration-300
            hover:border-primary
            hover:bg-primary
            hover:text-primary-content
            hover:shadow-md
            hover:shadow-primary/20
          "
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;