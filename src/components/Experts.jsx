export default function Experts() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-yellow-50 py-20 md:py-28">

      {/* Heading */}
      <div className="mx-auto max-w-3xl px-4 text-center">

        <div className="mb-3 text-sm font-medium text-gray-500">
          <span className="mr-2 text-yellow-500">✦</span>
          People first
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
          Meet local experts
        </h2>

        <p className="mt-3 text-sm text-gray-500 md:text-base">
          Skilled professionals ready to help.
        </p>

      </div>


      {/* Experts */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">

        {/* Expert 1 */}
        <div className="text-center">

          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full bg-blue-100 ring-4 ring-blue-100 md:h-44 md:w-44">

            <img
              src="/images/experts/expert-1.jpg"
              alt="Ahmed"
              className="h-full w-full object-cover"
            />

          </div>

          <h3 className="mt-4 font-semibold text-blue-950">
            Ahmed
          </h3>

          <p className="text-xs text-gray-500">
            Chef · Dubai
          </p>

        </div>


        {/* Expert 2 */}
        <div className="text-center">

          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full bg-blue-100 ring-4 ring-blue-100 md:h-44 md:w-44">

            <img
              src="/images/experts/expert-2.jpg"
              alt="Mariam"
              className="h-full w-full object-cover"
            />

          </div>

          <h3 className="mt-4 font-semibold text-blue-950">
            Mariam
          </h3>

          <p className="text-xs text-gray-500">
            Home Cleaning · Dubai
          </p>

        </div>


        {/* Expert 3 */}
        <div className="text-center">

          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full bg-blue-100 ring-4 ring-blue-100 md:h-44 md:w-44">

            <img
              src="/images/experts/expert-3.jpg"
              alt="Khalid"
              className="h-full w-full object-cover"
            />

          </div>

          <h3 className="mt-4 font-semibold text-blue-950">
            Khalid
          </h3>

          <p className="text-xs text-gray-500">
            Chef · Dubai
          </p>

        </div>


        {/* Expert 4 */}
        <div className="text-center">

          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full bg-blue-100 ring-4 ring-blue-100 md:h-44 md:w-44">

            <img
              src="/images/experts/expert-4.jpg"
              alt="Raza"
              className="h-full w-full object-cover"
            />

          </div>

          <h3 className="mt-4 font-semibold text-blue-950">
            Raza
          </h3>

          <p className="text-xs text-gray-500">
            Handyman · Dubai
          </p>

        </div>

      </div>


      {/* Button */}
      <div className="mt-10 text-center">

        <button className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
          Become a provider
        </button>

      </div>

    </section>
  );
}