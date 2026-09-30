import { useState } from "react";

/* ---------- data ---------- */
const NAV = ["Services", "How it works", "Locations", "Become a provider"];

const SERVICES = [
  { name: "Home Cleaning", c: "from-amber-200 to-emerald-300" },
  { name: "Electrical", c: "from-stone-200 to-emerald-400" },
  { name: "Plumbing", c: "from-slate-300 to-emerald-300" },
  { name: "AC Service", c: "from-lime-200 to-green-500" },
  { name: "Painting", c: "from-orange-100 to-emerald-300" },
];

const PILLS = [
  ["Car Driver", "bg-blue-500"], ["AC Service", "bg-red-500"], ["Home Cleaning", "bg-sky-500"],
  ["Chef", "bg-orange-400"], ["Gardener", "bg-violet-400"], ["Painting", "bg-green-500"],
  ["Plumbing", "bg-fuchsia-400"], ["Laundry", "bg-red-400"], ["Electrical", "bg-blue-400"],
];

const STEPS = [
  { n: "01", t: "Choose a service", d: "Tell us what you need.", c: "from-stone-200 to-stone-400" },
  { n: "02", t: "Pick a time", d: "Choose a time that works for you.", c: "from-amber-100 to-stone-300" },
  { n: "03", t: "Relax", d: "A professional comes to you.", c: "from-emerald-200 to-stone-300" },
];

const EXPERTS = [
  { n: "Ahmed", r: "Chef · Dubai", bg: "bg-sky-400" },
  { n: "Mariam", r: "Home Cleaning · Dubai", bg: "bg-sky-300" },
  { n: "Khalid", r: "Chef · Dubai", bg: "bg-sky-500" },
  { n: "Raza", r: "Handyman · Riyadh", bg: "bg-sky-400" },
];

const REVIEWS = [
  { q: "Booking was simple and the professional arrived on time. Everything was handled smoothly.", n: "Sr. Sudaisi · Dubai" },
  { q: "Very easy to book and the service was excellent.", n: "Dr. Ralph · Doha" },
  { q: "Finally, a simple way to find help for home repairs.", n: "Abu Ubayda · Riyadh" },
];

const FAQ = [
  ["How much does it cost?", "Pricing depends on the service. You see a clear price before you confirm your booking."],
  ["Which areas do you cover?", "We cover major cities across the region, with more being added regularly."],
  ["Are service providers verified?", "Yes. Every provider is identity-checked and reviewed before joining."],
  ["Can I reschedule my booking?", "Yes, you can change the time from your bookings page."],
  ["What payment methods are available?", "Cards, wallets and cash on completion in supported areas."],
];

const FOOTER = {
  Services: ["Home Cleaning", "AC Service", "Plumbing", "Electrical", "Handyman", "Painting"],
  Locations: ["Dubai", "Abu Dhabi", "Doha", "Riyadh", "Jeddah", "Dammam"],
  Company: ["About us", "How it works", "Become a provider", "Contact", "Contact us"],
  Support: ["Help center", "FAQs", "Service policy", "Privacy policy", "Terms & conditions"],
};

/* ---------- small pieces ---------- */
const Btn = ({ children, variant = "solid", className = "" }) => (
  <button
    className={`rounded-md px-4 py-2 text-sm font-medium transition ${
      variant === "solid"
        ? "bg-blue-700 text-white hover:bg-blue-800"
        : variant === "light"
        ? "bg-white text-blue-700 hover:bg-blue-50"
        : "border border-blue-700 bg-white text-blue-700 hover:bg-blue-50"
    } ${className}`}
  >
    {children}
  </button>
);

const Heading = ({ tag, title, sub, dark }) => (
  <div className="mb-10 text-center">
    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] text-slate-600 shadow-sm">
      {tag}
    </span>
    <h2 className={`text-4xl font-extrabold tracking-tight md:text-5xl ${dark ? "text-white" : "text-blue-950"}`}>
      {title}
    </h2>
    <p className={`mt-3 text-sm ${dark ? "text-blue-100" : "text-slate-500"}`}>{sub}</p>
  </div>
);

const Photo = ({ c, className = "", children }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${c} ${className}`}>{children}</div>
);

const Label = ({ children }) => (
  <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow">
    {children}
  </span>
);

const Avatar = ({ className = "" }) => (
  <div className={`flex items-end justify-center overflow-hidden rounded-full bg-sky-300 ${className}`}>
    <div className="h-2/3 w-1/2 rounded-t-full bg-amber-700/80" />
  </div>
);

const Pills = () => (
  <div className="relative bg-yellow-300 py-6">
    <div className="absolute inset-x-0 top-0 h-2 bg-[radial-gradient(circle_at_50%_0,transparent_6px,white_7px)] bg-[length:16px_8px]" />
    <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 px-4">
      {PILLS.map(([n, c]) => (
        <span key={n} className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
          <span className={`h-4 w-4 rounded-full ${c}`} />
          {n}
        </span>
      ))}
    </div>
  </div>
);

/* ---------- page ---------- */
export default function NazilLanding() {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-500 to-sky-200 pb-0 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div className="text-2xl font-bold">✦ نازل</div>
          <ul className="hidden gap-7 text-xs md:flex">
            {NAV.map((n) => (
              <li key={n}><a href="#" className="hover:underline">{n}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-xs">
            <a href="#">العربية</a>
            <a href="#">Log in</a>
            <Btn variant="light">Book a service</Btn>
          </div>
        </nav>

        <div className="mx-auto max-w-3xl px-5 pb-10 pt-12 text-center">
          <p className="mb-5 text-[11px] text-blue-100">🌿 7.5K Happy Customers 🌿</p>
          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
            Home services,<br />made easy
          </h1>
          <p className="mx-auto mt-6 max-w-sm text-xs text-blue-100">
            Book trusted professionals for your home, apartment, office, or property.
          </p>
          <div className="mx-auto mt-7 flex max-w-xl items-center gap-2 rounded-lg bg-white p-1.5 shadow-lg ring-4 ring-white/30">
            <input className="min-w-0 flex-1 rounded-md bg-slate-50 px-3 py-2.5 text-xs text-slate-700 outline-none" placeholder="What service do you need?" />
            <input className="min-w-0 flex-1 rounded-md bg-slate-50 px-3 py-2.5 text-xs text-slate-700 outline-none" placeholder="Select your location" />
            <Btn>Book a service</Btn>
          </div>
        </div>

        {/* fanned worker cards */}
        <div className="relative mx-auto flex h-72 max-w-3xl items-end justify-center">
          {[
            { r: "-rotate-12 translate-y-10 h-44 w-36", c: "from-sky-300 to-amber-200" },
            { r: "-rotate-6 translate-y-4 h-56 w-40", c: "from-sky-300 to-amber-200" },
            { r: "h-72 w-48 z-10", c: "from-sky-200 to-amber-300" },
            { r: "rotate-6 translate-y-4 h-56 w-40", c: "from-sky-300 to-amber-200" },
            { r: "rotate-12 translate-y-10 h-44 w-36", c: "from-sky-300 to-amber-200" },
          ].map((x, i) => (
            <div key={i} className={`-mx-3 shrink-0 overflow-hidden rounded-2xl border-4 border-white/70 bg-gradient-to-b ${x.c} ${x.r}`}>
              <div className="mx-auto mt-8 h-16 w-16 rounded-full bg-amber-800/70" />
            </div>
          ))}
        </div>
      </section>

      {/* main body on sky→yellow gradient */}
      <div className="bg-gradient-to-b from-sky-200 via-yellow-100 to-yellow-200 px-4 pb-16">
        {/* POPULAR SERVICES */}
        <section className="relative -mt-2 mx-auto max-w-6xl rounded-3xl bg-white px-6 py-14 md:px-10">
          <Heading tag="01 DISCOVER" title="Popular services" sub="Everything your home needs." />
          <div className="grid gap-4 md:grid-cols-4">
            <Photo c={SERVICES[0].c} className="h-48"><Label>Home Cleaning</Label></Photo>
            <Photo c={SERVICES[1].c} className="h-48"><Label>Electrical</Label></Photo>
            <div className="md:col-span-2 flex items-start justify-between gap-4 p-2">
              <p className="text-lg text-slate-600">
                “Finally, a simple way to find help for home repairs.”
                <span className="mt-2 block text-xs text-slate-500">— Uba Ulala · Riyadh</span>
              </p>
              <Btn variant="outline" className="shrink-0">View all services</Btn>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SERVICES.slice(2).map((s) => (
              <Photo key={s.name} c={s.c} className="h-52"><Label>{s.name}</Label></Photo>
            ))}
          </div>
          <div className="mt-8 text-center"><Btn>Book a service</Btn></div>
        </section>

        {/* 3 STEPS */}
        <section className="mx-auto mt-8 max-w-6xl rounded-3xl bg-white px-6 py-14 md:px-10">
          <Heading tag="02 Simple steps" title="Book in 3 steps" sub="A clear path from task to trusted help." />
          <div className="grid gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className={i === 2 ? "md:col-span-2" : ""}>
                <Photo c={s.c} className="h-56">
                  <span className="absolute left-3 top-3 rounded bg-white px-2 py-0.5 text-[10px] font-semibold">{s.n}</span>
                </Photo>
                <h3 className="mt-3 text-sm font-semibold text-blue-950">{s.t}</h3>
                <p className="text-xs text-slate-500">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mx-auto mt-12 max-w-6xl px-2 py-10">
          <Heading tag="03 Why choose" title="Why choose us" sub="Local professionals, right where you need them." />
          <div className="grid items-start gap-6 md:grid-cols-3">
            <div className="space-y-5">
              <Feature color="bg-blue-500" t="Verified professionals" d="Work with trusted service providers." />
              <Photo c="from-sky-200 to-blue-400" className="h-48" />
            </div>
            <div className="space-y-4">
              <div className="space-y-2 rounded-xl bg-white p-3 shadow">
                <div className="rounded bg-slate-50 px-3 py-2 text-[11px] text-slate-400">What service do you need?</div>
                <div className="rounded bg-slate-50 px-3 py-2 text-[11px] text-slate-400">Select your location</div>
                <Btn className="w-full">Book a service</Btn>
              </div>
              <Feature color="bg-orange-400" t="Clear pricing" d="Know what you're paying for." />
              <Feature color="bg-violet-400" t="Easy booking" d="Book in just a few clicks." />
            </div>
            <div className="space-y-4">
              <Photo c="from-stone-200 to-slate-400" className="h-48" />
              <Feature color="bg-green-500" t="Support when needed" d="We're here if something goes wrong." />
            </div>
          </div>
        </section>
      </div>

      <Pills />

      <div className="bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-50 px-4 pb-16">
        {/* EXPERTS */}
        <section className="mx-auto max-w-5xl py-14">
          <Heading tag="04 People first" title="Meet local experts" sub="Skilled professionals ready to help." />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {EXPERTS.map((e) => (
              <div key={e.n} className="text-center">
                <Avatar className={`mx-auto h-40 w-40 ${e.bg}`} />
                <p className="-mt-3 text-sm font-semibold text-blue-950">
                  <span className="mr-1 rounded bg-yellow-300 px-1.5 py-0.5 text-[10px]">★ 4.8</span>
                  {e.n}
                </p>
                <p className="text-xs text-slate-500">{e.r}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center"><Btn>Become a provider</Btn></div>
        </section>

        {/* REVIEWS */}
        <section className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-14 md:px-10">
          <Heading tag="05 Community" title="Loved by customers" sub="A clear path from task to trusted help." />
          <div className="grid gap-8 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.n}>
                <Avatar className="mb-2 h-7 w-7" />
                <div className="mb-2 text-xs tracking-widest text-orange-400">★★★★★</div>
                <blockquote className="text-xs leading-relaxed text-slate-600">“{r.q}”</blockquote>
                <figcaption className="mt-3 text-xs font-medium text-slate-700">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-2xl py-16">
          <Heading tag="06 Help" title="Questions, answered" sub="Local professionals, right where you need them." />
          <div className="divide-y divide-slate-300/70">
            {FAQ.map(([q, a], i) => (
              <div key={q} className="py-4">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center gap-4 text-left text-xs font-medium text-blue-950">
                  <span className="w-3 text-slate-500">{open === i ? "—" : "+"}</span>
                  {q}
                </button>
                {open === i && <p className="mt-2 pl-7 text-[11px] text-slate-500">{a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-b from-blue-500 to-sky-200 px-6 py-24 text-center">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
          <span className="relative mb-3 inline-block rounded-full bg-white/80 px-2.5 py-1 text-[11px] text-slate-600">07 Ready when you are</span>
          <h2 className="relative text-4xl font-extrabold tracking-tight text-blue-950 md:text-5xl">Need help at home?</h2>
          <p className="relative mt-3 text-xs text-blue-950/70">Find the right professional and book your service in minutes.</p>
          <div className="relative mt-6 flex justify-center gap-3">
            <Btn>Book a service</Btn>
            <Btn variant="outline">View all services</Btn>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-blue-950 px-6 pb-10 pt-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-7xl font-bold md:text-8xl">نازل ✦</div>
          <p className="mt-2 text-lg">Home Services, Made Simple.</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-8 text-[11px] text-blue-200 md:grid-cols-4">
          {Object.entries(FOOTER).map(([h, links]) => (
            <div key={h}>
              <h4 className="mb-3 font-semibold text-white">{h}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

function Feature({ color, t, d }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-0.5 h-6 w-6 shrink-0 rounded-md ${color}`} />
      <div>
        <h3 className="text-sm font-semibold text-blue-950">{t}</h3>
        <p className="text-xs text-slate-500">{d}</p>
      </div>
    </div>
  );
}