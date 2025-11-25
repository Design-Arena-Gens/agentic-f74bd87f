"use client";

import { useFavorites } from "@/components/state/favorites-context";
import type { Difficulty, DietTag } from "@/data/recipes";
import { getCuisineList, getDietTags } from "@/data/recipes";
import { useMemo } from "react";

export type RecipeFilterState = {
  search: string;
  difficulty: Difficulty | "Any";
  dietTags: DietTag[];
  maxTime: number;
  cuisine: string | "All";
  onlyTrending: boolean;
  onlySeasonal: boolean;
  onlyFavorites: boolean;
};

type Props = {
  value: RecipeFilterState;
  onChange: (next: RecipeFilterState) => void;
};

const difficulties: Array<Difficulty | "Any"> = [
  "Any",
  "Easy",
  "Moderate",
  "Challenging",
];

export function RecipeFilters({ value, onChange }: Props) {
  const { favorites } = useFavorites();
  const cuisines = useMemo(() => ["All", ...getCuisineList()], []);
  const dietOptions = useMemo(() => getDietTags(), []);

  const update = (partial: Partial<RecipeFilterState>) =>
    onChange({ ...value, ...partial });

  const toggleDietTag = (tag: DietTag) => {
    const next = value.dietTags.includes(tag)
      ? value.dietTags.filter((d) => d !== tag)
      : [...value.dietTags, tag];
    update({ dietTags: next });
  };

  return (
    <section className="rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="recipe-search"
            className="text-sm font-medium text-slate-500"
          >
            Search recipes
          </label>
          <div className="relative">
            <input
              id="recipe-search"
              type="search"
              value={value.search}
              onChange={(event) => update({ search: event.target.value })}
              placeholder="Search by ingredient, chef tip, or vibe..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              ⌕
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium text-slate-500">
              Difficulty
            </legend>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => {
                const active = value.difficulty === difficulty;
                return (
                  <button
                    type="button"
                    key={difficulty}
                    onClick={() => update({ difficulty })}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                      active
                        ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                        : "border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-500"
                    }`}
                  >
                    {difficulty}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label
              htmlFor="cuisine-select"
              className="text-sm font-medium text-slate-500"
            >
              Cuisine
            </label>
            <select
              id="cuisine-select"
              value={value.cuisine}
              onChange={(event) => update({ cuisine: event.target.value })}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-500">
            Dietary tags
          </label>
          <div className="flex flex-wrap gap-2">
            {dietOptions.map((tag) => {
              const active = value.dietTags.includes(tag);
              return (
                <button
                  type="button"
                  key={tag}
                  onClick={() => toggleDietTag(tag)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    active
                      ? "border border-emerald-500 bg-emerald-50 text-emerald-600"
                      : "border border-transparent bg-slate-100 text-slate-500 hover:border-emerald-200 hover:text-emerald-500"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="max-time" className="text-sm font-medium text-slate-500">
              Max total time ({value.maxTime} min)
            </label>
            <input
              id="max-time"
              type="range"
              min={15}
              max={240}
              step={5}
              value={value.maxTime}
              onChange={(event) =>
                update({ maxTime: Number(event.target.value) })
              }
              className="accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Quick</span>
              <span>Slow</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4">
            <TogglePill
              label="Trending now"
              active={value.onlyTrending}
              onClick={() => update({ onlyTrending: !value.onlyTrending })}
            />
            <TogglePill
              label="Seasonal picks"
              active={value.onlySeasonal}
              onClick={() => update({ onlySeasonal: !value.onlySeasonal })}
            />
            <TogglePill
              label={`Favorites (${favorites.size})`}
              active={value.onlyFavorites}
              onClick={() => update({ onlyFavorites: !value.onlyFavorites })}
              disabled={favorites.size === 0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type TogglePillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
};

function TogglePill({ label, active, onClick, disabled }: TogglePillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
        active
          ? "border-emerald-500 bg-emerald-500/10 text-emerald-600"
          : "border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-500"
      } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      {label}
    </button>
  );
}
