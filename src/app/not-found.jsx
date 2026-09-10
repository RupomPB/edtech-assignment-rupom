'use client'
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-base-200 px-4 py-16">
      <div className="w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
          <SearchX size={46} strokeWidth={1.8} />
        </div>

        {/* 404 */}
        <p className="mt-8 text-7xl font-black tracking-tight text-primary md:text-8xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-base-content/60 md:text-lg">
          Sorry, the page you are looking for doesn&apos;t exist or may
          have been moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="btn btn-primary rounded-full px-7"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-outline rounded-full px-7"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>
    </main>
  );
};

export default NotFound;