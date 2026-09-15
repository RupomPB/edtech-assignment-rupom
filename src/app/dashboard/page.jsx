import { getCurrentUser, requireRole } from "@/lib/authGuard";
import { redirect } from "next/navigation";
import { getPurchasesByStudent } from "@/actions/server/purchase";
import ProfileEdit from "@/components/dashboard/ProfileEdit";
import {
  FaUserCircle,
  FaShoppingBag,
  FaCheckCircle,
  FaClock,
  FaBoxOpen,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
} from "react-icons/fa";

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

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "badge-warning";

      case "processing":
        return "badge-info";

      case "delivered":
        return "badge-success";

      case "cancelled":
        return "badge-error";

      default:
        return "badge-neutral";
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>

          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-accent/5 blur-3xl"></div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold tracking-wider text-primary">
                  <FaGraduationCap />
                  STUDENT PORTAL
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Welcome back,{" "}
                  <span className="gradient-text">
                    {user?.name || "Student"}
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base">
                  Manage your profile, track your purchases, and stay updated
                  with your course order status from your personal dashboard.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-base-300 bg-base-200/70 px-4 py-2 text-sm">
                    <FaUserCircle className="text-primary" />
                    <span className="max-w-55 truncate">
                      {user.email}
                    </span>
                  </div>

                  <div className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium capitalize text-primary">
                    {user.role}
                  </div>
                </div>
              </div>

              <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-82.5">
                <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FaShoppingBag className="text-lg" />
                    </div>

                    <span className="text-xs font-medium text-base-content/40">
                      Orders
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-extrabold">
                    {purchases.length}
                  </p>

                  <p className="mt-1 text-xs text-base-content/50">
                    Total purchases
                  </p>
                </div>

                <div className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                      <FaCheckCircle className="text-lg" />
                    </div>

                    <span className="text-xs font-medium text-base-content/40">
                      Completed
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-extrabold text-success">
                    {
                      purchases.filter(
                        (purchase) => purchase.status === "delivered",
                      ).length
                    }
                  </p>

                  <p className="mt-1 text-xs text-base-content/50">
                    Delivered orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Profile */}
<div className="mt-10">
  <div className="mb-6 flex items-center justify-between gap-4">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg shadow-primary/20">
        <FaUserCircle className="text-xl" />
      </div>

      <div>
        <h2 className="text-2xl font-extrabold tracking-tight">
          My Profile
        </h2>

        <p className="mt-1 text-sm text-base-content/55">
          Manage your personal information
        </p>
      </div>
    </div>

    <div className="hidden rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary sm:block">
      Account Settings
    </div>
  </div>

  <div className="group relative overflow-hidden rounded-3xl border border-base-300/70 bg-base-100 shadow-md shadow-base-content/5 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
    
    {/* Decorative Background */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/8 blur-3xl transition-all duration-500 group-hover:bg-primary/12" />
    <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-secondary/8 blur-3xl transition-all duration-500 group-hover:bg-secondary/12" />

    <div className="relative">
      
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-base-300/60 px-5 py-4 sm:px-7">
        <div>
          <h3 className="text-sm font-bold">Personal Information</h3>
          <p className="mt-0.5 text-xs text-base-content/50">
            Keep your account details up to date
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-base-200 text-primary">
          <FaUserCircle className="text-lg" />
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-5 sm:p-7">
        <ProfileEdit user={user}></ProfileEdit>
      </div>
    </div>
  </div>
</div>

        {/* Purchases */}
        <div className="mt-12">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-secondary to-primary text-secondary-content shadow-lg">
                <FaShoppingBag className="text-xl" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  My Purchases
                </h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Track all your purchase requests and their current status
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold shadow-sm">
              <FaShoppingBag className="text-primary" />

              {purchases.length}{" "}
              {purchases.length === 1 ? "Purchase" : "Purchases"}
            </div>
          </div>

          {purchases.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-base-300 bg-base-100 px-6 py-16 text-center shadow-sm sm:px-10 sm:py-20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <FaBookOpen className="text-3xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                No purchases yet
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60">
                You have not made any purchase yet. Your purchased courses and
                combos will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {purchases.map((purchase) => (
                <div
                  key={purchase._id.toString()}
                  className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden border-b border-base-300 bg-linear-to-r from-primary/5 via-secondary/5 to-accent/5 p-5 sm:p-6">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <FaShoppingBag />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wider text-base-content/40">
                            Purchase ID
                          </p>

                          <p className="mt-1 break-all font-mono text-sm font-semibold text-base-content/80">
                            {purchase._id.toString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        <p className="text-xs font-bold uppercase tracking-wider text-base-content/40">
                          Current Status
                        </p>

                        <span
                          className={`badge badge-lg ${getStatusClass(
                            purchase.status,
                          )} gap-2 capitalize px-4 font-semibold`}
                        >
                          {purchase.status === "pending" && <FaClock />}

                          {purchase.status === "processing" && (
                            <FaBoxOpen />
                          )}

                          {purchase.status === "delivered" && (
                            <FaCheckCircle />
                          )}

                          {purchase.status === "cancelled" && (
                            <span>×</span>
                          )}

                          {purchase.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    {/* Items */}
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold">
                          Purchased Items
                        </h3>

                        <p className="mt-1 text-xs text-base-content/50">
                          Your selected courses and combos
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
                                {item.type}
                              </p>
                            </div>
                          </div>

                          <p className="shrink-0 text-lg font-bold text-primary">
                            ৳ {item.price}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="my-6 border-t border-dashed border-base-300"></div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-base-200 text-primary">
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

                      <div className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-4 sm:min-w-45 sm:text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
                          Total Amount
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-primary">
                          ৳ {purchase.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;