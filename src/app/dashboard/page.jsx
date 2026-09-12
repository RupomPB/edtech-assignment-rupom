import { requireRole } from "@/lib/authGuard";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const user = await requireRole("student");

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">
        Student Dashboard
      </h1>

      <div className="mt-6 rounded-xl border p-6">
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

export default DashboardPage;