import { config, waLink } from "@/lib/config";
import Carousel from "@/components/Carousel";
import Booking from "@/components/Booking";
import Academy from "@/components/Academy";

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gold/20 bg-brown/90 px-5 py-3 backdrop-blur">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Lavish Nailery logo" className="h-10 w-10 rounded" />
          <span className="font-serif text-lg tracking-[0.25em] text-gold">LAVISH NAILERY</span>
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#gallery">Gallery</a>
          <a href="#prices">Prices</a>
          <a href="#book">Book</a>
          <a href="#academy">Academy</a>
          <a href="#locations">Locations</a>
        </nav>
      </header>

      <section id="top" className="px-5 py-20 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Pune</p>
        <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">{config.tagline}</h1>
        <p className="mx-auto mt-5 max-w-xl text-cream/80">Nails, mani-pedi and an academy, at two studios. Pick your branch, service and time, and we confirm on WhatsApp.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#book" className="btn-gold">Book your set</a>
          <a href={waLink("Hi Lavish Nailery, I'd like to know more.")} className="btn-outline">Chat on WhatsApp</a>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-4xl px-5 pb-16">
        <h2 className="mb-6 text-center font-serif text-3xl text-gold">Our work</h2>
        <Carousel slides={config.gallery} />
      </section>

      <section id="prices" className="bg-brown-dark px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-3xl text-gold">Services & prices</h2>
          <p className="mb-8 mt-2 text-center text-sm text-cream/70">{config.offerLabel}</p>
          <ul className="divide-y divide-gold/20">
            {config.services.map((s) => (
              <li key={s.name} className="flex items-center justify-between py-4">
                <span className="text-lg">{s.name}</span>
                <span>
                  <s className="mr-3 text-cream/40">₹{s.mrp}</s>
                  <span className="font-serif text-xl text-gold">₹{s.price}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-xl px-5 py-16">
        <h2 className="mb-2 text-center font-serif text-3xl text-gold">Book your set</h2>
        <p className="mb-8 text-center text-sm text-cream/70">Fill this in and we open WhatsApp with your details ready to send.</p>
        <Booking />
      </section>

      <section id="academy" className="bg-brown-dark px-5 py-16">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-2 text-center font-serif text-3xl text-gold">Lavish Academy</h2>
          <p className="mb-8 text-center text-sm text-cream/70">Learn nails from working professionals. Tell us what you're after and we'll share batch details.</p>
          <Academy />
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="mb-8 text-center font-serif text-3xl text-gold">Find us</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {config.branches.map((b) => (
            <div key={b.id} className="rounded-xl border border-gold/30 p-6">
              <h3 className="font-serif text-2xl">{b.name}</h3>
              <p className="mt-2 text-sm text-cream/70">{b.address}</p>
              <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="btn-outline mt-4 text-sm">Get directions</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gold/20 px-5 py-8 text-center text-sm text-cream/60">
        <p>{config.phoneDisplay} · <a className="text-gold" href={`https://instagram.com/${config.instagram}`}>@{config.instagram}</a></p>
        <p className="mt-2">© {new Date().getFullYear()} {config.name}, Pune</p>
      </footer>
    </main>
  );
}
