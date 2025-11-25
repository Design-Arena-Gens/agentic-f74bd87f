const lessons = [
  {
    title: "Knife Skills Power Series",
    duration: "3 mini lessons",
    focus:
      "Master the julienne, brunoise, and bias cuts with quick guided clips and practice prompts.",
  },
  {
    title: "Sauce Architect",
    duration: "5 mini lessons",
    focus:
      "Build mother sauces, balance acidity and fat, and save any sauce from splitting.",
  },
  {
    title: "Plating Like a Pro",
    duration: "2 mini lessons",
    focus:
      "Use negative space, color pops, and micro-herbs to turn home cooking into restaurant-level plating.",
  },
];

export function CookingSchoolSection() {
  return (
    <section
      id="cooking-school"
      className="rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-white via-white to-emerald-50/60 p-8 shadow-xl"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight text-slate-900">
            Cooking School, reimagined for home kitchens
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Bite-sized masterclasses walk you through knife skills, flavor
            balancing, and plating while pairing perfectly with the recipes you
            love.
          </p>
        </div>
        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
          NEW MODULES WEEKLY
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {lessons.map((lesson) => (
          <article
            key={lesson.title}
            className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {lesson.title}
            </h3>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {lesson.duration}
            </span>
            <p className="text-sm text-slate-600">{lesson.focus}</p>
            <button
              type="button"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              Start lesson
              <span aria-hidden>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
