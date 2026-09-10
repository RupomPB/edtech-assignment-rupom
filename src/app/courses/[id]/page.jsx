
import Image from "next/image";
import { getCourseById } from "@/actions/server/course";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("ID:", id)

  const course = await getCourseById(id);
  console.log("COURSE DETAILS:", course);

  if (!course) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course Not Found</h1>
          <p className="mt-2 text-base-content/60">
            The course you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="border-b border-base-300 bg-base-100">
        <div className="container mx-auto px-4 py-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              {/* Category + Level */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  {course.category}
                </span>

                <span className="rounded-full bg-base-200 px-4 py-2 text-sm font-medium">
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {course.title}
              </h1>

              {/* Short Description */}
              <p className="mt-5 max-w-2xl text-lg leading-8 text-base-content/65">
                {course.shortDescription}
              </p>

              {/* Rating + Students */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-sm text-base-content/50">
                    Rating
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">👨‍🎓</span>
                  <span className="font-bold">
                    {course.students.toLocaleString()}
                  </span>
                  <span className="text-sm text-base-content/50">
                    Students
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">⏱️</span>
                  <span className="font-bold">{course.duration}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {course.instructor.charAt(0)}
                </div>

                <div>
                  <p className="text-xs text-base-content/50">
                    Course Instructor
                  </p>

                  <p className="font-bold">
                    {course.instructor}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-200 shadow-xl">
              <div className="relative aspect-video w-full">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Image Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-base-100/90 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-base-content/50">
                      Course Price
                    </p>

                    <p className="text-3xl font-extrabold text-primary">
                      ৳{course.price.toLocaleString()}
                    </p>
                  </div>

                  <button className="btn btn-primary rounded-full px-6">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Course Information */}
      <section className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">

            {/* About Course */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                About This Course
              </h2>

              <p className="mt-4 text-base leading-8 text-base-content/65">
                {course.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                What You’ll Get
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="text-xl text-success">✓</span>
                  <p className="text-base-content/70">
                    Learn modern web development
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl text-success">✓</span>
                  <p className="text-base-content/70">
                    Build real-world projects
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl text-success">✓</span>
                  <p className="text-base-content/70">
                    Full-stack development skills
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl text-success">✓</span>
                  <p className="text-base-content/70">
                    Job-ready development knowledge
                  </p>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                Course Description
              </h2>

              <p className="mt-4 leading-8 text-base-content/65">
                {course.shortDescription}
              </p>

              <p className="mt-4 leading-8 text-base-content/65">
                This complete bootcamp is designed especially for beginners.
                You will gradually learn the fundamentals and move toward
                modern full-stack web development technologies.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-6 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">

              <p className="text-sm text-base-content/50">
                Course Overview
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {course.title}
              </h3>

              {/* Price */}
              <div className="mt-6 border-b border-base-300 pb-6">
                <p className="text-sm text-base-content/50">
                  Course Price
                </p>

                <p className="mt-1 text-4xl font-extrabold text-primary">
                  ৳{course.price.toLocaleString()}
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-5 py-6">

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Level
                  </span>

                  <span className="font-semibold">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Duration
                  </span>

                  <span className="font-semibold">
                    {course.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Lessons
                  </span>

                  <span className="font-semibold">
                    {course.totalLessons}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Students
                  </span>

                  <span className="font-semibold">
                    {course.students.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Rating
                  </span>

                  <span className="font-semibold">
                    ⭐ {course.rating}
                  </span>
                </div>

              </div>

              {/* Enroll Button */}
              <button className="btn btn-primary w-full rounded-full text-base">
                Enroll Now
              </button>

              <p className="mt-4 text-center text-xs text-base-content/50">
                Start learning today and build your skills.
              </p>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
};

export default CourseDetailsPage;

