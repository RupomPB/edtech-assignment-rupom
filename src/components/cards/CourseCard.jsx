import Image from "next/image";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Title */}
        <h3 className="line-clamp-2 text-xl font-bold leading-7">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/60">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
            {course.instructor.charAt(0)}
          </div>

          <div>
            <p className="text-xs text-base-content/50">
              Instructor
            </p>

            <p className="text-sm font-semibold">
              {course.instructor}
            </p>
          </div>
        </div>

        {/* Rating & Duration */}
        <div className="mt-5 flex items-center justify-between border-y border-base-300 py-3 text-sm">
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span className="font-semibold">
              {course.rating}
            </span>
          </div>

          <div className="flex items-center gap-1 text-base-content/60">
            <span>⏱️</span>
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-base-content/50">
              Course Price
            </p>

            <p className="text-2xl font-bold text-primary">
              ৳{course.price.toLocaleString()}
            </p>
          </div>

          <button className="btn btn-primary rounded-full px-5">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;