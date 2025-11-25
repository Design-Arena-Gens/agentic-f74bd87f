import Link from "next/link";

const footerLinks = [
  {
    heading: "Cook",
    items: [
      { label: "Recipe index", href: "#recipes" },
      { label: "Seasonal produce guide", href: "#pantry" },
      { label: "Meal planner", href: "/meal-planner" },
    ],
  },
  {
    heading: "Learn",
    items: [
      { label: "Cooking school", href: "#cooking-school" },
      { label: "Techniques", href: "/#recipes" },
      { label: "Chef interviews", href: "#" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Press", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold text-slate-900">Gather</h3>
          <p className="mt-3 text-sm text-slate-600">
            Crafted by cooks for cooks. Drop into modern recipes, flavor-first meal
            plans, and the kitchen skills you’ll use on repeat.
          </p>
          <form className="mt-4 flex items-center gap-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Get the Friday menu drop"
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <button
              type="submit"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Join
            </button>
          </form>
        </div>
        <div className="grid flex-1 gap-8 text-sm text-slate-600 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {section.heading}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/80 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Gather. Cook freely, credit your sources, and
        share the table.
      </div>
    </footer>
  );
}
