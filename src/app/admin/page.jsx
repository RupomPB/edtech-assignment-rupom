import { requireRole } from "@/lib/authGuard";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const user = await requireRole("admin");

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="mt-6 rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Admin Information
        </h2>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <p>
          <strong>User ID:</strong> {user.id}
        </p>
      </div>
    </div>
  );
};

export default AdminPage;