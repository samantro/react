
const User = ({ name }) => {
  return (
    <div className="w-full">

      {/* Profile Header */}
      <div className="mb-6 flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="relative mb-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-3xl font-extrabold text-white shadow-lg shadow-orange-500/20">
            {name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          {/* Online Indicator */}
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-white bg-green-500" />
        </div>

        {/* User Name */}
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
          {name}
        </h2>

        {/* Role Badge */}
        <span className="mt-3 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          React Developer
        </span>
      </div>

      {/* Divider */}
      <div className="mb-6 border-t border-gray-100" />

      {/* User Details */}
      <div className="space-y-4">

        {/* Age */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors duration-200 hover:bg-orange-50">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
            🎂
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">
              Age
            </p>

            <p className="mt-1 text-sm font-bold text-gray-900">
              25 Years
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors duration-200 hover:bg-orange-50">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
            📍
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">
              Location
            </p>

            <p className="mt-1 text-sm font-bold text-gray-900">
              Delhi, India
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors duration-200 hover:bg-orange-50">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
            ✉️
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-500">
              Email Address
            </p>

            <a
              href="mailto:vishal@example.com"
              className="mt-1 block break-all text-sm font-bold text-gray-900 transition-colors hover:text-orange-600"
            >
              vishal@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
        <span className="text-lg">⚛️</span>

        <span className="text-xs font-semibold text-orange-700">
          Built with React Functional Components
        </span>
      </div>
    </div>
  );
};

export default User;
