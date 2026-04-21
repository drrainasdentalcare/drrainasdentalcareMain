import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function AboutPreviewSection() {
  return (
    <aside className="space-y-6" style={dentalThemeVars}>
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <p className="text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
          Quick Info
        </p>
        <div className="mt-3 space-y-2 text-sm text-[var(--color-body)]">
          {homePageContent.highlights.map((item) => (
            <p key={item.label}>
              <span className="font-semibold text-[var(--color-heading)]">{item.label}:</span>{" "}
              {item.value}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-deep-surface)] p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-[var(--color-deep-accent)] uppercase">
          Contact Details
        </p>
        <div className="mt-3 space-y-1 text-sm text-[var(--color-deep-text)]">
          {homePageContent.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold text-white">Call Now:</p>
        <div className="mt-2 space-y-1 text-sm text-[var(--color-deep-text)]">
          {homePageContent.phoneNumbers.map((phone) => (
            <p key={phone}>{phone}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}
