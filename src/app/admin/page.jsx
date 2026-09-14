import { getCurrentUser } from "@/lib/authGuard";
import { getAllPurchases } from "@/actions/server/purchase";
import { redirect } from "next/navigation";
import PurchaseStatus from "@/components/admin/PurchaseStatus";
import {
  FaUserShield,
  FaShoppingBag,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
  FaUserCircle,
  FaBookOpen,
  FaBoxOpen,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

const AdminPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  if (currentUser.role !== "admin") {
    redirect("/forbidden");
  }

  const purchases = await getAllPurchases();

  // dynamic card function

  const totalPurchases = purchases.length;

  const pendingPurchases = purchases.filter(
    (purchase) => purchase.status === "pending",
  ).length;

  const processingPurchases = purchases.filter(
    (purchase) => purchase.status === "processing",
  ).length;

  const deliveredPurchases = purchases.filter(
    (purchase) => purchase.status === "delivered",
  ).length;

  const cancelledPurchases = purchases.filter(
    (purchase) => purchase.status === "cancelled",
  ).length;

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-secondary to-primary p-6 text-primary-content shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider backdrop-blur-md">
                <FaUserShield />
                ADMIN PORTAL
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Admin Dashboard
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-primary-content/75 sm:text-base">
                Manage student purchase requests, monitor order activity, and
                keep track of your EdTech platform from one place.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                  <FaUserCircle />

                  <span>{currentUser.email}</span>
                </div>

                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold capitalize backdrop-blur-md">
                  {currentUser.role}
                </div>
              </div>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center self-start rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md lg:self-center">
              <FaUserShield className="text-5xl" />
            </div>
          </div>
        </div>

        {/* dynamic card UI */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <div className="group rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaShoppingBag className="text-xl" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                Orders
              </span>
            </div>

            <p className="mt-5 text-3xl font-extrabold">
              {totalPurchases}
            </p>

            <p className="mt-1 text-sm text-base-content/50">
              Total purchases
            </p>
          </div>

          <div className="group rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warning/10 text-warning">
                <FaClock className="text-xl" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                Waiting
              </span>
            </div>

            <p className="mt-5 text-3xl font-extrabold text-warning">
              {pendingPurchases}
            </p>

            <p className="mt-1 text-sm text-base-content/50">
              Pending purchases
            </p>
          </div>

          <div className="group rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-info/10 text-info">
                <FaSpinner className="text-xl" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                Active
              </span>
            </div>

            <p className="mt-5 text-3xl font-extrabold text-info">
              {processingPurchases}
            </p>

            <p className="mt-1 text-sm text-base-content/50">
              Processing orders
            </p>
          </div>

          <div className="group rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/10 text-success">
                <FaCheckCircle className="text-xl" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                Completed
              </span>
            </div>

            <p className="mt-5 text-3xl font-extrabold text-success">
              {deliveredPurchases}
            </p>

            <p className="mt-1 text-sm text-base-content/50">
              Delivered purchases
            </p>
          </div>

          <div className="group rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-error/10 text-error">
                <FaTimesCircle className="text-xl" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40">
                Cancelled
              </span>
            </div>

            <p className="mt-5 text-3xl font-extrabold text-error">
              {cancelledPurchases}
            </p>

            <p className="mt-1 text-sm text-base-content/50">
              Cancelled purchases
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg">
                <FaShoppingBag className="text-xl" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Purchase Requests
                </h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Manage student purchase requests and update their status
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold shadow-sm">
            <FaShoppingBag className="text-primary" />

            {purchases.length}{" "}
            {purchases.length === 1 ? "Purchase" : "Purchases"}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {purchases.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-base-300 bg-base-100 px-6 py-16 text-center shadow-sm sm:px-10 sm:py-20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <FaShoppingBag className="text-3xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                No purchase requests
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60">
                There are currently no student purchase requests available.
                New purchase requests will appear here automatically.
              </p>
            </div>
          ) : (
            purchases.map((purchase) => (
              <div
                key={purchase._id.toString()}
                className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Student Information */}

                <div className="relative overflow-hidden border-b border-base-300 bg-linear-to-r from-primary/5 via-secondary/5 to-accent/5 p-5 sm:p-6">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>

                  <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <FaUserCircle className="text-2xl" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-base-content/40">
                          Student
                        </p>

                        <p className="mt-1 break-all font-semibold">
                          {purchase.studentEmail}
                        </p>

                        <p className="mt-1 break-all font-mono text-xs text-base-content/50">
                          ID: {purchase.studentId}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
                      <FaShoppingBag />

                      Purchase Request
                    </div>
                  </div>

                  {/* <div>
                    <span className="badge badge-warning capitalize">
                      {purchase.status}
                    </span>
                  </div> */}
                </div>

                <div className="p-5 sm:p-6">
                  {/* Purchased Items */}

                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold">
                        Purchased Items
                      </h2>

                      <p className="mt-1 text-xs text-base-content/50">
                        Courses and combos included in this purchase
                      </p>
                    </div>

                    <div className="rounded-full bg-base-200 px-3 py-1.5 text-xs font-semibold text-base-content/60">
                      {purchase.items.length}{" "}
                      {purchase.items.length === 1 ? "Item" : "Items"}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {purchase.items.map((item) => (
                      <div
                        key={`${item.type}-${item.id}`}
                        className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-200/40 p-4 transition duration-300 hover:border-primary/20 hover:bg-primary/5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-100 text-primary shadow-sm ring-1 ring-base-300">
                            {item.type === "combo" ? (
                              <FaBoxOpen className="text-lg" />
                            ) : (
                              <FaBookOpen className="text-lg" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-semibold">
                              {item.title}
                            </p>

                            <p className="mt-1 text-sm capitalize text-base-content/50">
                              {item.type || "Course"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-base-content/40">
                            Price
                          </span>

                          <p className="text-lg font-bold text-primary">
                            ৳ {item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="my-6 border-t border-dashed border-base-300"></div>

                  {/* Total + Date */}

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-200/40 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FaCalendarAlt />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-base-content/40">
                          Purchase Date
                        </p>

                        <p className="mt-1 font-medium">
                          {new Date(
                            purchase.createdAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-primary/10 bg-primary/5 p-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
                          Total Amount
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-primary">
                          ৳ {purchase.totalPrice}
                        </p>
                      </div>

                      <FaArrowRight className="text-primary/40" />
                    </div>
                  </div>

                  {/* Status */}

                  <div className="mt-6 rounded-2xl border border-base-300 bg-base-200/30 p-4 sm:p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FaSpinner />
                      </div>

                      <label className="font-semibold">
                        Update Status
                      </label>
                    </div>

                    <PurchaseStatus
                      purchaseId={purchase._id.toString()}
                      currentStatus={purchase.status}
                    ></PurchaseStatus>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;