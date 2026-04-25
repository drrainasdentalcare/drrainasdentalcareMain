"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, ChevronDown } from "lucide-react";
import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (href === "/") {
      return pathname === "/";
    }
    const baseActive = pathname === href || pathname.startsWith(`${href}/`);
    const childActive =
      children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`)) ??
      false;
    return baseActive || childActive;
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (mobileMenuRef.current?.contains(target)) return;
      if (mobileToggleRef.current?.contains(target)) return;
      setMobileOpen(false);
      setMobileExpanded(null);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("touchstart", onPointerDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-20 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur"
      style={dentalThemeVars}
    >
      <div className="flex w-full items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:gap-10 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/Images/Logo/logo-main.png"
            alt="Dr Raina logo"
            width={68}
            height={68}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            priority
          />
          <span className="flex flex-col leading-[0.8] sm:min-w-[220px] lg:min-w-[255px]">
            <span
              className="text-[1.8rem] tracking-tight sm:text-[2.2rem] lg:text-[2.85rem]"
              style={{
                color: "var(--color-logo-orange)",
                fontFamily: '"Brush Script EF", "Brush Script MT", cursive',
                fontWeight: 500,
              }}
            >
              Dr Raina&apos;s
            </span>
            <span className="text-[0.68rem] font-bold tracking-tight text-[var(--color-black)] sm:text-sm lg:text-base">
              Dental Care &amp; Implants
            </span>
          </span>
        </Link>
        <button
          ref={mobileToggleRef}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((open) => !open);
            if (mobileOpen) {
              setMobileExpanded(null);
            }
          }}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[var(--color-black)] transition hover:bg-[var(--color-accent)]/15 xl:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-4 rounded bg-current transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        <nav className="ml-auto hidden items-center gap-6 xl:flex">
          {homePageContent.navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`group/nav relative flex items-center gap-1 overflow-hidden py-1 font-heading text-base font-semibold whitespace-nowrap ${
                  isItemActive(item.href, item.children)
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-black)]"
                }`}
              >
                <span className="relative block h-6 overflow-hidden">
                  <span className="block transition-transform duration-300 ease-out group-hover/nav:-translate-y-6">
                    {item.label}
                  </span>
                  <span className="absolute inset-x-0 top-6 block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover/nav:-translate-y-6">
                    {item.label}
                  </span>
                </span>
                {item.children?.length ? (
                  <ChevronDown className="h-3.5 w-3.5 text-[var(--color-black)] transition-transform duration-200 group-hover/nav:rotate-180" />
                ) : null}
              </Link>

              {item.children?.length ? (
                <div className="invisible absolute left-0 top-full z-30 mt-2 w-56 translate-y-2 border border-[var(--color-border)] bg-[var(--color-surface)] opacity-0 shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-250 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex flex-col py-1">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="px-4 py-2 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link
          href="/contact-us"
          className="ml-auto hidden items-center gap-2 bg-[var(--color-accent)] px-8 py-3 text-base font-bold text-white transition hover:bg-[var(--color-accent-hover)] xl:inline-flex"
        >
          <CalendarDays className="h-5 w-5" />
          {homePageContent.ctaSecondary}
        </Link>
      </div>
      <div
        ref={mobileMenuRef}
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 xl:hidden ${
          mobileOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {homePageContent.navItems.map((item) => (
            <div key={item.href} className="border-b border-[var(--color-border-soft)] last:border-b-0">
              {item.children?.length ? (
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded((prev) => (prev === item.label ? null : item.label))
                  }
                  className="flex w-full items-center justify-between py-3 text-left font-heading text-base font-semibold text-[var(--color-black)]"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-[var(--color-black)] transition-transform duration-200 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileExpanded(null);
                  }}
                  className={`flex items-center justify-between py-3 font-heading text-base font-semibold ${
                    isItemActive(item.href, item.children)
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-black)]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
              {item.children?.length ? (
                <div
                  className={`grid transition-all duration-300 ${
                    mobileExpanded === item.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                  {item.children.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileExpanded(null);
                      }}
                      className={`block rounded-sm py-1.5 pl-4 text-sm font-semibold transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)] ${
                        pathname === subItem.href || pathname.startsWith(`${subItem.href}/`)
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-body)]"
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          <Link
            href="/contact-us"
            onClick={() => {
              setMobileOpen(false);
              setMobileExpanded(null);
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] px-8 py-3 text-base font-bold text-white"
          >
            <CalendarDays className="h-5 w-5" />
            {homePageContent.ctaSecondary}
          </Link>
        </div>
      </div>
    </header>
  );
}
