import Image from "next/image";
import Link from "next/link";
import { getCourses } from "@/actions/server/course";

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <main className="min-h-screen ">
      <section className="container mx-auto px-4 py-10 lg:py-14">

        {/* Header */}
        <div className="mb-10">
          <p className="font-semibold text-primary">
            Learn & Grow
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Explore Our Courses
          </h1>

          <p className="mt-3 max-w-2xl text-base-content/60">
            Learn practical skills from our carefully designed courses
            and take your career to the next level.
          </p>
        </div>

        {/* Empty State */}
        {courses.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                No Courses Found
              </h2>

              <p className="mt-2 text-base-content/60">
                There are no courses available right now.
              </p>
            </div>
          </div>
        ) : (
          /* Courses Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course._id.toString()}
                className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">

                  {/* Category + Level */}
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {course.category}
                    </span>

                    <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="line-clamp-2 text-xl font-bold">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/60">
                    {course.shortDescription}
                  </p>

                  {/* Course Info */}
                  <div className="mt-4 flex items-center justify-between text-sm text-base-content/60">
                    <span>
                      ⏱️ {course.duration}
                    </span>

                    <span>
                      ⭐ {course.rating}
                    </span>
                  </div>

                  {/* Price + Button */}
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-base-content/50">
                        Course Price
                      </p>

                      <p className="text-2xl font-extrabold text-primary">
                        ৳{course.price.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      href={`/courses/${course._id.toString()}`}
                      className="btn btn-primary rounded-full"
                    >
                      View Details
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </section>
    </main>
  );
};

export default CoursesPage;