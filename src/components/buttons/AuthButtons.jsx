"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButtons = () => {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <span className="loading loading-spinner loading-sm"></span>
    );
  }

  return (
    <div>
      {session.status === "authenticated" ? (
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="btn btn-primary"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="btn btn-primary btn-outline"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;