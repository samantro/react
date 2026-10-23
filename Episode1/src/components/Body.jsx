
import Card from "./Card";
import CardData from "../utils/cardData";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [appliedSearch, setAppliedSearch] = useState("");

  // Apply search and rating filters together
  const filteredRestaurants = CardData.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(appliedSearch.toLowerCase());

    const matchesRating =
      activeFilter === "all" || Number(card.rating) >= 4.5;

    return matchesSearch && matchesRating;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setAppliedSearch(searchText.trim());
  };

  const handleReset = () => {
    setSearchText("");
    setAppliedSearch("");
    setActiveFilter("all");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <section className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-6 py-12 text-white shadow-xl shadow-orange-500/15 sm:px-10 md:py-16">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 right-32 h-56 w-56 rounded-full bg-yellow-300/20 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span>✦</span>
              Discover Great Food
            </span>

            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Hungry?
              <br />
              We've Got You Covered.
            </h1>

            <p className="max-w-lg text-sm leading-7 text-orange-50 sm:text-base">
              Discover delicious meals from amazing restaurants.
              Explore your favorites and find something new
              to satisfy your cravings.
            </p>
          </div>

          {/* Decorative Emoji */}
          <div className="pointer-events-none absolute bottom-4 right-8 hidden rotate-[-12deg] text-8xl drop-shadow-2xl lg:block">
            🍔
          </div>
        </section>

        {/* Search & Filters */}
        <section className="mb-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              Find Your Favorite Restaurant
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Search restaurants or explore our top-rated picks.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search Input */}
            <form
              onSubmit={handleSearch}
              className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-xl"
            >
              <div className="relative flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search restaurants..."
                  aria-label="Search restaurants"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg active:scale-95"
              >
                Search
              </button>
            </form>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === "all"
                    ? "border-orange-500 bg-orange-50 text-orange-600 shadow-sm"
                    : "border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50"
                }`}
              >
                All Restaurants
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter("top")}
                className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === "top"
                    ? "border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50"
                }`}
              >
                <span className="text-base">⭐</span>
                Top Rated 4.5+
              </button>
            </div>
          </div>
        </section>

        {/* Restaurant Listing */}
        <section>
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">

            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-orange-500">
                Explore Restaurants
              </span>

              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {activeFilter === "top"
                  ? "Top Rated Restaurants"
                  : "Restaurants Near You"}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-orange-600">
                  {filteredRestaurants.length}
                </span>{" "}
                {filteredRestaurants.length === 1
                  ? "restaurant"
                  : "restaurants"}
              </p>
            </div>

            {/* Reset Filters */}
            {(appliedSearch || activeFilter !== "all") && (
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                <span className="text-lg">↺</span>
                Clear Filters
              </button>
            )}
          </div>

          {/* Restaurant Cards */}
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredRestaurants.map((card) => (
                <div
                  key={card.id}
                  className="min-w-0 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Card card={card} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-orange-200 bg-orange-50/40 px-6 py-12 text-center">

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
                🔍
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                No Restaurants Found
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                We couldn't find any restaurants matching your
                search. Try another name or reset your filters.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 active:scale-95"
              >
                View All Restaurants
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Body;
