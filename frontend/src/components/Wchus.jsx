export default function Wchus() {
  return (
    <section className="bg-gradient-to-b from-yellow-100/60 via-yellow-50/40 to-white py-20 md:py-28">

      {/* =========================
          Heading
      ========================== */}

      <div className="mx-auto max-w-3xl px-4 text-center">

        <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
          <span className="text-yellow-500">✦</span>
          Why us?
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-blue-950 md:text-5xl lg:text-6xl">
          Why choose us
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Local professionals, right when you need them.
        </p>

      </div>


      {/* =========================
          Main Content
      ========================== */}

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-start gap-8 lg:grid-cols-3">


          {/* =================================
              LEFT COLUMN
          ================================= */}

          <div>

            {/* Feature */}
            <div className="mb-6 flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-blue-950">
                  Verified professionals
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Work with trusted local service providers.
                </p>
              </div>

            </div>


            {/* Image */}
            <div className="h-[280px] overflow-hidden rounded-[24px] sm:h-[320px]">

              <img
                src="/images/providers/5.png"
                alt="Verified professional"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

            </div>

          </div>


          {/* =================================
              CENTER COLUMN
          ================================= */}

          <div>

            {/* Search Box */}
            <div className="rounded-[22px] bg-white p-1 shadow-[0_10px_35px_rgba(0,0,0,0.12)]">

              {/* Service */}
              <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4">

                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full text-sm outline-none placeholder:text-gray-400"
                />

              </div>


              {/* Location */}
              <div className="flex items-center gap-3 px-4 py-4">

                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Select your location"
                  className="w-full text-sm outline-none placeholder:text-gray-400"
                />

              </div>


              {/* Button */}
              <button
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Book a service
              </button>

            </div>


            {/* Clear pricing */}
            <div className="mt-6 flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white">
                $
              </div>

              <div>
                <h3 className="font-semibold text-blue-950">
                  Clear pricing
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Know what you're paying for.
                </p>
              </div>

            </div>


            {/* Easy booking */}
            <div className="mt-6 flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-400 text-white">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-blue-950">
                  Easy booking
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Book in just a few clicks.
                </p>
              </div>

            </div>

          </div>


          {/* =================================
              RIGHT COLUMN
          ================================= */}

          <div>

            {/* Image */}
            <div className="h-[320px] overflow-hidden rounded-[24px]">

              <img
                src="/images/why-us/support.jpg"
                alt="Professional helping customer"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

            </div>


            {/* Support */}
            <div className="mt-5 flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-blue-950">
                  Support when needed
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  We're here if something goes wrong.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}