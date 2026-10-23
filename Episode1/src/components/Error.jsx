
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const is404 = error?.status === 404;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 px-5 py-16">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Error Badge */}
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          {is404 ? "Page Not Found" : "Something Went Wrong"}
        </span>

        {/* Error Illustration */}
        <div className="relative mb-8">
          <h1 className="select-none text-[110px] font-black leading-none tracking-tighter text-orange-500 drop-shadow-sm sm:text-[160px] md:text-[200px]">
            {is404 ? "404" : "Oops!"}
          </h1>

          <div className="absolute -right-2 -top-4 hidden rotate-12 text-5xl sm:right-10 sm:block">
            🍕
          </div>

          <div className="absolute -bottom-2 left-2 hidden -rotate-12 text-5xl sm:left-12 sm:block">
            🍔
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            {is404
              ? "Oops! This Page Is Off the Menu."
              : "Oops! Something Went Wrong."}
          </h2>

          <p className="mx-auto max-w-lg text-base leading-8 text-gray-500">
            {is404
              ? "Looks like the page you're searching for doesn't exist. But don't worry, there's plenty of delicious food waiting for you!"
              : "We ran into an unexpected issue while loading this page. Please try again or head back to our homepage."}
          </p>

          {/* Error Details */}
          {error?.status && (
            <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-lg border border-orange-100 bg-orange-50 px-4 py-2 text-sm text-orange-700">
              <span className="font-semibold">
                Error {error.status}
              </span>
              {error.statusText && (
                <span className="truncate">
                  — {error.statusText}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl active:scale-95 sm:w-auto"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" />
              <path d="M9 21v-8h6v8" />
            </svg>

            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 active:scale-95 sm:w-auto"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 11a8 8 0 1 0-2.3 5.7" />
              <path d="M20 4v7h-7" />
            </svg>

            Try Again
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-400">
          Lost your appetite?{" "}
          <Link
            to="/"
            className="font-semibold text-orange-500 underline decoration-orange-200 underline-offset-4 transition-colors hover:text-orange-600"
          >
            Let's find something delicious!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Error;
