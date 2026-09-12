"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const createPurchase = async (purchaseData) => {
  const result = await dbConnect(collections.PURCHASES).insertOne(
    purchaseData
  );

  if (!result.acknowledged) {
    return {
      success: false,
      message: "Purchase failed",
    };
  }

  return {
    success: true,
    message: "Purchase request created",
    insertedId: result.insertedId.toString(),
  };


  

};

export const getPurchasesByStudent = async (studentId) => {
  const purchases = await dbConnect(collections.PURCHASES)
    .find({ studentId })
    .sort({ createdAt: -1 })
    .toArray();

  return purchases;
};