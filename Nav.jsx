import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              G
            </div>
            <span className="text-xl font-bold text-gray-900">
              GharDailo <span className="text-blue-600">Sewa</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </a>
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition">
              Login
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition shadow-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setOpen(false)}>Home</a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setOpen(false)}>Services</a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setOpen(false)}>How it Works</a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setOpen(false)}>Contact</a>
            <div className="border-t pt-3 mt-2 flex flex-col gap-2">
              <button className="text-gray-700 font-medium px-4 py-2 text-left">Login</button>
              <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}