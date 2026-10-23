
const Card = ({ card }) => {
  const { logo, title, subtitle, rating, time } = card;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50">

      {/* Restaurant Image */}
      <div className="relative h-48 w-full overflow-hidden bg-orange-50 sm:h-52">
        <img
          src={logo}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Image Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 shadow-md backdrop-blur-sm">
          <svg
            className="h-4 w-4 fill-green-600 text-green-600"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
          </svg>

          <span className="text-sm font-bold text-gray-900">
            {rating}
          </span>
        </div>

        {/* Delivery Time Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 shadow-md backdrop-blur-sm">
          <svg
            className="h-4 w-4 text-orange-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>

          <span className="text-xs font-bold text-gray-800">
            {time} min
          </span>
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="flex flex-1 flex-col p-5">

        {/* Restaurant Name */}
        <h3 className="truncate text-lg font-extrabold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-orange-600">
          {title}
        </h3>

        {/* Cuisine / Description */}
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {subtitle}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-gray-100" />

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-base">
              🍽️
            </span>

            <span className="text-xs font-medium text-gray-500">
              Restaurant
            </span>
          </div>

          <span className="flex items-center gap-1 text-xs font-bold text-orange-500 transition-all duration-200 group-hover:gap-2">
            Explore
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
