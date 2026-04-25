import { groq } from "next-sanity";
import { sanityClient } from "@/src/sanity/lib/client";
import type { SanityTestimonialsSection } from "@/src/sanity/types/testimonials";

const testimonialsSectionQuery = groq`
  *[_type == "testimonialsSection"][0]{
    label,
    title,
    subtitle,
    googleReviewsUrl,
    items[]{
      name,
      review,
      treatment,
      rating
    }
  }
`;

export async function getTestimonialsSection(): Promise<SanityTestimonialsSection | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<SanityTestimonialsSection | null>(
      testimonialsSectionQuery,
      {},
      { next: { revalidate: 30 } },
    );
    return result;
  } catch {
    return null;
  }
}
