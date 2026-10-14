/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens matching the hex values already used ad hoc
        // throughout the site — Navbar/Footer referenced bg-bg,
        // border-border, text-accent and text-subtle before these
        // existed, so those classes were silently no-ops.
        bg: "#0d0d0d",
        border: "#1f1f1f",
        // Brand wine: fills, borders, markers. Too dark for text on the
        // dark background (2.5:1), so text and icons use accent-fg.
        accent: "#9b2242",
        // Same hue, lightened to pass WCAG AA as text (≥ 5.4:1 on bg/cards).
        "accent-fg": "#d0738d",
        subtle: "#9b9b9b",
      },
    },
  },
  plugins: [],
};
