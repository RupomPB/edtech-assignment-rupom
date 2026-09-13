"use server";

import { getCurrentUser } from "@/lib/authGuard";
import { collections, dbConnect } from "@/lib/dbConnect";

export const createPurchase = async (purchaseData) => {

  // logic that only student can make purchase 
  const user = await getCurrentUser();

  if (!user){
    return{
      success: false,
      messege:"You must be logged in"
    }
  }

  if(user.role !== "student"){
    return{
      success: false,
      messege: "Only students can make purchases"
    }
  }



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

// for student 
export const getPurchasesByStudent = async (studentId) => {
  const purchases = await dbConnect(collections.PURCHASES)
    .find({ studentId })
    .sort({ createdAt: -1 })
    .toArray();

  return purchases;
};

// for admin
export const getAllPurchases = async () => {
  const purchases = await dbConnect(collections.PURCHASES)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return purchases;
};