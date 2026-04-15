import type { CSSProperties } from "react";

export const dentalTheme = {
  colors: {
    background: "#f4f8fa",
    surface: "#ffffff",
    heading: "#0f172a",
    body: "#475569",
    muted: "#64748b",
    accent: "#0b7280",
    accentHover: "#095e69",
    accentSoft: "#ecf8f9",
    accentBorder: "#b7dce1",
    border: "#dce8ee",
    borderSoft: "#e2eef2",
    deepSurface: "#0f172a",
    deepText: "#cbd5e1",
    deepAccent: "#93dbe2",
  },
} as const;

export const dentalThemeVars = {
  "--color-bg": dentalTheme.colors.background,
  "--color-surface": dentalTheme.colors.surface,
  "--color-heading": dentalTheme.colors.heading,
  "--color-body": dentalTheme.colors.body,
  "--color-muted": dentalTheme.colors.muted,
  "--color-accent": dentalTheme.colors.accent,
  "--color-accent-hover": dentalTheme.colors.accentHover,
  "--color-accent-soft": dentalTheme.colors.accentSoft,
  "--color-accent-border": dentalTheme.colors.accentBorder,
  "--color-border": dentalTheme.colors.border,
  "--color-border-soft": dentalTheme.colors.borderSoft,
  "--color-deep-surface": dentalTheme.colors.deepSurface,
  "--color-deep-text": dentalTheme.colors.deepText,
  "--color-deep-accent": dentalTheme.colors.deepAccent,
} as CSSProperties;
