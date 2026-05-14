"use client";

import { initClarity, trackClarityPage } from "@/lib/clarity";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ClarityAnalytics() {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!projectId || initializedRef.current) {
      return;
    }

    initClarity(projectId);
    initializedRef.current = true;
  }, []);

  useEffect(() => {
    if (!initializedRef.current) {
      return;
    }

    trackClarityPage(pathname, window.location.search);
  }, [pathname]);

  return null;
}
