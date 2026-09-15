import React from "react";
import CourseCard from "../cards/CourseCard";
import { getCourses } from "@/actions/server/course";

const Courses = async () => {
  const courses = await getCourses();

  return (
    <div className="relative overflow-hidden py-6 sm:py-10">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="relative">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Learn & Grow
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Courses
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
            Build practical skills, learn from industry-focused courses, and
            take the next step toward your career goals.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-primary to-secondary"></div>
        </div>

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
    </div>
  );
};

export default Courses;