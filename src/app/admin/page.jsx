import { requireRole } from "@/lib/authGuard";
import { getAllPurchases } from "@/actions/server/purchase";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const user = await requireRole("admin");

  if (!user) {
    redirect("/login");
  }

  const purchases = await getAllPurchases();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-gray-500">
        Manage student purchase requests
      </p>

      <div className="mt-8 space-y-5">
        {purchases.length === 0 ? (
          <div className="rounded-xl border p-8 text-center">
            <p className="text-gray-500">
              No purchase requests found.
            </p>
          </div>
        ) : (
          purchases.map((purchase) => (
            <div
              key={purchase._id.toString()}
              className="rounded-xl border p-6"
            >
              {/* Student Information */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Student
                  </p>

                  <p className="font-semibold">
                    {purchase.studentEmail}
                  </p>

                  <p className="text-sm text-gray-500">
                    ID: {purchase.studentId}
                  </p>
                </div>

                <div>
                  <span className="badge badge-warning capitalize">
                    {purchase.status}
                  </span>
                </div>
              </div>

              <div className="divider"></div>

              {/* Purchased Items */}
              <div>
                <h2 className="mb-3 font-semibold">
                  Purchased Items
                </h2>

                <div className="space-y-3">
                  {purchase.items.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      className="flex items-center justify-between rounded-lg bg-base-200 p-3"
                    >
                      <div>
                        <p className="font-medium">
                          {item.title}
                        </p>

                        <p className="text-sm text-gray-500 capitalize">
                          {item.type || "Course"}
                        </p>
                      </div>

                      <p className="font-semibold">
                        ৳ {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider"></div>

              {/* Total + Date */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Purchase Date
                  </p>

                  <p>
                    {new Date(
                      purchase.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-lg font-bold">
                  Total: ৳ {purchase.totalPrice}
                </div>
              </div>

              {/* Status */}
              <div className="mt-5">
                <label className="mb-2 block font-medium">
                  Update Status
                </label>

                <select
                  defaultValue={purchase.status}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="pending">
                    Pending
                  </option>

                  <option value="processing">
                    Processing
                  </option>

                  <option value="delivered">
                    Delivered
                  </option>

                  <option value="cancelled">
                    Cancelled
                  </option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPage;