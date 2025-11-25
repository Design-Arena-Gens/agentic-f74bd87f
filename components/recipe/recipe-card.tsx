import Image from "next/image";
import Link from "next/link";
import { FavoriteToggle } from "./favorite-toggle";
import type { Recipe } from "@/data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
  layout?: "vertical" | "horizontal";
};

export function RecipeCard({ recipe, layout = "vertical" }: RecipeCardProps) {
  const stats = [
    { label: "Total", value: `${recipe.totalTime} min` },
    { label: "Difficulty", value: recipe.difficulty },
    { label: "Serves", value: recipe.servings },
  ];

  if (layout === "horizontal") {
    return (
      <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
        <div className="relative aspect-[5/3] w-full overflow-hidden">
          <Image
            src={recipe.heroImage}
            alt={recipe.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={recipe.isTrending}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute right-4 top-4">
            <FavoriteToggle slug={recipe.slug} />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {recipe.dietTags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold leading-snug tracking-tight">
              {recipe.title}
            </h3>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              {recipe.rating.toFixed(1)} ★
            </span>
          </div>
          <p className="text-sm text-slate-300">{recipe.highlight}</p>
          <div className="grid grid-cols-3 gap-4 text-sm text-slate-200/80">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xs uppercase text-slate-400">
                  {stat.label}
                </div>
                <div className="font-medium">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <div className="flex gap-2 text-xs text-slate-400">
              {recipe.cuisines.slice(0, 2).map((cuisine) => (
                <span key={cuisine} className="rounded-full bg-white/5 px-3 py-1">
                  {cuisine}
                </span>
              ))}
            </div>
            <Link
              href={`/recipes/${recipe.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
            >
              Cook this
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/30 bg-white/80 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={recipe.heroImage}
          alt={recipe.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {recipe.dietTags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute right-4 top-4">
          <FavoriteToggle slug={recipe.slug} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">
            {recipe.title}
          </h3>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {recipe.rating.toFixed(1)} ★
          </span>
        </div>
        <p className="line-clamp-3 text-sm text-slate-600">
          {recipe.description}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {stat.label}
              </span>
              <span className="font-medium text-slate-700">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            {recipe.cuisines.map((cuisine) => (
              <span
                key={cuisine}
                className="rounded-full bg-slate-100 px-3 py-1 font-medium"
              >
                {cuisine}
              </span>
            ))}
          </div>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:text-slate-900 hover:shadow"
          >
            View recipe
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
