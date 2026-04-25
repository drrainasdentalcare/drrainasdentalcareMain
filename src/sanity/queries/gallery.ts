import { groq } from "next-sanity";
import { sanityClient } from "@/src/sanity/lib/client";
import type { SanityGallerySection } from "@/src/sanity/types/gallery";

const gallerySectionQuery = groq`
  *[_type == "gallerySection"][0]{
    label,
    title,
    subtitle,
    clinicTabLabel,
    eventTabLabel,
    clinicImages[]{
      _type,
      alt,
      description,
      asset->{
        url
      },
      image{
        asset->{
          url
        }
      }
    },
    eventImages[]{
      _type,
      alt,
      description,
      asset->{
        url
      },
      image{
        asset->{
          url
        }
      }
    }
  }
`;

export async function getGallerySection(): Promise<SanityGallerySection | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<SanityGallerySection | null>(gallerySectionQuery);
    return result;
  } catch {
    return null;
  }
}
