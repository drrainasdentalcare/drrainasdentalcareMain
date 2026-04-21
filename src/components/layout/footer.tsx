import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      style={dentalThemeVars}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>{homePageContent.clinicName}</p>
        <p>{homePageContent.tagline}</p>
      </div>
    </footer>
  );
}
