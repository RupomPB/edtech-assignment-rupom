"use client";

import { useState } from "react";
import { updateStudentProfile } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ProfileEdit = ({ user }) => {
  const [name, setName] = useState(user.name || "");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { update } = useSession();

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    setLoading(true);

    const result = await updateStudentProfile( name);

    setLoading(false);

    if (!result.success) {
      alert(result.message);
      return;
    }
    
  // Update NextAuth session
    await update({
      name: name.trim(),
    });

    alert("Profile updated successfully");

    setEditing(false);

    router.refresh();
  };

  if (!editing) {
    return (
      <div className="mt-6 rounded-xl border p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">My Profile</h2>

            <div className="mt-4 space-y-2">
              <p>
                <strong>Name:</strong> {user.name}
              </p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Role:</strong>{" "}
                <span className="capitalize">{user.role}</span>
              </p>
            </div>
          </div>

          <button onClick={() => setEditing(true)} className="btn btn-primary">
            Edit Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border p-6">
      <h2 className="text-xl font-semibold">Edit Profile</h2>

      <form onSubmit={handleUpdate} className="mt-5 space-y-4">
        <div>
          <label className="mb-2 block font-medium">Name</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Email</label>

          <input
            type="email"
            value={user.email}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading ? "Updating..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => setEditing(false)}
            className="btn btn-ghost"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
