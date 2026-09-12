import Image from "next/image";
import Link from "next/link";
import { getCourses, getCombos } from "@/actions/server/course";
import CartButton from "@/components/buttons/CartButton";

const CoursesPage = async () => {
  const [courses, combos] = await Promise.all([
    getCourses(),
    getCombos(),
  ]);

  return (
    <main className="min-h-screen">
      {/*  HEADER  */}
      <section className="container mx-auto px-4 pt-10 lg:pt-14">
        <div className="mb-10">
          <p className="font-semibold text-primary">Learn & Grow</p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Explore Our Courses
          </h1>

          <p className="mt-3 max-w-2xl text-base-content/60">
            Learn practical skills from our carefully designed courses and
            take your career to the next level.
          </p>
        </div>
      </section>

      {/*  COURSES  */}
      <section className="container mx-auto px-4 pb-14">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold">Single Courses</h2>

          <p className="mt-2 text-base-content/60">
            Choose a course and start learning today.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="flex min-h-[30vh] items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">No Courses Found</h2>

              <p className="mt-2 text-base-content/60">
                There are no courses available right now.
              </p>
            </div>
          </div>
        ) : (
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

                  {/* Info */}
                  <div className="mt-4 flex items-center justify-between text-sm text-base-content/60">
                    <span>⏱️ {course.duration}</span>

                    <span>⭐ {course.rating}</span>
                  </div>

                  {/* Price + Buttons */}
                  <div className="mt-5">
                    <p className="text-xs text-base-content/50">
                      Course Price
                    </p>

                    <p className="text-2xl font-extrabold text-primary">
                      ৳{course.price.toLocaleString()}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/courses/${course._id.toString()}`}
                        className="btn btn-primary flex-1 rounded-full"
                      >
                        View Details
                      </Link>

                      <CartButton course={course} type="course"></CartButton>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/*COMBO PACKAGES  */}

      <section className="container mx-auto px-4 pb-16">
        <div className="mb-6">
          <p className="font-semibold text-secondary">Save More</p>

          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Combo Packages
          </h2>

          <p className="mt-2 text-base-content/60">
            Get multiple courses together and save more with our special
            combo packages.
          </p>
        </div>

        {combos.length === 0 ? (
          <div className="flex min-h-[30vh] items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                No Combo Packages Found
              </h2>

              <p className="mt-2 text-base-content/60">
                There are no combo packages available right now.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {combos.map((combo) => (
              <article
                key={combo._id.toString()}
                className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={combo.thumbnail}
                    alt={combo.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />

                  {/* Discount */}
                  <span className="absolute right-3 top-3 rounded-full bg-error px-3 py-1 text-xs font-bold text-error-content">
                    {combo.discount}% OFF
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Combo Badge */}
                  <div className="mb-3">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {combo.totalCourses} Courses Included
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="line-clamp-2 text-xl font-bold">
                    {combo.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/60">
                    {combo.shortDescription}
                  </p>

                  {/* Rating */}
                  <div className="mt-4 flex items-center justify-between text-sm text-base-content/60">
                    <span>📚 {combo.totalCourses} Courses</span>

                    <span>⭐ {combo.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="mt-5">
                    <p className="text-xs text-base-content/50">
                      Regular Price
                    </p>

                    <p className="text-sm text-base-content/50 line-through">
                      ৳{combo.regularPrice.toLocaleString()}
                    </p>

                    <p className="text-2xl font-extrabold text-primary">
                      ৳{combo.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/combos/${combo._id.toString()}`}
                      className="btn btn-primary flex-1 rounded-full"
                    >
                      View Combo
                    </Link>

                    <CartButton type="combo" combo={combo}></CartButton>
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