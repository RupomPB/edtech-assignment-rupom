"use server";

import { getCurrentUser } from "@/lib/authGuard";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const createPurchase = async (purchaseData) => {

  // logic that only student can make purchase 
  const user = await getCurrentUser();

  if (!user){
    return{
      success: false,
      messege:"You must be logged in"
    }
  }
// only student can purchase

  if(user.role !== "student"){
    return{
      success: false,
      messege: "Only students can make purchases"
    }
  }

  // check purchase data
  if(!purchaseData?.items || purchaseData.items.length === 0){
    return{
      success: false,
      message: "Your cart is empty"
    }
  }

  // create purchase using authenticated user data
  const newPurchase ={
    studentId: user.id,
    studentEmail: user.email,
    items: purchaseData.items,
    totalPrice: purchaseData.items.reduce(
      (total, item)=>total + item.price, 0,
    ),
    status:"pending",
    createdAt:new Date(),
  };


  const result = await dbConnect(collections.PURCHASES).insertOne(
    newPurchase,
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

// for student purchase

export const getPurchasesByStudent = async () => {

  // security for is student id authentic or not
  const user = await getCurrentUser();

  if(!user){
    return [];
  }

  if(user.role !== "student"){
    return [];
  }


  const purchases = await dbConnect(collections.PURCHASES)
  
    .find({ studentId: user.id }) //now anyone can't give other student id 
    .sort({ createdAt: -1 })
    .toArray();

  return purchases;
};

// for admin 

export const getAllPurchases = async () => {

  // checking if isAdmin 
  const user = await getCurrentUser();

  if(!user){
    return [];
  }

  if(user.role !== 'admin'){
    return [];
  }

  const purchases = await dbConnect(collections.PURCHASES)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return purchases;
};


// for status update logic 
export const updatedPurchaseStatus = async (purchaseId,status)=>{

  // check security for admin role only from server action

  const user = await  getCurrentUser();

  console.log("purchase status update request ", {
    userId: user?.id,
    role: user?.role,
    purchaseId,
    status
  });

  // check are user login
  if(!user){
    return{
      success: false,
      message: "You must be logged in",
    }
  }

  // only admin can update status

  if(user.role !== "admin"){
    return{
      success: false,
      message: "Only admin can update purchase status"
    }
  }

  // allowed statuses

  const allowedStatuses =[
    "pending",
    "processing",
    "delivered",
    "cancelled"
  ];

  if (!allowedStatuses.includes(status)) {
    return {
      success: false,
      message: "Invalid purchase status",
    };
  }

  // check valid Mongodb opjectid
  if(!ObjectId.isValid(purchaseId)){
    return{
      success: false,
      message: "Invalid purchase ID"
    }
  }



  const result = await dbConnect(collections.PURCHASES).updateOne(
    {
      _id: new ObjectId(purchaseId)
    },
    {
      $set:{
        status: status,
      },
    }
  );

  console.log("Purchase status update result ",{
    acknowledged: result.acknowledged,
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
  });
  

  if(!result.acknowledged){
    return{
      success: false,
      messege: "Failed to update purchase status"
    };
  }

  return{
    success: true,
    messege: "purchase status Updated"
  }

}