import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
      
      {/* Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden bg-base-200">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/30 bg-base-100/90 px-3.5 py-1.5 text-xs font-semibold text-base-content shadow-sm backdrop-blur-md">
            {course.category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Title */}
        <h3 className="line-clamp-2 min-h-14 text-xl font-bold leading-7 tracking-tight transition-colors duration-300 group-hover:text-primary">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-base-content/60">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/15 to-secondary/15 font-bold text-primary ring-1 ring-primary/10">
            {course.instructor.charAt(0)}
          </div>

          <div>
            <p className="text-xs font-medium text-base-content/50">
              Instructor
            </p>

            <p className="text-sm font-semibold">
              {course.instructor}
            </p>
          </div>
        </div>

        {/* Rating & Duration */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-base-300/70 bg-base-200/40 px-3.5 py-3 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-base">⭐</span>
            <span className="font-semibold">
              {course.rating}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-base-content/60">
            <span className="text-base">⏱️</span>
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-base-content/50">
              Course Price
            </p>

            <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-primary">
              ৳{course.price.toLocaleString()}
            </p>
          </div>

          <Link
             href={`/courses/${course._id}`}
          className="btn btn-primary rounded-full border-0 px-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;