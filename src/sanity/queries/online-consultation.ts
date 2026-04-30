import { groq } from "next-sanity";
import { sanityClient } from "@/src/sanity/lib/client";
import type { SanityOnlineConsultationPage } from "@/src/sanity/types/online-consultation";

const onlineConsultationPageQuery = groq`
  *[_type == "onlineConsultationPage"][0]{
    badge,
    title,
    description,
    consultationFeeLabel,
    consultationFee,
    afterPaymentLabel,
    afterPaymentText,
    phone,
    callPhone,
    afterPaymentSuffix,
    note,
    qrLabel,
    qrImage{
      alt,
      asset->{
        url
      }
    }
  }
`;

export async function getOnlineConsultationPage(): Promise<SanityOnlineConsultationPage | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch<SanityOnlineConsultationPage | null>(
      onlineConsultationPageQuery,
      {},
      { next: { revalidate: 30 } },
    );
    return result;
  } catch {
    return null;
  }
}
