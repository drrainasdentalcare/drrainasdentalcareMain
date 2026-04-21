import Link from "next/link";
import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur"
      style={dentalThemeVars}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-semibold text-[var(--color-heading)]">
          {homePageContent.clinicName}
        </Link>
        {homePageContent.navItems.length > 0 ? (
          <nav className="hidden items-center gap-6 md:flex">
            {homePageContent.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-body)] transition hover:text-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
