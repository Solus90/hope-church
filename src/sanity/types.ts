export interface SanitySermon {
  _id: string;
  title: string;
  series?: string;
  date: string; // ISO date string e.g. "2026-02-22"
  speaker?: string;
  scripture?: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  slug?: { current: string };
}

export interface SanityTestimonial {
  _id: string;
  quote: string;
  name: string;
  context?: string;
  featured?: boolean;
  order?: number;
}

export interface SanityHomeGroup {
  _id: string;
  name: string;
  slug?: string; // flattened from slug.current
  schedule?: string;
  type?: string;
  description?: string;
  featured?: boolean;
  order?: number;
}

export interface SanityStaffMember {
  _id: string;
  name: string;
  slug?: string;
  role: string;
  category?: "Pastoral Staff" | "Ministry Staff" | "Elders" | "Deacons";
  photoUrl?: string;
  bio?: unknown[]; // Portable Text blocks
  email?: string;
  order?: number;
}

export interface SanityPageHero {
  imageUrl?: string;
  imageHotspot?: { x: number; y: number; width: number; height: number };
}

export interface SanityEvent {
  _id: string;
  title: string;
  date: string; // ISO date string e.g. "2026-03-01"
  time?: string;
  location?: string;
  description?: string;
  registrationUrl?: string;
  featuredOnHome?: boolean;
}
