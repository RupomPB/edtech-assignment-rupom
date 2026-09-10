import { ObjectId } from "mongodb";
import { collections, dbConnect } from "@/lib/dbConnect";

// for Courses
export const getCourses = async () => {
  const courses = await dbConnect(collections.COURSES)
    .find({})
    .toArray();

  return courses;
};

export const getCourseById = async (id) => {
  console.log("ID received:", id);

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const query = {
    _id: new ObjectId(id),
  };

  const course = await dbConnect(collections.COURSES)
    .findOne(query);

  console.log("Course from MongoDB:", course);

  return course;
};


// for Combos


export const getCombos = async () => {
  const combos = await dbConnect(collections.COMBOS)
    .find({})
    .toArray();

  return combos;
};

export const getComboById = async (id) => {
  console.log("Combo ID received:", id);

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const query = {
    _id: new ObjectId(id),
  };

  const combo = await dbConnect(collections.COMBOS)
    .findOne(query);

  console.log("Combo from MongoDB:", combo);

  return combo;
};