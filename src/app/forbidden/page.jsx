import Link from "next/link";

const ForbiddenPage = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-error">
          403
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          Access Forbidden
        </h2>

        <p className="mt-2 text-gray-500">
          You do not have permission to access this page.
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-6"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenPage;