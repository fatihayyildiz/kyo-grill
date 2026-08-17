"use client";

import { useCallback, useEffect, useState } from "react";
import type { MenuItem } from "@/lib/menu";
import { CATEGORY_LABELS, formatPrice } from "@/lib/menu";

const CATS: { key: "all" | MenuItem["category"]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "grill", label: CATEGORY_LABELS.grill },
  { key: "sets", label: CATEGORY_LABELS.sets },
  { key: "starters", label: CATEGORY_LABELS.starters },
  { key: "ramen", label: CATEGORY_LABELS.ramen },
  { key: "drinks", label: CATEGORY_LABELS.drinks },
];

export default function MenuSection({ items }: { items: MenuItem[] }) {
  const [cat, setCat] = useState<"all" | MenuItem["category"]>("all");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const visible =
    cat === "all" ? items : items.filter((i) => i.category === cat);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <section
      id="menu"
      className="mx-auto max-w-7xl scroll-mt-[68px] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 text-center">
        <p className="mb-2 font-jp text-sm tracking-[0.4em] text-ember-400">
          炭火焼き鳥
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Menu
        </h2>
        <p className="mt-3 text-cream-300">
          Everything grilled over glowing binchotan charcoal.
        </p>
      </div>

      {/* Category filter — sticky: kaydirirken her zaman ustte kalir */}
      <div className="sticky top-[68px] z-30 -mx-4 mb-10 flex gap-2 overflow-x-auto bg-coal-950/90 px-4 py-3 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:justify-center sm:px-0">
        {CATS.map((c) => {
          const active = cat === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active
                  ? "bg-ember-500 text-white shadow-lg shadow-ember-500/25"
                  : "bg-coal-800 text-cream-300 hover:bg-coal-700 hover:text-cream-100"
              }`}
            >
              {c.label}
              <span
                className={`ml-2 rounded-full px-1.5 py-0.5 text-xs ${
                  active ? "bg-white/20" : "bg-coal-700"
                }`}
              >
                {c.key === "all"
                  ? items.length
                  : items.filter((i) => i.category === c.key).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="group flex flex-col overflow-hidden rounded-2xl bg-coal-900 text-left ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:ring-ember-500/40"
          >
            <div className="relative overflow-hidden pt-[100%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent" />
              {item.popular && (
                <span className="absolute left-3 top-3 rounded-full bg-ember-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                  ★ Popular
                </span>
              )}
              {item.veg && (
                <span className="absolute right-3 top-3 rounded-full bg-green-700/90 px-2.5 py-1 text-xs font-semibold text-white">
                  V
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 border-t border-white/10 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-tight text-cream-100">
                    {item.name}
                  </h3>
                  <span className="font-jp text-xs text-cream-300/70">
                    {item.jp}
                  </span>
                </div>
                <span className="shrink-0 rounded-lg bg-ember-500 px-2.5 py-1 text-sm font-bold text-white shadow-md shadow-ember-500/25">
                  {formatPrice(item.price)}
                </span>
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-cream-300/80">
                {item.desc}
              </p>
            </div>
          </button>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-cream-300">
          Nothing here yet — check back soon.
        </p>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-coal-900 ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden pt-[56.25%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.img}
                alt={selected.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-900 to-transparent" />
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-cream-100 transition hover:bg-ember-500"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{selected.name}</h3>
                  <p className="font-jp text-sm text-cream-300/80">
                    {selected.jp}
                  </p>
                </div>
                <span className="rounded-lg bg-ember-500 px-3 py-1.5 text-lg font-bold text-white">
                  {formatPrice(selected.price)}
                </span>
              </div>
              <p className="mt-3 text-cream-300">{selected.desc}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-cream-500">
                {CATEGORY_LABELS[selected.category]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
