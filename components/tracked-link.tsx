"use client";

import { trackClarityClick } from "@/lib/clarity";
import Link from "next/link";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  clarityEvent: string;
  clarityLocation?: string;
};

export function TrackedLink({
  clarityEvent,
  clarityLocation,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackClarityClick(clarityEvent, clarityLocation);
        onClick?.(event);
      }}
    />
  );
}
