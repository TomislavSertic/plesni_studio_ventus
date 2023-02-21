import { buildLegacyTheme } from "sanity";

const props = {
  "color-light": "#fff",
  "color-dark": "#1a1a1a",
  "color-primary-300": "#f86e51",
  "color-primary-500": "#ee3e3b",
  "color-secondary-500": "#4b2d67",
  "color-warning": "#ff3650",
  "color-caution": "#ffcc00",
  "color-success": "#00cb90",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["color-dark"],
  "--white": props["color-light"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["color-dark"],
  "--component-text-color": props["color-light"],

  /* BRAND */

  "--brand-primary": props["color-primary-300"],
});
