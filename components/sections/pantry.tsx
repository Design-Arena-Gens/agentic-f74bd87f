const pantryItems = [
  {
    category: "Flavor foundations",
    items: [
      "Shiro miso",
      "Smoked paprika",
      "Calabrian chili paste",
      "Toasted sesame oil",
    ],
  },
  {
    category: "Textural boosts",
    items: ["Pickled shallots", "Crispy shallot oil", "Gochugaru breadcrumbs"],
  },
  {
    category: "Quick finishes",
    items: ["Yuzu kosho", "Citrus finishing salt", "Black garlic honey"],
  },
];

export function PantrySection() {
  return (
    <section
      id="pantry"
      className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-8 shadow-lg"
    >
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            Pantry Staples that punch above their weight
          </h2>
          <p className="text-sm text-slate-600">
            Stock these and you can riff on any Gather recipe with easy swaps.
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
        >
          Download pantry checklist
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pantryItems.map((section) => (
          <div
            key={section.category}
            className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              {section.category}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {section.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
