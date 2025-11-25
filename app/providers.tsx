"use client";

import { FavoritesProvider } from "@/components/state/favorites-context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
