"use client";

import { useState } from "react";
import { updatedPurchaseStatus,  } from "@/actions/server/purchase";

const PurchaseStatus = ({ purchaseId, currentStatus }) => {
  const [status, setStatus] = useState(currentStatus);

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

    const result = await updatedPurchaseStatus(
      purchaseId,
      newStatus
    );

    if (!result.success) {
      alert(result.message);
      setStatus(currentStatus);
      return;
    }

    alert("Purchase status updated");
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Current Status */}
      <span
        className={`badge ${getStatusClass(status)} capitalize`}
      >
        {status}
      </span>

      {/* Update Status */}
      <select
        value={status}
        onChange={handleStatusChange}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="delivered">Delivered</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
};

export default PurchaseStatus;