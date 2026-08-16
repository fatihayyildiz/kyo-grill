import MenuSection from "@/components/MenuSection";
import { MENU } from "@/lib/menu";

const BRANCHES = [
  {
    name: "Kyo Grill · Mitte",
    jp: "ミッテ店",
    addr: "Torstraße 112, 10119 Berlin",
    hours: "Mon – Sun · 17:00 – 23:00",
    img: "/images/branch1.jpg",
    maps: "https://www.google.com/maps/search/?api=1&query=Torstra%C3%9Fe+112%2C+10119+Berlin",
  },
  {
    name: "Kyo Grill · Kreuzberg",
    jp: "クロイツベルク店",
    addr: "Oranienstraße 45, 10969 Berlin",
    hours: "Mon – Thu 17:00 – 23:00 · Fri – Sat 17:00 – 00:00",
    img: "/images/branch2.jpg",
    maps: "https://www.google.com/maps/search/?api=1&query=Oranienstra%C3%9Fe+45%2C+10969+Berlin",
  },
];

const MARQUEE =
  "焼き鳥 · YAKITORI · 居酒屋 · IZAKAYA · 炭火 · BINCHOTAN GRILL · ビール · SAKE · 串焼き · SKEWERS · ";

export default function Home() {
  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-coal-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember-500 text-lg font-black text-white">
              井
            </span>
            <span className="text-lg font-bold tracking-widest">
              KYO&nbsp;GRILL
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-cream-300 sm:flex">
            <a href="#menu" className="transition hover:text-ember-400">
              Menu
            </a>
            <a href="#locations" className="transition hover:text-ember-400">
              Locations
            </a>
            <a href="#contact" className="transition hover:text-ember-400">
              Contact
            </a>
          </div>
          <a
            href="#menu"
            className="rounded-full bg-ember-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember-400"
          >
            Order Menu
          </a>
        </nav>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt="Kyo Grill — charcoal yakitori"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal-950/80 via-coal-950/40 to-coal-950" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-32 text-center">
          <p className="mb-4 inline-block rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-glow-400 backdrop-blur">
            炭火焼き鳥 · Binchotan Charcoal Grill
          </p>
          <h1 className="text-6xl font-black tracking-tight text-cream-100 sm:text-8xl">
            KYO&nbsp;GRILL
          </h1>
          <p className="mt-3 font-jp text-xl text-cream-300 sm:text-2xl">
            Japanese yakitori &amp; izakaya — Berlin
          </p>
          <p className="mx-auto mt-6 max-w-xl text-cream-300/90">
            Skewers over white-hot binchotan, small plates and cold sake.
            Two locations, one fire.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-ember-500 px-8 py-3.5 font-semibold text-white shadow-xl shadow-ember-500/30 transition hover:bg-ember-400"
            >
              Explore the Menu
            </a>
            <a
              href="#locations"
              className="rounded-full border border-white/25 bg-black/30 px-8 py-3.5 font-semibold text-cream-100 backdrop-blur transition hover:border-ember-500 hover:text-ember-400"
            >
              Find Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream-300/60">
          ↓
        </div>
      </section>

      {/* ── Marquee band ───────────────────────────────────── */}
      <div className="overflow-hidden border-y border-white/5 bg-coal-900 py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-jp text-sm tracking-[0.3em] text-cream-500">
          <span>{MARQUEE}</span>
          <span>{MARQUEE}</span>
        </div>
      </div>

      {/* ── Menu ───────────────────────────────────────────── */}
      <MenuSection items={MENU} />

      {/* ── Locations ─────────────────────────────────────── */}
      <section id="locations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 font-jp text-sm tracking-[0.4em] text-ember-400">
            店舗
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Two Locations
          </h2>
          <p className="mt-3 text-cream-300">
            Same fire, two neighbourhoods in Berlin.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {BRANCHES.map((b) => (
            <div
              key={b.name}
              className="group overflow-hidden rounded-3xl bg-coal-900 ring-1 ring-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-950/90 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-2xl font-bold">{b.name}</h3>
                  <p className="font-jp text-sm text-cream-300/80">{b.jp}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 p-6">
                <div>
                  <p className="text-cream-100">{b.addr}</p>
                  <p className="mt-1 text-sm text-cream-300">{b.hours}</p>
                </div>
                <a
                  href={b.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-cream-100 transition hover:border-ember-500 hover:text-ember-400"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact / Footer ───────────────────────────────── */}
      <footer id="contact" className="border-t border-white/5 bg-coal-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember-500 text-lg font-black text-white">
                井
              </span>
              <span className="text-lg font-bold tracking-widest">
                KYO&nbsp;GRILL
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream-300">
              Japanese yakitori &amp; izakaya, grilled over binchotan
              charcoal. Made in Berlin, fired by tradition.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-cream-100">
              Locations
            </h4>
            <ul className="space-y-3 text-sm text-cream-300">
              <li>
                <span className="font-semibold text-cream-100">Mitte</span> —
                Torstraße 112, 10119 Berlin
              </li>
              <li>
                <span className="font-semibold text-cream-100">
                  Kreuzberg
                </span>{" "}
                — Oranienstraße 45, 10969 Berlin
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-cream-100">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream-300">
              <li>
                <a
                  href="mailto:hello@kyogrill.berlin"
                  className="transition hover:text-ember-400"
                >
                  hello@kyogrill.berlin
                </a>
              </li>
              <li>
                <a
                  href="tel:+493012345678"
                  className="transition hover:text-ember-400"
                >
                  +49 30 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-ember-400"
                >
                  @kyogrill.berlin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-xs text-cream-500">
          © {new Date().getFullYear()} Kyo Grill Berlin · 焼き鳥と友情 ·
          Made with 🔥 &amp; binchotan
        </div>
      </footer>
    </>
  );
}
