import React from "react";
import CourseCard from "../cards/CourseCard";
import { getCourses } from "@/actions/server/course";

const Courses = async () => {
  const courses = await getCourses();

  return (
    <div>
      <h2 className="mb-10 text-center text-4xl font-bold">
        Our Courses
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course._id.toString()}
            course={{
              ...course,
              _id: course._id.toString(),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;