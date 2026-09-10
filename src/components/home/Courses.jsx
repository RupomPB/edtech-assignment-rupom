import React from "react";
import courses from "@/app/data/courses.json";
import CourseCard from "../cards/CourseCard";
const Courses = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Courses</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
