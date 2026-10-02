export default function Footer() {
  return (
    <footer className="bg-[#050b50] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Logo */}
        <div className="text-center">

          <h2 className="text-5xl font-bold">
            GharDailo
            <span className="ml-2 text-blue-400">✦</span>
          </h2>

          <p className="mt-4 text-sm text-white/70">
            Home Services. Made Simple.
          </p>

        </div>


        {/* Links */}
        <div className="mt-14 grid grid-cols-2 gap-10 text-sm md:grid-cols-4">

          <div>
            <h3 className="mb-4 font-semibold">
              SERVICES
            </h3>

            <div className="space-y-2 text-white/60">
              <p>Home Cleaning</p>
              <p>Plumbing</p>
              <p>Electrician</p>
              <p>Handyman</p>
              <p>Painting</p>
            </div>
          </div>


          <div>
            <h3 className="mb-4 font-semibold">
              LOCATIONS
            </h3>

            <div className="space-y-2 text-white/60">
              <p>Kathmandu</p>
              <p>Pokhara</p>
              <p>Lalitpur</p>
              <p>Bhaktapur</p>
              <p>Chitwan</p>
            </div>
          </div>


          <div>
            <h3 className="mb-4 font-semibold">
              COMPANY
            </h3>

            <div className="space-y-2 text-white/60">
              <p>About us</p>
              <p>How it works</p>
              <p>Become a provider</p>
              <p>Terms & conditions</p>
              <p>Contact us</p>
            </div>
          </div>


          <div>
            <h3 className="mb-4 font-semibold">
              SUPPORT
            </h3>

            <div className="space-y-2 text-white/60">
              <p>Help center</p>
              <p>Privacy policy</p>
              <p>Service policy</p>
              <p>FAQs</p>
              <p>Contact support</p>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2026 GharDailo Sewa. All rights reserved.
        </div>

      </div>

    </footer>
  );
}