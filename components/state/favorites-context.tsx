"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FavoritesContextValue = {
  favorites: Set<string>;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  clearFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "cuisine-canvas:favorites";

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (typeof window === "undefined") {
      return new Set();
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return new Set();
    }
    try {
      const parsed = JSON.parse(stored) as string[];
      return new Set(parsed);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue) {
        try {
          const parsed = JSON.parse(event.newValue) as string[];
          setFavorites(new Set(parsed));
        } catch {
          // ignore malformed storage
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const payload = JSON.stringify(Array.from(favorites));
    window.localStorage.setItem(STORAGE_KEY, payload);
  }, [favorites]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      toggleFavorite: (slug: string) => {
        setFavorites((prev) => {
          const next = new Set(prev);
          if (next.has(slug)) {
            next.delete(slug);
          } else {
            next.add(slug);
          }
          return next;
        });
      },
      isFavorite: (slug: string) => favorites.has(slug),
      clearFavorites: () => setFavorites(new Set()),
    }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
