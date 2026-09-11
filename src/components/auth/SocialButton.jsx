"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialButton = () => {

    const params = useSearchParams();
    console.log(params.get("callbackUrl")|| "/");

  const handleSignIn = async () => {
    try {
      const result = await signIn("google", {
        callbackUrl: params.get("callbackUrl")|| "/",
        
      });

      console.log(result);

      if (result?.error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Google login failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Google login error:", error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Unable to login with Google.",
      });
    }
  };

  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={handleSignIn}
        type="button"
        className="btn btn-outline w-full rounded-xl"
      >
        <FaGoogle size={18} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialButton;