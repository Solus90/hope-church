import { groq } from "next-sanity";

// ─── Sermons ───────────────────────────────────────────────────────────────

export const latestSermonQuery = groq`
  *[_type == "sermon"] | order(date desc) [0] {
    _id,
    title,
    series,
    date,
    speaker,
    scripture,
    description,
    videoUrl,
    "thumbnailUrl": thumbnail.asset->url,
    slug
  }
`;

export const allSermonsQuery = groq`
  *[_type == "sermon"] | order(date desc) {
    _id,
    title,
    series,
    date,
    speaker,
    scripture,
    description,
    videoUrl,
    "thumbnailUrl": thumbnail.asset->url,
    slug
  }
`;

// ─── Testimonials ──────────────────────────────────────────────────────────

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    quote,
    name,
    context
  }
`;

// ─── Home Groups ───────────────────────────────────────────────────────────

export const featuredHomeGroupsQuery = groq`
  *[_type == "homeGroup" && featured == true] | order(order asc) {
    _id,
    name,
    schedule,
    type,
    description,
    "slug": slug.current
  }
`;

export const allHomeGroupsQuery = groq`
  *[_type == "homeGroup"] | order(order asc) {
    _id,
    name,
    schedule,
    type,
    description,
    "slug": slug.current
  }
`;

// ─── Staff / Leadership ────────────────────────────────────────────────────

export const allStaffQuery = groq`
  *[_type == "staffMember"] | order(order asc) {
    _id,
    name,
    role,
    category,
    "photoUrl": photo.asset->url,
    bio,
    email,
    "slug": slug.current
  }
`;

// ─── Page Hero Images ───────────────────────────────────────────────────────

export const pageHeroQuery = groq`
  *[_type == "pageHero" && page == $page][0] {
    "imageUrl": image.asset->url,
    "imageHotspot": image.hotspot
  }
`;

// ─── Events ─────────────────────────────────────────────────────────────────

// Returns up to 4 upcoming events (today or later) sorted by date ascending.
// Pass { today: "YYYY-MM-DD" } as params.
export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= $today && featuredOnHome == true] | order(date asc) [0...4] {
    _id,
    title,
    date,
    time,
    location,
    description,
    registrationUrl
  }
`;

export const allEventsQuery = groq`
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    date,
    time,
    location,
    description,
    registrationUrl,
    featuredOnHome
  }
`;
