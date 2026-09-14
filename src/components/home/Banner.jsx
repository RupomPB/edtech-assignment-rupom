import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="mx-auto w-11/12 py-10 md:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 px-6 py-10 shadow-sm md:px-12 md:py-14 lg:px-16 lg:py-16">
        
        {/* Decorative blur */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Content */}
          <div className="max-w-xl">
            <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              Learn More. Pay Less.
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-base-content md:text-5xl lg:text-6xl">
              Learn Skills That
              <span className="gradient-text block pb-1">
                Build Your Future
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-base-content/65 md:text-lg md:leading-8">
              Buy every course you need with up to{" "}
              <span className="font-bold text-primary">15% discount</span>.
              Start learning today and take your skills to the next level.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn btn-primary rounded-full border-0 px-7 shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
                Explore Courses
              </button>

              <button className="btn rounded-full border-primary/30 bg-base-100/70 px-7 text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-content hover:shadow-md">
                View Combos
              </button>
            </div>

            {/* Small info */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-base-content/60">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base-content">100+</span>{" "}
                Courses
              </div>

              <div className="h-5 w-px bg-base-300" />

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-primary">15%</span>{" "}
                Discount
              </div>

              <div className="h-5 w-px bg-base-300" />

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base-content">Expert</span>{" "}
                Instructors
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute h-64 w-64 rounded-full bg-primary/15 blur-3xl md:h-80 md:w-80" />

            <div className="relative w-full max-w-lg transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/assets/hero1.jpg"
                alt="Online learning courses"
                width={500}
                height={400}
                priority
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;