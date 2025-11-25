"use client";

import { useFavorites } from "@/components/state/favorites-context";
import clsx from "clsx";

export function FavoriteToggle({ slug }: { slug: string }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const active = isFavorite(slug);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      className={clsx(
        "group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition",
        active
          ? "bg-emerald-500/20 text-emerald-500 hover:bg-emerald-400/30"
          : "bg-white/15 text-white hover:bg-white/25",
      )}
      aria-pressed={active}
      aria-label={active ? "Remove from saved recipes" : "Save recipe"}
    >
      <svg
        className={clsx(
          "h-5 w-5 transition-transform",
          active ? "scale-110" : "scale-100",
        )}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span className="pointer-events-none absolute -bottom-10 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:translate-y-1 group-hover:opacity-100">
        {active ? "Saved" : "Save"}
      </span>
    </button>
  );
}
