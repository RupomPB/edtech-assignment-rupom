const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-base-200 px-4">
      <div className="flex flex-col items-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>

          <span className="absolute h-10 w-10 animate-pulse rounded-full bg-primary/10"></span>
        </div>

        <h2 className="mt-5 text-xl font-bold">
          Loading Courses
        </h2>

        <p className="mt-2 text-sm text-base-content/60">
          Preparing your learning experience...
        </p>
      </div>
    </main>
  );
};

export default Loading;