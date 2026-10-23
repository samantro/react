
import useBear from "../utils/useBear";

function BearCounter() {
  const bears = useBear((state) => state.bears);

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 text-center shadow-lg shadow-orange-100/50 sm:p-10">
        
        {/* Decorative Background */}
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-200/30 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-amber-200/40 blur-2xl" />

        <div className="relative">
          {/* Bear Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100 text-5xl shadow-sm">
            🐻
          </div>

          <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
            Live Population
          </span>

          {/* Bear Count */}
          <h1
            aria-live="polite"
            className="mt-5 text-7xl font-extrabold tracking-tight text-gray-900 sm:text-8xl"
          >
            {bears}
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-500">
            {bears === 1
              ? "bear around here..."
              : "bears around here..."}
          </p>

          {/* Status Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-30" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
            </span>

            <span className="text-sm font-medium text-gray-500">
              Zustand State Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  const bears = useBear((state) => state.bears);
  const increasePopulation = useBear(
    (state) => state.increasePopulation
  );
  const removeAllBears = useBear(
    (state) => state.removeAllBears
  );
  const updateBears = useBear(
    (state) => state.updateBears
  );

  return (
    <div className="mx-auto mt-6 w-full max-w-lg">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100/70 sm:p-8">

        {/* Controls Heading */}
        <div className="mb-7">
          <h2 className="text-xl font-bold text-gray-900">
            Population Controls
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your bear population in real time.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          {/* Increase */}
          <button
            type="button"
            onClick={increasePopulation}
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg active:scale-95"
          >
            <span className="text-xl font-bold">+</span>
            Add One Bear
          </button>

          {/* Set to 5 */}
          <button
            type="button"
            onClick={() => updateBears(5)}
            className="flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-5 py-3.5 text-sm font-semibold text-orange-600 transition-all duration-200 hover:bg-orange-100 active:scale-95"
          >
            <span className="text-lg">🐻</span>
            Set to 5
          </button>
        </div>

        {/* Custom Population Input */}
        <div className="mt-7">
          <label
            htmlFor="bear-count"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Custom Population
          </label>

          <div className="relative">
            <input
              id="bear-count"
              type="number"
              min="0"
              step="1"
              value={bears}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "") {
                  updateBears(0);
                  return;
                }

                const count = Number(value);

                if (
                  Number.isInteger(count) &&
                  count >= 0
                ) {
                  updateBears(count);
                }
              }}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-base font-medium text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              placeholder="Enter number of bears"
            />
          </div>

          <p className="mt-2 text-xs text-gray-400">
            Enter a non-negative whole number to update the count.
          </p>
        </div>

        {/* Divider */}
        <div className="my-7 border-t border-gray-100" />

        {/* Reset Button */}
        <button
          type="button"
          onClick={removeAllBears}
          disabled={bears === 0}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:border-red-300 hover:bg-red-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-red-200 disabled:hover:bg-red-50"
        >
          <span className="text-lg">↺</span>
          Remove All Bears
        </button>

        {/* Footer */}
        <p className="mt-5 text-center text-xs text-gray-400">
          Changes are instantly reflected in the counter.
        </p>
      </div>
    </div>
  );
}

export default BearCounter;
export { Controls };
