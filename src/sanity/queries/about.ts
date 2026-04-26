import { groq } from "next-sanity";
import { sanityClient } from "@/src/sanity/lib/client";
import type { SanityAboutSection } from "@/src/sanity/types/about";

const aboutSectionQuery = groq`
  *[_type == "aboutSection"][0]{
    label,
    title,
    highlightText,
    paragraphOne,
    paragraphTwo,
    ctaLabel,
    ctaHref,
    image{
      alt,
      asset->{
        url
      }
    }
  }
`;

export async function getAboutSection(): Promise<SanityAboutSection | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<SanityAboutSection | null>(
      aboutSectionQuery,
      {},
      { next: { revalidate: 30 } },
    );
    return result;
  } catch {
    return null;
  }
}
