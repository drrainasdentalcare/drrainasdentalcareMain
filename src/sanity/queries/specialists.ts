import { groq } from "next-sanity";
import { sanityClient } from "@/src/sanity/lib/client";
import type { SanitySpecialistsSection } from "@/src/sanity/types/specialists";

const specialistsSectionQuery = groq`
  *[_type == "specialistsSection"][0]{
    label,
    title,
    highlightText,
    subtitle,
    doctors[]{
      name,
      role,
      image{
        alt,
        asset->{
          url
        }
      }
    }
  }
`;

export async function getSpecialistsSection(): Promise<SanitySpecialistsSection | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<SanitySpecialistsSection | null>(
      specialistsSectionQuery,
      {},
      { next: { revalidate: 30 } },
    );
    return result;
  } catch {
    return null;
  }
}
