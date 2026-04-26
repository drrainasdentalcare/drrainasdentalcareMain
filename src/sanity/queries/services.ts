import { groq } from "next-sanity";
import { sanityClient } from "@/src/sanity/lib/client";
import type { SanityServicesSection } from "@/src/sanity/types/services";

const servicesSectionQuery = groq`
  *[_type == "servicesSection"][0]{
    label,
    title,
    highlightText,
    subtitle,
    items[]{
      title,
      description,
      image{
        alt,
        asset->{
          url
        }
      }
    }
  }
`;

export async function getServicesSection(): Promise<SanityServicesSection | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<SanityServicesSection | null>(
      servicesSectionQuery,
      {},
      { next: { revalidate: 30 } },
    );
    return result;
  } catch {
    return null;
  }
}
