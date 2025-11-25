import { RecipeExplorer } from "@/components/recipe/recipe-explorer";
import { RecipeCard } from "@/components/recipe/recipe-card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CookingSchoolSection } from "@/components/sections/cooking-school";
import { HeroSection } from "@/components/sections/hero";
import { PantrySection } from "@/components/sections/pantry";
import { getTrendingRecipes, recipes } from "@/data/recipes";

const chefSpotlight = recipes.find(
  (recipe) => recipe.slug === "golden-coconut-ramen",
);
const quickPick = recipes.find((recipe) => recipe.slug === "miso-maple-brussels");
const weekendProject = recipes.find(
  (recipe) => recipe.slug === "slow-braised-short-ribs",
);
const trendingNow = getTrendingRecipes().slice(0, 3);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 text-slate-900">
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-12">
        <HeroSection />

        <section
          aria-label="Editorial picks"
          className="grid gap-6 md:grid-cols-[1.5fr,1fr]"
        >
          <div className="rounded-[2.5rem] border border-slate-900/5 bg-white/90 p-8 shadow-xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Chef Spotlight
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Cook the golden coconut ramen from our test kitchen
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Build a silky turmeric-coconut broth, layer charred corn, and finish
              with chili crisp. It&apos;s dinner on repeat.
            </p>
            {chefSpotlight && (
              <div className="mt-6">
                <RecipeCard recipe={chefSpotlight} layout="horizontal" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-6">
            {quickPick && (
              <div className="rounded-[2.5rem] border border-slate-200 bg-white/80 p-6 shadow">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Quick pick
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {quickPick.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Skillet Brussels sprouts caramelized in miso maple butter with
                  toasted pepitas.
                </p>
                <div className="mt-4">
                  <RecipeCard recipe={quickPick} layout="horizontal" />
                </div>
              </div>
            )}
            {weekendProject && (
              <div className="rounded-[2.5rem] border border-slate-900/10 bg-slate-900 p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Weekend project
                </div>
                <h3 className="mt-3 text-2xl font-semibold">
                  {weekendProject.title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  A slow Sunday braise with layers of red wine, thyme, and root
                  vegetables.
                </p>
                <div className="mt-4">
                  <RecipeCard recipe={weekendProject} layout="horizontal" />
                </div>
              </div>
            )}
          </div>
        </section>

        <section
          id="recipes"
          className="rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-slate-900">
                Trending now
              </h2>
              <p className="text-sm text-slate-600">
                Recipes the community is cooking on loop this week.
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              curated
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trendingNow.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-slate-900">
              Explore the recipe studio
            </h2>
            <p className="text-sm text-slate-600">
              Filter by mood, time, ingredients, and dietary tags to line up your
              next cook.
            </p>
          </div>
          <RecipeExplorer />
        </section>

        <CookingSchoolSection />
        <PantrySection />
      </main>
      <SiteFooter />
    </div>
  );
}
