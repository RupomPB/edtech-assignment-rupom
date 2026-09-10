import { ObjectId } from "mongodb";
import { collections, dbConnect } from "@/lib/dbConnect";
export const getCourses = async () => {
  const courses = await dbConnect(collections.COURSES).find({}).toArray();
  return courses;
};
export const getCourseById = async (id) => {
  console.log("ID received:", id);
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const query = { _id: new ObjectId(id) };
  const course = await dbConnect(collections.COURSES).findOne(query);
  console.log("Course from MongoDB:", course);
  return course;
};
