
import { useParams, Link } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestrauntMenu(resId) || [];

  const restaurantName =
    menu[0]?.card?.card?.info?.name || "Restaurant";

  // Temporary menu items from your original component
  const menuItems = [
    {
      id: 1,
      name: "Biryani",
      description:
        "Aromatic basmati rice cooked with flavorful spices.",
      emoji: "🍛",
      category: "Popular",
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      description:
        "Soft paneer cubes simmered in a rich, creamy tomato gravy.",
      emoji: "🥘",
      category: "Vegetarian",
    },
    {
      id: 3,
      name: "Chicken Curry",
      description:
        "Tender chicken cooked in a delicious blend of Indian spices.",
      emoji: "🍗",
      category: "Non-Vegetarian",
    },
    {
      id: 4,
      name: "Dal Makhani",
      description:
        "Slow-cooked black lentils in a creamy, buttery gravy.",
      emoji: "🍲",
      category: "Vegetarian",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/60 via-white to-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm"
        >
          <Link
            to="/"
            className="font-medium text-gray-500 transition-colors hover:text-orange-500"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <span className="truncate font-semibold text-orange-600">
            {restaurantName}
          </span>
        </nav>

        {/* Restaurant Hero Section */}
        <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 p-7 text-white shadow-xl shadow-orange-500/15 sm:p-10 md:p-12">

          {/* Background Decorations */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 right-20 h-48 w-48 rounded-full bg-yellow-300/20 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              🍽️ Restaurant Details
            </span>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {restaurantName}
            </h1>

            <p className="max-w-lg text-sm leading-7 text-orange-50 sm:text-base">
              Explore delicious dishes, discover your favorites,
              and enjoy an amazing food experience.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm">
              <span>✨</span>
              Fresh Flavors, Happy Moments
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-4 right-6 hidden rotate-[-12deg] text-8xl drop-shadow-xl md:block">
            🍕
          </div>
        </section>

        {/* Menu Header */}
        <section className="mb-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-orange-500">
                Explore Our Dishes
              </span>

              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Restaurant <span className="text-orange-500">Menu</span>
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Discover something delicious to satisfy your cravings.
              </p>
            </div>

            {/* Item Count */}
            <div className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-orange-600">
              {menuItems.length} Items Available
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="grid gap-5 sm:grid-cols-2">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/40 sm:p-6"
            >

              {/* Food Emoji */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 text-4xl transition-transform duration-300 group-hover:scale-110">
                {item.emoji}
              </div>

              {/* Item Details */}
              <div className="min-w-0 flex-1">

                <span className="mb-2 inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-600">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-orange-600 sm:text-lg">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-orange-100 bg-orange-50/70 p-8 text-center sm:p-10">
          <div className="mb-4 text-4xl">😋</div>

          <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
            Craving Something Else?
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
            Explore more amazing restaurants and discover
            your next favorite meal.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 active:scale-95"
          >
            Explore Restaurants

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
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RestaurantMenu;
