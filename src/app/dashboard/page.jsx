import { getCurrentUser, requireRole } from "@/lib/authGuard";
import { redirect } from "next/navigation";
import { getPurchasesByStudent } from "@/actions/server/purchase";

const DashboardPage = async () => {
  const user = await requireRole("student");

   const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  if (currentUser.role !== "student") {
    redirect("/forbidden");
  }

  const purchases = await getPurchasesByStudent(user.id);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">
        Student Dashboard
      </h1>

      {/* Profile */}
      <div className="mt-6 rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Profile
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
      </div>

      {/* Purchases */}
      <div className="mt-8">
        <h2 className="mb-5 text-2xl font-bold">
          My Purchases
        </h2>

        {purchases.length === 0 ? (
          <div className="rounded-xl border p-8 text-center">
            <p className="text-gray-500">
              You have no purchases yet.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {purchases.map((purchase) => (
              <div
                key={purchase._id.toString()}
                className="rounded-xl border p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Purchase ID
                    </p>

                    <p className="font-medium">
                      {purchase._id.toString()}
                    </p>
                  </div>

                  <div>
                    <span className="badge badge-warning">
                      {purchase.status}
                    </span>
                  </div>
                </div>

                <div className="divider"></div>

                {/* Items */}
                <div className="space-y-3">
                  {purchase.items.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      className="flex items-center justify-between rounded-lg bg-base-200 p-3"
                    >
                      <div>
                        <p className="font-semibold">
                          {item.title}
                        </p>

                        <p className="text-sm text-gray-500 capitalize">
                          {item.type}
                        </p>
                      </div>

                      <p className="font-semibold">
                        ৳ {item.price}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="divider"></div>

                <div className="flex justify-between">
                  <span className="font-semibold">
                    Total
                  </span>

                  <span className="text-lg font-bold">
                    ৳ {purchase.totalPrice}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Date:{" "}
                  {new Date(
                    purchase.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;