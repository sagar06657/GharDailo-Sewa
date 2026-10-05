export default function Bok() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">

      {/* Heading */}
      <div className="mx-auto max-w-3xl px-4 text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-gray-700">
          <span>✦</span>
          Simple steps
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-blue-950 md:text-5xl lg:text-6xl">
          Book in <span className="text-blue-600">3 steps</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          A clear path from booking to getting things done.
        </p>

      </div>


      {/* Steps */}
      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-start gap-7 md:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1.8fr]">


          {/* STEP 1 */}
          <div>

            <div className="relative h-[280px] overflow-hidden rounded-[24px]">

              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
                01
              </span>

              <img
                src="/images/booking/service.jpg"
                alt="Choose a service"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

            <div className="mt-5 flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose a service
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Tell us what you need.
                </p>
              </div>

            </div>

          </div>


          {/* STEP 2 */}
          <div>

            <div className="relative h-[280px] overflow-hidden rounded-[24px]">

              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
                02
              </span>

              <img
                src="/images/booking/time.jpg"
                alt="Pick a time"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

            <div className="mt-5 flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-400 text-white">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Pick a time
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Choose a time that works for you.
                </p>
              </div>

            </div>

          </div>


          {/* STEP 3 */}
          <div>

            <div className="relative h-[360px] overflow-hidden rounded-[26px] md:h-[380px] lg:h-[410px]">

              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
                03
              </span>

              <img
                src="/images/booking/relax.jpg"
                alt="Relax while the professional arrives"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

            <div className="mt-5 flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Relax
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  A trusted professional comes to you.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}