"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

export const postStudent = async (payload) => {
  const { email, password, name } = payload;

  // check payload
  if (!email || !password) return null;

  // check student
  const isExist = await dbConnect(collections.STUDENTS).findOne({
    email,
  });

  if (isExist) {
    return {
      success: false,
      message: "Student already exists",
    };
  }
  // create students
  const hashedPassword = await bcrypt.hash(password, 14);
  const newStudent = {
    provider: "credentials",
    name,
    email,
    password: hashedPassword,
    role: "student",
  };

  // insert student
  const result = await dbConnect(collections.STUDENTS).insertOne(newStudent);

  if (!result.acknowledged) {
    return {
      success: false,
      message: "Failed to create student",
    };
  }

  return {
    success: true,
    message: "Student created successfully",
    insertedId: result.insertedId.toString(),
  };
};

export const loginStudent = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;

  const student = await dbConnect(collections.STUDENTS).findOne({ email });
  if (!student) return null;

  const isMatched = await bcrypt.compare(password, student.password);
  if (isMatched) {
    return student;
  } else {
    return null;
  }
};

// update profile logic

export const updateStudentProfile = async (studentId, name) => {
  if (!studentId || !name?.trim()) {
    return {
      success: false,
      message: "Name is required",
    };
  }

  const result = await dbConnect(collections.STUDENTS).updateOne(
    {
      _id: new ObjectId(studentId),
    },
    {
      $set: {
        name: name.trim(),
      },
    }
  );

  if (!result.acknowledged) {
    return {
      success: false,
      message: "Failed to update profile",
    };
  }

  return {
    success: true,
    message: "Profile updated successfully",
  };
};