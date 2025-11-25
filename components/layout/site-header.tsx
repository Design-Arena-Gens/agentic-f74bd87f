import Link from "next/link";

const navLinks = [
  { label: "Recipes", href: "#recipes" },
  { label: "Meal Planner", href: "/meal-planner" },
  { label: "Cooking School", href: "#cooking-school" },
  { label: "Pantry Staples", href: "#pantry" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Gather
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/meal-planner"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
          >
            Meal Planner
          </Link>
          <Link
            href="#recipes"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </header>
  );
}
