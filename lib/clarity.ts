import Clarity from "@microsoft/clarity";

const VISITOR_ID_KEY = "raina_clarity_visitor_id";

let initialized = false;

function getOrCreateVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }

  return id;
}

export function initClarity(projectId: string) {
  if (initialized) {
    return;
  }

  Clarity.init(projectId);
  Clarity.consentV2({
    ad_Storage: "granted",
    analytics_Storage: "granted",
  });
  initialized = true;
}

export function trackClarityPage(pathname: string, search = "") {
  if (!initialized) {
    return;
  }

  const pageId = search ? `${pathname}${search}` : pathname;
  const visitorId = getOrCreateVisitorId();

  Clarity.identify(visitorId, undefined, pageId);
  Clarity.setTag("page", pathname);

  const params = new URLSearchParams(search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

  for (const key of utmKeys) {
    const value = params.get(key);

    if (value) {
      Clarity.setTag(key, value);
    }
  }

  if (pathname === "/contact-us" || pathname === "/online-consultation") {
    Clarity.upgrade("high_intent_page");
  }
}

export function trackClarityEvent(eventName: string) {
  if (!initialized) {
    return;
  }

  Clarity.event(eventName);
}

export function trackClarityClick(eventName: string, location?: string) {
  trackClarityEvent(eventName);

  if (location) {
    setClarityTag("click_location", location);
  }
}

export function setClarityTag(key: string, value: string | string[]) {
  if (!initialized) {
    return;
  }

  Clarity.setTag(key, value);
}
