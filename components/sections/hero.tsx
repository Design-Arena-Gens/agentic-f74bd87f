import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 px-8 py-16 text-white shadow-xl">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-[-30%] top-[-10%] h-96 w-96 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[10%] h-80 w-80 rounded-full bg-emerald-300/40 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
            WEEKLY EDIT
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Cook with confidence, plate with style, and savor recipes built for
            your rhythm.
          </h1>
          <p className="max-w-2xl text-lg text-emerald-50/90">
            Gather brings chef-tested recipes, quick filters, and smart meal
            planning together so you can spend less time scrolling and more time
            tasting. Spotlight seasonal produce, learn pro techniques, and keep
            your favorite dishes close.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#recipes"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            Explore recipes
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/meal-planner"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
          >
            Build a meal plan
            <span aria-hidden>↗</span>
          </Link>
        </div>

        <dl className="grid gap-6 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm font-medium md:grid-cols-4">
          <div className="flex flex-col gap-1">
            <dt className="text-emerald-100/80">Curated recipes</dt>
            <dd className="text-2xl font-semibold text-white">150+</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-emerald-100/80">Ready in under 40 minutes</dt>
            <dd className="text-2xl font-semibold text-white">68</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-emerald-100/80">Seasonal updates</dt>
            <dd className="text-2xl font-semibold text-white">Weekly</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-emerald-100/80">Favorite saves</dt>
            <dd className="text-2xl font-semibold text-white">Sync across devices</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
