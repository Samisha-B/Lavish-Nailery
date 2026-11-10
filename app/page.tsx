import { config, waLink } from "@/lib/config";
import Carousel from "@/components/Carousel";
import Booking from "@/components/Booking";
import Academy from "@/components/Academy";

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gold/20 bg-ivory/85 px-5 py-3 backdrop-blur md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Lavish Nailery logo" className="h-9 w-9" />
          <span className="font-serif text-lg tracking-[0.3em] text-gold">LAVISH NAILERY</span>
        </a>
        <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.25em] md:flex">
          <a href="#gallery" className="hover:text-gold">Gallery</a>
          <a href="#prices" className="hover:text-gold">Prices</a>
          <a href="#book" className="hover:text-gold">Book</a>
          <a href="#academy" className="hover:text-gold">Academy</a>
          <a href="#locations" className="hover:text-gold">Locations</a>
        </nav>
      </header>

      <section id="top" className="bg-gradient-to-b from-sand/70 to-ivory px-5 pb-20 pt-24 text-center">
        <span className="eyebrow">Pune · Kalyani Nagar · FC Road</span>
        <h1 className="mx-auto max-w-3xl font-serif text-5xl font-light leading-[1.1] md:text-7xl">
          Luxury nails,<br /><em className="text-gold">made lavish.</em>
        </h1>
        <div className="divider" />
        <p className="mx-auto max-w-md text-ink/70">Nails, mani-pedi and an academy, at two studios. Pick your branch, service and time, and we confirm on WhatsApp.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#book" className="btn-gold">Book your set</a>
          <a href={waLink("Hi Lavish Nailery, I'd like to know more.")} className="btn-outline">Chat with us</a>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-md px-5 pb-24">
        <span className="eyebrow">Portfolio</span>
        <h2 className="h2 mb-8">Our <em className="text-gold">work</em></h2>
        <Carousel slides={config.gallery} />
      </section>

      <section id="prices" className="bg-sand/60 px-5 py-24">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">Menu</span>
          <h2 className="h2">Services & <em className="text-gold">prices</em></h2>
          <div className="divider" />
          <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-ink/60">{config.offerLabel}</p>
          <ul className="divide-y divide-gold/25">
            {config.services.map((s) => (
              <li key={s.name} className="flex items-center justify-between py-5">
                <span className="font-serif text-2xl">{s.name}</span>
                <span className="flex items-baseline gap-3">
                  <s className="text-sm text-ink/40">₹{s.mrp}</s>
                  <span className="font-serif text-2xl text-gold">₹{s.price}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-xl px-5 py-24">
        <span className="eyebrow">Reservations</span>
        <h2 className="h2">Book your <em className="text-gold">set</em></h2>
        <div className="divider" />
        <p className="mb-10 text-center text-sm text-ink/60">Fill this in and we open WhatsApp with your details ready to send.</p>
        <div className="rounded-3xl border border-gold/30 bg-white/50 p-6 shadow-sm md:p-8">
          <Booking />
        </div>
      </section>

      <section id="academy" className="bg-sand/60 px-5 py-24">
        <div className="mx-auto max-w-xl">
          <span className="eyebrow">Learn with us</span>
          <h2 className="h2">Lavish <em className="text-gold">Academy</em></h2>
          <div className="divider" />
          <p className="mb-10 text-center text-sm text-ink/60">Learn nails from working professionals. Tell us what you're after and we'll share batch details.</p>
          <div className="rounded-3xl border border-gold/30 bg-ivory p-6 shadow-sm md:p-8">
            <Academy />
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-4xl px-5 py-24">
        <span className="eyebrow">Visit</span>
        <h2 className="h2 mb-10">Find <em className="text-gold">us</em></h2>
        <div className="grid gap-6 md:grid-cols-2">
          {config.branches.map((b) => (
            <div key={b.id} className="rounded-3xl border border-gold/30 p-8 text-center">
              <h3 className="font-serif text-3xl">{b.name}</h3>
              <div className="divider" />
              <p className="text-sm text-ink/70">{b.address}</p>
              <a href={b.mapsUrl} target="_blank" rel="noreferrer" className="btn-outline mt-6">Directions</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gold/25 bg-sand/60 px-5 py-10 text-center text-sm text-ink/60">
        <p className="font-serif text-xl tracking-[0.3em] text-gold">LAVISH NAILERY</p>
        <p className="mt-3">{config.phoneDisplay} · <a className="text-gold" href={`https://instagram.com/${config.instagram}`}>@{config.instagram}</a></p>
        <p className="mt-2">© {new Date().getFullYear()} {config.name}, Pune</p>
      </footer>
    </main>
  );
}
