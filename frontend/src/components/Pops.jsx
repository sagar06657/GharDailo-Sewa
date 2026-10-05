export default function Pops() {
  return (
    <section className="bg-gradient-to-b from-white via-yellow-50/40 to-yellow-100/60 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Step tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
            03 · Discover
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2456] mb-4">
          Popular services
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Everything your home needs.
        </p>

        {/* View all button */}
        <div className="flex justify-end mb-8">
          <button className="border border-[#1a2456] text-[#1a2456] hover:bg-[#1a2456] hover:text-white transition px-5 py-2.5 rounded-lg text-sm font-semibold">
            View all services
          </button>
        </div>

        {/* Collage grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start">

          {/* Home Cleaning */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600"
                alt="Home Cleaning"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <span className="absolute bottom-4 left-4 bg-white text-[#1a2456] text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              Home Cleaning
            </span>
          </div>

          {/* Electrical (offset down) */}
          <div className="relative group md:mt-16">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
                alt="Electrical"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <span className="absolute bottom-4 left-4 bg-white text-[#1a2456] text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              Electrical
            </span>
          </div>

          {/* Quote block (center) */}
          <div className="hidden md:flex flex-col justify-center px-4 py-8">
            <p className="text-xl lg:text-2xl text-[#1a2456] font-medium leading-snug mb-4">
              "Finally, a simple way to find help for home repairs."
            </p>
            <p className="text-sm text-gray-500 font-medium">
              — Uba Uddin · Riyadh
            </p>
          </div>

          {/* Plumbing (offset down more) */}
          <div className="relative group md:mt-32">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600"
                alt="Plumbing"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <span className="absolute bottom-4 left-4 bg-white text-[#1a2456] text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              Plumbing
            </span>
          </div>

          {/* AC Service (offset down) */}
          <div className="relative group md:mt-16">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1631545806609-20a8e2e5aeb8?w=600"
                alt="AC Service"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <span className="absolute bottom-4 left-4 bg-white text-[#1a2456] text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              AC Service
            </span>
          </div>

        </div>

        

        {/* Book a service button */}
        <div className="flex justify-center mt-14">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition shadow-md hover:shadow-lg">
            Book a service
          </button>
        </div>

      </div>
    </section>
  )
}