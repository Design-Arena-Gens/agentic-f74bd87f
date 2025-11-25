"use client";

import { useFavorites } from "@/components/state/favorites-context";
import type { Recipe } from "@/data/recipes";
import {
  recipes as allRecipes,
  getRecipeBySlug,
  getSeasonalRecipes,
  getTrendingRecipes,
} from "@/data/recipes";
import { useMemo, useState } from "react";
import { RecipeCard } from "./recipe-card";
import {
  RecipeFilterState,
  RecipeFilters,
} from "@/components/filters/recipe-filters";

const defaultFilters: RecipeFilterState = {
  search: "",
  difficulty: "Any",
  dietTags: [],
  maxTime: 90,
  cuisine: "All",
  onlyTrending: false,
  onlySeasonal: false,
  onlyFavorites: false,
};

const highlightGroups = [
  {
    title: "Trending this week",
    description: "Crowd-pleasers your fellow cooks can’t stop making.",
    recipes: getTrendingRecipes().slice(0, 3),
  },
  {
    title: "Seasonal spotlight",
    description: "Produce-driven dishes perfect for right now.",
    recipes: getSeasonalRecipes().slice(0, 3),
  },
];

export function RecipeExplorer() {
  const [filters, setFilters] = useState<RecipeFilterState>(defaultFilters);
  const { favorites } = useFavorites();

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      if (filters.onlyTrending && !recipe.isTrending) {
        return false;
      }

      if (filters.onlySeasonal && !recipe.isSeasonal) {
        return false;
      }

      if (filters.onlyFavorites && !favorites.has(recipe.slug)) {
        return false;
      }

      if (filters.difficulty !== "Any" && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      if (filters.cuisine !== "All" && !recipe.cuisines.includes(filters.cuisine)) {
        return false;
      }

      if (recipe.totalTime > filters.maxTime) {
        return false;
      }

      if (
        filters.dietTags.length > 0 &&
        !filters.dietTags.every((tag) => recipe.dietTags.includes(tag))
      ) {
        return false;
      }

      if (filters.search.trim().length > 0) {
        const haystack = [
          recipe.title,
          recipe.description,
          recipe.highlight,
          recipe.ingredients.map((ingredient) => ingredient.name).join(" "),
          recipe.chefTips.join(" "),
          recipe.cuisines.join(" "),
          recipe.dietTags.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        const term = filters.search.toLowerCase();
        if (!haystack.includes(term)) {
          return false;
        }
      }

      return true;
    });
  }, [favorites, filters]);

  const favoritesHighlight = useMemo(() => {
    if (favorites.size === 0) return null;
    return Array.from(favorites)
      .map((slug) => getRecipeBySlug(slug))
      .filter(Boolean) as Recipe[];
  }, [favorites]);

  return (
    <div className="flex flex-col gap-12">
      <RecipeFilters value={filters} onChange={setFilters} />

      {favoritesHighlight && favoritesHighlight.length > 0 && !filters.onlyFavorites && (
        <section className="rounded-3xl border border-emerald-400/40 bg-emerald-50/40 p-6 shadow-inner">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-emerald-900">
                Your saved recipes
              </h2>
              <p className="text-sm text-emerald-800/80">
                A quick peek at dishes you flagged for later.
              </p>
            </div>
            <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-emerald-600">
              {favoritesHighlight.length} saved
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favoritesHighlight.slice(0, 3).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">
            Discover recipes
          </h2>
          <p className="text-sm text-slate-600">
            Tailor your cook-up using filters or browse the full library below.
          </p>
        </div>
        {filteredRecipes.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white/70 p-12 text-center text-slate-500">
            No recipes match these filters yet. Try clearing one or two filters
            for fresh inspiration.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>

      <section className="flex flex-col gap-8">
        {highlightGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 p-8 text-white shadow-xl"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {group.title}
                </h2>
                <p className="text-sm text-slate-300">{group.description}</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {group.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} layout="horizontal" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
