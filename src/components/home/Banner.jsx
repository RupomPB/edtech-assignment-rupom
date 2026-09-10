import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="w-11/12 mx-auto py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary/10 px-6 py-10 md:px-12 lg:px-16">
        
        {/* Decorative blur */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
          
          {/* Content */}
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content">
              Learn More. Pay Less.
            </span>

            <h1 className="text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">
              Learn Skills That
              <span className="block text-primary">
                Build Your Future
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-base-content/70 md:text-lg">
              Buy every course you need with up to{" "}
              <span className="font-bold text-primary">15% discount</span>.
              Start learning today and take your skills to the next level.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <button className="btn btn-primary rounded-full px-7">
                Explore Courses
              </button>

              <button className="btn btn-outline rounded-full px-7">
                View Combos
              </button>
            </div>

            {/* Small info */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-base-content/60">
              <div>
                <span className="font-bold text-base-content">100+</span>{" "}
                Courses
              </div>

              <div>
                <span className="font-bold text-base-content">15%</span>{" "}
                Discount
              </div>

              <div>
                <span className="font-bold text-base-content">Expert</span>{" "}
                Instructors
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/assets/hero.png"
                alt="Online learning courses"
                width={500}
                height={400}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;