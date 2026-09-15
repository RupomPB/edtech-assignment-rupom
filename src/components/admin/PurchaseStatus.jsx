"use client";

import { useState } from "react";
import { updatedPurchaseStatus } from "@/actions/server/purchase";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const PurchaseStatus = ({ purchaseId, currentStatus }) => {
  const [status, setStatus] = useState(currentStatus);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;

    setStatus(newStatus);
    setLoading(true);

    try {
      const result = await updatedPurchaseStatus(purchaseId, newStatus);
      if (!result.success) {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: result.message || "Failed to update purchase status.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#6d28d9",
        });

        setStatus(currentStatus);
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Status Updated!",
        text: `Purchase status changed to ${newStatus}.`,
        confirmButtonText: "Great",
        confirmButtonColor: "#6d28d9",
      });

      // For updated MongoDB data status update imediately in ui
      router.refresh(); 

    } catch (error) {
      console.error("Status update error:", error);

      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "Something went wrong. Please try again.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#6d28d9",
      });

      setStatus(currentStatus);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Current Status */}
      <span className={`badge ${getStatusClass(status)} capitalize`}>
        {status}
      </span>

      {/* Update Status */}
      <select
        value={status}
        onChange={handleStatusChange}
        disabled={loading}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="delivered">Delivered</option>
        <option value="cancelled">Cancelled</option>
      </select>

      {
        loading && (
          <span className="text-sm text-gray-500">
            Updating...
          </span>
        )
      }

    </div>
  );
};

export default PurchaseStatus;