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
    <main className="min-h-screen bg-base-200">
      {/*  HEADER  */}
      <section className="relative overflow-hidden bg-base-100 py-16 sm:py-20 lg:py-24">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Learn & Grow
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Explore Our{" "}
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Courses
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-base-content/60 sm:text-lg">
              Learn practical skills from our carefully designed courses and
              take your career to the next level.
            </p>
          </div>
        </div>
      </section>

      {/*  COURSES  */}
      <section className="container mx-auto px-4 py-14 sm:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              Learn Something New
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Single Courses
            </h2>

            <p className="mt-2 max-w-2xl text-base-content/60">
              Choose a course and start learning today.
            </p>
          </div>

          <div className="rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold shadow-sm">
            {courses.length} {courses.length === 1 ? "Course" : "Courses"}
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="flex min-h-[30vh] items-center justify-center rounded-3xl border border-dashed border-base-300 bg-base-100 p-10">
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
                className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-base-300">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Category + Level */}
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                      {course.category}
                    </span>

                    <span className="rounded-full bg-base-200 px-3 py-1.5 text-xs font-semibold text-base-content/70">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="line-clamp-2 min-h-14 text-xl font-extrabold leading-7">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-base-content/60">
                    {course.shortDescription}
                  </p>

                  {/* Info */}
                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-base-200/70 px-4 py-3 text-sm">
                    <span className="font-medium text-base-content/60">
                      ⏱️ {course.duration}
                    </span>

                    <span className="font-semibold text-base-content/70">
                      ⭐ {course.rating}
                    </span>
                  </div>

                  {/* Price + Buttons */}
                  <div className="mt-5 border-t border-base-300 pt-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-base-content/45">
                      Course Price
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-primary">
                      ৳{course.price.toLocaleString()}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/courses/${course._id.toString()}`}
                        className="btn btn-primary flex-1 rounded-full border-0 bg-linear-to-r from-primary to-secondary font-bold shadow-md shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
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

      <section className="relative overflow-hidden bg-base-100 py-16 sm:py-20">
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="relative container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-widest text-secondary">
                Save More
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Combo Packages
              </h2>

              <p className="mt-2 max-w-2xl text-base-content/60">
                Get multiple courses together and save more with our special
                combo packages.
              </p>
            </div>

            <div className="rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-semibold text-secondary">
              {combos.length} {combos.length === 1 ? "Combo" : "Combos"}
            </div>
          </div>

          {combos.length === 0 ? (
            <div className="flex min-h-[30vh] items-center justify-center rounded-3xl border border-dashed border-base-300 bg-base-100 p-10">
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
                  className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-secondary/20 hover:shadow-2xl"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-base-300">
                    <Image
                      src={combo.thumbnail}
                      alt={combo.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Discount */}
                    <span className="absolute right-4 top-4 rounded-full bg-error px-3 py-1.5 text-xs font-extrabold text-error-content shadow-lg">
                      {combo.discount}% OFF
                    </span>

                    <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      {combo.totalCourses} Courses Included
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Combo Badge */}
                    <div className="mb-4">
                      <span className="rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-bold text-secondary">
                        {combo.totalCourses} Courses Included
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="line-clamp-2 min-h-14 text-xl font-extrabold leading-7">
                      {combo.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-base-content/60">
                      {combo.shortDescription}
                    </p>

                    {/* Rating */}
                    <div className="mt-5 flex items-center justify-between rounded-2xl bg-base-200/70 px-4 py-3 text-sm">
                      <span className="font-medium text-base-content/60">
                        📚 {combo.totalCourses} Courses
                      </span>

                      <span className="font-semibold text-base-content/70">
                        ⭐ {combo.rating}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-5 border-t border-base-300 pt-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-base-content/45">
                        Regular Price
                      </p>

                      <p className="mt-1 text-sm font-medium text-base-content/45 line-through">
                        ৳{combo.regularPrice.toLocaleString()}
                      </p>

                      <p className="mt-0.5 text-2xl font-extrabold text-primary">
                        ৳{combo.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/combos/${combo._id.toString()}`}
                        className="btn btn-primary flex-1 rounded-full border-0 bg-linear-to-r from-primary to-secondary font-bold shadow-md shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
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
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;