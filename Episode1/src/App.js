
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import BearCounter, { Controls } from "./components/BearCounter";
import useOnlineStatus from "./utils/useOnlineStatus";

const App = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900">

      {/* Header */}
      <Header />

      {/* Online Status Indicator */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-5 py-2 sm:px-8">
          <div
            role="status"
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${
              isOnline
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              {isOnline && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30" />
              )}

              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </span>

            {isOnline ? "You're Online" : "You're Offline"}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full flex-1">

        {isOnline ? (
          <>
            {/* React Router Pages */}
            <Outlet />

            {/* Zustand Demo Section */}
            <section className="border-t border-orange-100 bg-gradient-to-b from-orange-50/70 to-white px-4 py-16 sm:px-6 md:py-20">

              <div className="mx-auto max-w-5xl">

                {/* Section Heading */}
                <div className="mb-10 text-center">
                  <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600 shadow-sm">
                    React State Management
                  </span>

                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Zustand{" "}
                    <span className="text-orange-500">
                      Playground
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                    Explore how Zustand manages shared state
                    across React components with this
                    interactive bear population counter.
                  </p>
                </div>

                {/* Bear Counter Components */}
                <div className="mx-auto max-w-lg">
                  <BearCounter />
                  <Controls />
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Offline Screen */
          <section className="flex min-h-[65vh] items-center justify-center px-5 py-16">
            <div className="w-full max-w-lg text-center">

              {/* Offline Illustration */}
              <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-red-50">
                <div className="absolute inset-0 animate-pulse rounded-full border-4 border-red-100" />

                <svg
                  className="relative h-14 w-14 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M2 8.82a15 15 0 0 1 20 0" />
                  <path d="M5 12.86a10 10 0 0 1 14 0" />
                  <path d="M8.5 16.43a5 5 0 0 1 7 0" />
                  <path d="M12 20h.01" />
                  <path d="M3 3l18 18" />
                </svg>
              </div>

              {/* Offline Badge */}
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Connection Lost
              </span>

              {/* Offline Message */}
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Oops! You're{" "}
                <span className="text-orange-500">
                  Offline.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-md text-base leading-8 text-gray-500">
                It looks like you've lost your internet
                connection. Please check your Wi-Fi or mobile
                data and try again.
              </p>

              {/* Retry Button */}
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl active:scale-95"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 11a8 8 0 1 0-2.3 5.7" />
                  <path d="M20 4v7h-7" />
                </svg>

                Try Again
              </button>

              <p className="mt-6 text-xs text-gray-400">
                We'll automatically show your content when
                your connection is restored.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
