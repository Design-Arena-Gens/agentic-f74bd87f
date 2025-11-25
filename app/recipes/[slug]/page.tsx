import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipeBySlug, recipes } from "@/data/recipes";
import { FavoriteToggle } from "@/components/recipe/favorite-toggle";

type RecipePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) {
    return {
      title: "Recipe not found",
    };
  }
  return {
    title: `${recipe.title} | Gather`,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.highlight,
      images: [
        {
          url: recipe.heroImage,
        },
      ],
    },
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const { slug } = params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const stats = [
    { label: "Prep time", value: `${recipe.prepTime} min` },
    { label: "Cook time", value: `${recipe.cookTime} min` },
    { label: "Total time", value: `${recipe.totalTime} min` },
    { label: "Serves", value: `${recipe.servings}` },
    { label: "Calories", value: `${recipe.calories}` },
    { label: "Difficulty", value: recipe.difficulty },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 pb-20">
      <nav className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold text-slate-700">
            ← Back to home
          </Link>
          <FavoriteToggle slug={recipe.slug} />
        </div>
      </nav>

      <article className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 px-6">
        <header className="relative overflow-hidden rounded-[3rem] border border-slate-200/70 bg-slate-900 text-white shadow-2xl">
          <div className="relative h-[420px] w-full">
            <Image
              src={recipe.heroImage}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-black/30" />
          </div>
          <div className="relative flex flex-col gap-4 p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              {recipe.cuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100"
                >
                  {cuisine}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-semibold leading-tight">
              {recipe.title}
            </h1>
            <p className="max-w-2xl text-sm text-slate-200">{recipe.description}</p>
            <div className="flex flex-wrap gap-3 text-xs text-emerald-100/80">
              {recipe.dietTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/30 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-white/90 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xs uppercase text-emerald-100/70">
                    {stat.label}
                  </div>
                  <div className="text-lg font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <section className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-900">Steps</h2>
            <ol className="mt-6 space-y-5">
              {recipe.steps.map((step, index) => (
                <li key={index} className="flex gap-4 text-sm text-slate-600">
                  <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-emerald-100 text-center text-xs font-semibold leading-7 text-emerald-700">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 text-sm text-emerald-700">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Chef tips
              </h3>
              <ul className="mt-3 space-y-2">
                {recipe.chefTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="flex flex-col gap-8">
            <section className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-900">
                Ingredients
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name} className="flex flex-col">
                    <span className="font-medium text-slate-900">
                      {ingredient.amount} · {ingredient.name}
                    </span>
                    {ingredient.notes && (
                      <span className="text-xs text-slate-500">
                        {ingredient.notes}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg">
              <h2 className="text-lg font-semibold text-slate-900">Equipment</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {recipe.equipment.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg">
              <h2 className="text-lg font-semibold text-slate-900">
                Pairing ideas
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {recipe.pairingIdeas.map((idea) => (
                  <li key={idea} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {idea}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
