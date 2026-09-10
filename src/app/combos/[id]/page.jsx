import Image from "next/image";
import Link from "next/link";
import { getComboById } from "@/actions/server/course";
import CartButton from "@/components/buttons/CartButton";

const CombosDetailsPage = async ({ params }) => {
  const { id } = await params;

  const combo = await getComboById(id);

  if (!combo) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-base-200 px-4">
        <div className="text-center">
          <div className="text-7xl">📦</div>

          <h1 className="mt-5 text-3xl font-extrabold">
            Combo Not Found
          </h1>

          <p className="mt-3 text-base-content/60">
            The combo package you are looking for does not exist.
          </p>

          <Link
            href="/courses"
            className="btn btn-primary mt-6 rounded-full px-7"
          >
            Browse Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200">
      {/* ================= HERO ================= */}
      <section className="border-b border-base-300 bg-base-100">
        <div className="container mx-auto px-4 py-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                  Combo Package
                </span>

                <span className="rounded-full bg-error/10 px-4 py-2 text-sm font-bold text-error">
                  {combo.discount}% OFF
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {combo.title}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-lg leading-8 text-base-content/65">
                {combo.shortDescription}
              </p>

              {/* Rating + Courses */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>

                  <span className="font-bold">
                    {combo.rating}
                  </span>

                  <span className="text-sm text-base-content/50">
                    Rating
                  </span>
                </div>

                {/* Courses */}
                <div className="flex items-center gap-2">
                  <span className="text-xl">📚</span>

                  <span className="font-bold">
                    {combo.totalCourses}
                  </span>

                  <span className="text-sm text-base-content/50">
                    Courses Included
                  </span>
                </div>
              </div>

              {/* Savings */}
              <div className="mt-8 rounded-2xl border border-success/20 bg-success/10 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>

                  <div>
                    <p className="font-bold text-success">
                      Save ৳
                      {(
                        combo.regularPrice - combo.price
                      ).toLocaleString()}
                    </p>

                    <p className="text-sm text-base-content/60">
                      Compared to buying these courses separately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-200 shadow-xl">
              <div className="relative aspect-video w-full">
                <Image
                  src={combo.thumbnail}
                  alt={combo.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Price Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-base-100/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-base-content/50">
                      Combo Price
                    </p>

                    <p className="text-sm text-base-content/50 line-through">
                      ৳{combo.regularPrice.toLocaleString()}
                    </p>

                    <p className="text-3xl font-extrabold text-primary">
                      ৳{combo.price.toLocaleString()}
                    </p>
                  </div>

                  <button className="btn btn-primary rounded-full px-6">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMBO CONTENT ================= */}
      <section className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* MAIN CONTENT */}
          <div className="space-y-8 lg:col-span-2">
            {/* About Combo */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                About This Combo
              </h2>

              <p className="mt-4 text-base leading-8 text-base-content/65">
                {combo.shortDescription}
              </p>

              <p className="mt-4 text-base leading-8 text-base-content/65">
                This combo package brings together carefully selected
                courses to help you build your skills faster while
                saving money compared to purchasing each course
                separately.
              </p>
            </div>

            {/* Included Courses */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    Included Courses
                  </h2>

                  <p className="mt-1 text-sm text-base-content/50">
                    {combo.totalCourses} courses included in this package
                  </p>
                </div>

                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  {combo.totalCourses} Courses
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {combo.courseIds?.map((courseId, index) => (
                  <div
                    key={courseId}
                    className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-200 p-4"
                  >
                    {/* Number */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                      {index + 1}
                    </div>

                    {/* Course */}
                    <div className="min-w-0">
                      <p className="font-semibold">
                        {courseId
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() +
                              word.slice(1)
                          )
                          .join(" ")}
                      </p>

                      <p className="mt-1 text-xs text-base-content/50">
                        Included in this combo package
                      </p>
                    </div>

                    {/* Check */}
                    <div className="ml-auto text-xl text-success">
                      ✓
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold">
                Why Choose This Combo?
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-base-200 p-5">
                  <div className="text-2xl">💰</div>

                  <h3 className="mt-3 font-bold">
                    Save Money
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Get multiple courses at a discounted price.
                  </p>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <div className="text-2xl">📚</div>

                  <h3 className="mt-3 font-bold">
                    Multiple Courses
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Learn related skills together in one package.
                  </p>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <div className="text-2xl">🚀</div>

                  <h3 className="mt-3 font-bold">
                    Learn Faster
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Follow a structured learning path.
                  </p>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <div className="text-2xl">🎯</div>

                  <h3 className="mt-3 font-bold">
                    Career Focused
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Build practical skills for real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside>
            <div className="sticky top-6 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
              <p className="text-sm text-base-content/50">
                Combo Package
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {combo.title}
              </h3>

              {/* Pricing */}
              <div className="mt-6 border-b border-base-300 pb-6">
                <p className="text-sm text-base-content/50">
                  Regular Price
                </p>

                <p className="mt-1 text-lg text-base-content/50 line-through">
                  ৳{combo.regularPrice.toLocaleString()}
                </p>

                <p className="mt-1 text-4xl font-extrabold text-primary">
                  ৳{combo.price.toLocaleString()}
                </p>

                <span className="mt-3 inline-block rounded-full bg-success/10 px-3 py-1 text-sm font-bold text-success">
                  Save {combo.discount}%
                </span>
              </div>

              {/* Stats */}
              <div className="space-y-5 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Courses
                  </span>

                  <span className="font-semibold">
                    {combo.totalCourses}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Rating
                  </span>

                  <span className="font-semibold">
                    ⭐ {combo.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    Discount
                  </span>

                  <span className="font-semibold text-success">
                    {combo.discount}%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base-content/60">
                    You Save
                  </span>

                  <span className="font-semibold text-success">
                    ৳
                    {(
                      combo.regularPrice - combo.price
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action */}
              <CartButton combo= {combo} ></CartButton>

              <Link
                href="/courses"
                className="btn btn-outline mt-3 w-full rounded-full"
              >
                Browse More Courses
              </Link>

              <p className="mt-4 text-center text-xs text-base-content/50">
                Get all included courses with one purchase.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CombosDetailsPage;