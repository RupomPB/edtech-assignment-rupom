import { ObjectId } from "mongodb";
import { collections, dbConnect } from "@/lib/dbConnect";

// =========================
// Courses
// =========================

export const getCourses = async () => {
  const courses = await dbConnect(collections.COURSES)
    .find({})
    .toArray();

  return courses.map((course) => ({
    ...course,
    _id: course._id.toString(),
  }));
};

export const getCourseById = async (id) => {
  console.log("ID received:", id);

  if (!id || !ObjectId.isValid(id)) {
    return null;
  }

  const query = {
    _id: new ObjectId(id),
  };

  const course = await dbConnect(collections.COURSES)
    .findOne(query);

  console.log("Course from MongoDB:", course);

  if (!course) {
    return null;
  }

  return {
    ...course,
    _id: course._id.toString(),
  };
};

// =========================
// Combos
// =========================

export const getCombos = async () => {
  const combos = await dbConnect(collections.COMBOS)
    .find({})
    .toArray();

  return combos.map((combo) => ({
    ...combo,
    _id: combo._id.toString(),
  }));
};

export const getComboById = async (id) => {
  console.log("Combo ID received:", id);

  if (!id || !ObjectId.isValid(id)) {
    return null;
  }

  const query = {
    _id: new ObjectId(id),
  };

  const combo = await dbConnect(collections.COMBOS)
    .findOne(query);

  console.log("Combo from MongoDB:", combo);

  if (!combo) {
    return null;
  }

  return {
    ...combo,
    _id: combo._id.toString(),
  };
};