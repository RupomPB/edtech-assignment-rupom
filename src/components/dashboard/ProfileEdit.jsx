"use client";

import { useState } from "react";
import { updateStudentProfile } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ProfileEdit = ({ user }) => {
  const [name, setName] = useState(user.name || "");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { update } = useSession();

  const handleUpdate = async (event) => {
  event.preventDefault();

  if (!name.trim()) {
    Swal.fire({
      icon: "warning",
      title: "Name Required",
      text: "Please enter your name before saving.",
      confirmButtonText: "Okay",
      confirmButtonColor: "#6d28d9",
    });
    return;
  }

  setLoading(true);

  try {
    const result = await updateStudentProfile(name);

    if (!result.success) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: result.message || "Something went wrong.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#6d28d9",
      });

      return;
    }

    // Update NextAuth session
    await update({
      name: name.trim(),
    });

    await Swal.fire({
      icon: "success",
      title: "Profile Updated!",
      text: "Your profile has been updated successfully.",
      confirmButtonText: "Great",
      confirmButtonColor: "#6d28d9",
    });

    setEditing(false);

    router.refresh();
  } catch (error) {
    console.error("Profile update error:", error);

    Swal.fire({
      icon: "error",
      title: "Something Went Wrong",
      text: "Unable to update your profile. Please try again.",
      confirmButtonText: "Try Again",
      confirmButtonColor: "#6d28d9",
    });
  } finally {
    setLoading(false);
  }
};

  if (!editing) {
    return (
      <div className="overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
        {/* Profile Header */}
        <div className="flex flex-col gap-4 border-b border-base-300/60 bg-linear-to-r from-primary/5 via-secondary/5 to-accent/5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg shadow-primary/20">
              <FaUser className="text-lg" />
            </div>

            <div>
              <h2 className="text-lg font-bold">Profile Information</h2>

              <p className="mt-0.5 text-xs text-base-content/50">
                Your account details
              </p>
            </div>
          </div>

          <button
            onClick={() => setEditing(true)}
            className="btn btn-sm rounded-xl border-primary/20 bg-primary/5 px-4 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-content hover:shadow-md hover:shadow-primary/20"
          >
            <FaEdit />
            Edit Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-7">
          <div className="rounded-2xl border border-base-300/70 bg-base-200/40 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FaUser />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                  Name
                </p>

                <p className="mt-1 truncate font-semibold">
                  {user.name || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-base-300/70 bg-base-200/40 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                  Email
                </p>

                <p className="mt-1 truncate font-semibold">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-base-300/70 bg-base-200/40 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FaShieldAlt />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                  Role
                </p>

                <p className="mt-1 font-semibold capitalize">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm">
      {/* Edit Header */}
      <div className="flex items-center gap-4 border-b border-base-300/60 bg-linear-to-r from-primary/5 via-secondary/5 to-accent/5 px-5 py-5 sm:px-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg shadow-primary/20">
          <FaEdit className="text-lg" />
        </div>

        <div>
          <h2 className="text-lg font-bold">Edit Profile</h2>

          <p className="mt-0.5 text-xs text-base-content/50">
            Update your personal information
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdate} className="p-5 sm:p-7">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <FaUser className="text-primary" />
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="input input-bordered w-full rounded-xl border-base-300 bg-base-100 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <FaEnvelope className="text-secondary" />
              Email
            </label>

            <input
              type="email"
              value={user.email}
              disabled
              className="input input-bordered w-full cursor-not-allowed rounded-xl border-base-300 bg-base-200 text-base-content/60"
            />

            <p className="mt-2 text-xs text-base-content/40">
              Email address cannot be changed.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="btn rounded-xl border-base-300 bg-base-100 px-6 transition-all duration-200 hover:border-error/30 hover:bg-error/5 hover:text-error"
          >
            <FaTimes />
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="btn rounded-xl border-0 bg-linear-to-r from-primary to-secondary px-6 text-primary-content shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 disabled:hover:translate-y-0"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Updating...
              </>
            ) : (
              <>
                <FaSave />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;