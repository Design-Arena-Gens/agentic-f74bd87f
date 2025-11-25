"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  recipes,
  getTrendingRecipes,
  type Recipe,
} from "@/data/recipes";
import { RecipeCard } from "@/components/recipe/recipe-card";

const plannerDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type MealPlan = Record<string, string | null>;

const initialPlan: MealPlan = plannerDays.reduce<MealPlan>((acc, day) => {
  acc[day] = null;
  return acc;
}, {});

export default function MealPlannerPage() {
  const [plan, setPlan] = useState<MealPlan>(initialPlan);

  const plannedRecipes = useMemo(() => {
    return Object.values(plan)
      .filter(Boolean)
      .map((slug) => recipes.find((recipe) => recipe.slug === slug))
      .filter(Boolean) as Recipe[];
  }, [plan]);

  const totalTime = plannedRecipes.reduce(
    (total, recipe) => total + recipe.totalTime,
    0,
  );
  const plannedCount = plannedRecipes.length;

  const shoppingList = useMemo(() => {
    const items = new Map<string, Set<string>>();
    plannedRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        const key = ingredient.name;
        const details = `${ingredient.amount}${ingredient.notes ? ` (${ingredient.notes})` : ""}`;
        if (!items.has(key)) {
          items.set(key, new Set());
        }
        items.get(key)!.add(details);
      });
    });
    return Array.from(items.entries()).map(([name, amounts]) => ({
      name,
      amounts: Array.from(amounts),
    }));
  }, [plannedRecipes]);

  const handleUpdate = (day: string, slug: string | null) => {
    setPlan((prev) => ({
      ...prev,
      [day]: slug === "" ? null : slug,
    }));
  };

  const trendingSuggestions = getTrendingRecipes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pb-20">
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-xs font-semibold text-slate-500">
              ← Back to Gather
            </Link>
            <h1 className="text-3xl font-semibold text-slate-900">
              Meal Planner
            </h1>
            <p className="text-sm text-slate-600">
              Build a week of flavors and export a smart shopping list in under a minute.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPlan(initialPlan)}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
          >
            Clear plan
          </button>
        </div>
      </header>

      <main className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-6">
        <section className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-900">
            Your weekly lineup
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Choose a hero recipe for each day. We&apos;ll keep track of total time and ingredients.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {plannerDays.map((day) => (
              <div
                key={day}
                className="flex flex-col gap-3 rounded-3xl border border-slate-200/70 bg-slate-50/70 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {day}
                  </span>
                  {plan[day] && (
                    <button
                      type="button"
                      onClick={() => handleUpdate(day, null)}
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <select
                  value={plan[day] ?? ""}
                  onChange={(event) => handleUpdate(day, event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                >
                  <option value="">Choose a recipe</option>
                  {recipes.map((recipe) => (
                    <option key={recipe.id} value={recipe.slug}>
                      {recipe.title} · {recipe.totalTime} min
                    </option>
                  ))}
                </select>
                {plan[day] && (
                  <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-4 text-xs text-emerald-700">
                    <strong className="block font-semibold">
                      {recipes.find((recipe) => recipe.slug === plan[day])?.title}
                    </strong>
                    <span className="text-emerald-600/80">
                      {
                        recipes.find((recipe) => recipe.slug === plan[day])
                          ?.highlight
                      }
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <div className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900">
              Shopping list
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Combine pantry check-in with weekly groceries.
            </p>
            {shoppingList.length === 0 ? (
              <div className="mt-6 rounded-3xl border border-dashed border-slate-200 bg-white/70 p-12 text-center text-slate-500">
                Add recipes to generate your shopping list.
              </div>
            ) : (
              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                {shoppingList.map((item) => (
                  <li key={item.name} className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4">
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-500">
                      {item.amounts.map((amount) => (
                        <li key={amount}>{amount}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
            {shoppingList.length > 0 && (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-700">
                Total cook time this week:{" "}
                <strong>{totalTime} minutes</strong> · Avg per recipe:{" "}
                <strong>
                  {Math.round(totalTime / Math.max(plannedCount, 1))} minutes
                </strong>
              </div>
            )}
          </div>

          <div className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900">
              Need inspiration?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tap a trending recipe to auto-fill the next empty day.
            </p>
            <div className="mt-6 space-y-4">
              {trendingSuggestions.map((recipe) => (
                <div
                  key={recipe.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    const nextEmpty = plannerDays.find((day) => !plan[day]);
                    if (nextEmpty) {
                      handleUpdate(nextEmpty, recipe.slug);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      const nextEmpty = plannerDays.find((day) => !plan[day]);
                      if (nextEmpty) {
                        handleUpdate(nextEmpty, recipe.slug);
                      }
                    }
                  }}
                  className="w-full cursor-pointer rounded-3xl border border-transparent transition hover:border-emerald-300 focus:border-emerald-400 focus:outline-none"
                >
                  <RecipeCard recipe={recipe} layout="horizontal" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
