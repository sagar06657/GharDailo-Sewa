export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-gradient-to-b from-blue-700 via-blue-500 to-sky-300">

      {/* =========================
          Decorative clouds
      ========================== */}

      <div className="pointer-events-none absolute left-[-80px] top-[310px] h-40 w-72 rounded-full bg-white/90 blur-[2px]" />

      {/* <div className="pointer-events-none absolute left-[30px] top-[280px] h-28 w-52 rounded-full bg-white/90" /> */}

      <div className="pointer-events-none absolute right-[-100px] top-[390px] h-36 w-72 rounded-full bg-white/80 blur-[2px]" />


      {/* =========================
          Hero Content
      ========================== */}

      <div className="relative z-10 mx-auto w-full px-4 pb-0 pt-6 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Happy customers */}
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-medium text-white/90">
            <span className="text-lg">✦</span>

            <span>
              7.5K Happy Customers
            </span>

            <span className="text-lg">✦</span>
          </div>


          <h1 className="text-5xl font-bold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[82px]">

            Every Services,

            <br />

            At Your Door.

          </h1>


          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            Book trusted professionals for your home,
            <br className="hidden sm:block" />
            apartment, office, or property.
          </p>

        </div>


        {/* =========================
            Search / Booking Bar
        ========================== */}

        <div className="relative z-30 mx-auto mt-8 max-w-[730px]">

          <div className="flex flex-col gap-2 rounded-2xl border-4 border-white/80 bg-white p-1.5 shadow-2xl sm:flex-row">

            {/* Service */}
            <div className="flex min-h-[48px] flex-1 items-center gap-3 rounded-xl px-4">

              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-400"
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
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

            </div>


            {/* Divider */}
            <div className="hidden w-px bg-gray-200 sm:block" />


            {/* Location */}
            <div className="flex min-h-[48px] flex-1 items-center gap-3 rounded-xl border-t border-gray-100 px-4 sm:border-0">

              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-400"
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
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

            </div>


            {/* Button */}
            <button
              className="
                rounded-xl
                bg-blue-700
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-800
                active:scale-[0.98]
              "
            >
              Book a service
            </button>

          </div>

        </div>


        {/* =========================
            Provider Cards
        ========================== */}

        <div className="relative mx-auto mt-8 h-[390px] w-full max-w-[900px]">

          {/* LEFT OUTER */}
          <div
            className="
              absolute
              bottom-[-45px]
              left-[calc(50%-390px)]
              z-10
              h-[300px]
              w-[165px]
              rotate-[-13deg]
              overflow-hidden
              rounded-[24px_24px_0_0]
              border-2
              border-white/70
              shadow-2xl
              sm:h-[340px]
              sm:w-[190px]
            "
          >
            <img
              src="/images/providers/5.png"
              alt="Service provider"
              className="h-full w-full object-cover"
            />
          </div>


          {/* LEFT */}
          <div
            className="
              absolute
              bottom-[-25px]
              left-[calc(50%-270px)]
              z-20
              h-[330px]
              w-[175px]
              rotate-[-6deg]
              overflow-hidden
              rounded-[24px_24px_0_0]
              border-2
              border-white/70
              shadow-2xl
              sm:h-[370px]
              sm:w-[200px]
            "
          >
            <img
              src="/images/providers/2.png"
              alt="Service provider"
              className="h-full w-full object-cover"
            />
          </div>


          {/* CENTER */}
          <div
            className="
              absolute
              bottom-[-30px]
              left-1/2
              z-50
              h-[390px]
              w-[215px]
              -translate-x-1/2
              overflow-hidden
              rounded-[24px_24px_0_0]
              border-2
              border-white/80
              shadow-2xl
              sm:h-[430px]
              sm:w-[240px]
            "
          >
            <img
              src="/images/providers/1.png"
              alt="Featured service provider"
              className="h-full w-full object-cover"
            />
          </div>


          {/* RIGHT */}
          <div
            className="
              absolute
              bottom-[-25px]
              left-[calc(50%+95px)]
              z-20
              h-[330px]
              w-[175px]
              rotate-[6deg]
              overflow-hidden
              rounded-[24px_24px_0_0]
              border-2
              border-white/70
              shadow-2xl
              sm:h-[370px]
              sm:w-[200px]
            "
          >
            <img
              src="/images/providers/3.png"
              alt="Service provider"
              className="h-full w-full object-cover"
            />
          </div>


          {/* RIGHT OUTER */}
          <div
            className="
              absolute
              bottom-[-45px]
              left-[calc(50%+220px)]
              z-10
              h-[300px]
              w-[165px]
              rotate-[13deg]
              overflow-hidden
              rounded-[24px_24px_0_0]
              border-2
              border-white/70
              shadow-2xl
              sm:h-[340px]
              sm:w-[190px]
            "
          >
            <img
              src="/images/providers/4.png"
              alt="Service provider"
              className="h-full w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}