
import User from "./User";
import UserClass from "./ClassBased/UserClass";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/60 via-white to-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-20">

        {/* Hero Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            Get to Know Us
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-orange-500">Us.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Welcome to our restaurant app! We're passionate about
            connecting food lovers with delicious meals and making
            every food experience simple, enjoyable, and memorable.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        {/* Our Story Section */}
        <section className="mb-16 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm sm:p-10 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Text Content */}
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-orange-500">
                Who We Are
              </span>

              <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Good Food.
                <br />
                <span className="text-orange-500">
                  Great Experiences.
                </span>
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                We believe great food brings people together.
                Our restaurant app is designed to make discovering
                your favorite dishes and exploring new flavors
                easier than ever.
              </p>

              <p className="leading-8 text-gray-600">
                Whether you're craving comfort food or looking
                to try something new, we're here to make your
                food journey more exciting.
              </p>
            </div>

            {/* Decorative Food Card */}
            <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200 p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-300/30 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-400/20 blur-2xl" />

              <div className="relative text-center">
                <div className="mb-5 text-7xl sm:text-8xl">
                  🍔
                </div>

                <h3 className="text-2xl font-extrabold text-gray-800">
                  Made for Food Lovers
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-600">
                  Discover. Explore. Enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="mb-10 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-orange-500">
              The People Behind It
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Get to know the people behind our restaurant
              application.
            </p>
          </div>

          {/* Existing Components */}
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">

            {/* Functional Component */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl sm:p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  👨‍💻
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Functional Component
                  </h3>
                  <p className="text-xs text-gray-500">
                    React Hooks
                  </p>
                </div>
              </div>

              <User name={"Vishal Verma (Function Component)"} />
            </div>

            {/* Class Component */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl sm:p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
                  👨‍💼
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Class Component
                  </h3>
                  <p className="text-xs text-gray-500">
                    React Lifecycle
                  </p>
                </div>
              </div>

              <UserClass name={"Parent"} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
