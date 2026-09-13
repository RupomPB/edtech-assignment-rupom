"use client"

import { updatedPurchaseStatus } from "@/actions/server/purchase";
import { useState } from "react";

const PurchaseStatus =({currentStatus,purchaseId})=>{
   const [status, setStatus] = useState(currentStatus);


   const handleStatusChange = async (event)=>{
    const newStatus = event.target.value;

    setStatus(newStatus);

    const result = await updatedPurchaseStatus(
        purchaseId, 
        newStatus
    )

    if(!result.success){
        alert(result.messege);
        setStatus(currentStatus)
        return;
    }

    alert("Purchase status updated");

   }
   
   


  return (
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
  );



}
export default PurchaseStatus;