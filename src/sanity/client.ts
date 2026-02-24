import { createClient } from "next-sanity";
import { cache } from "react";

const isDev = process.env.NODE_ENV === "development";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  // Disable CDN in dev so edits appear instantly without waiting for CDN propagation
  useCdn: !isDev,
});

// Wrapped with React cache() for request deduplication in server components.
// Returns null on error so the site renders gracefully when credentials aren't set.
export const sanityFetch = cache(async <T>(
  query: string,
  params?: Record<string, unknown>,
  fallback?: T
): Promise<T> => {
  try {
    return await client.fetch<T>(query, params ?? {}, {
      // Bypass Next.js data cache in development so content updates show immediately
      ...(isDev && { next: { revalidate: 0 } }),
    });
  } catch (err) {
    if (isDev) {
      console.warn("[Sanity] Fetch failed — check NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local:", (err as Error).message);
    }
    return (fallback ?? null) as T;
  }
});
