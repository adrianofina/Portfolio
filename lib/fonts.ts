import localFont from "next/font/local";

export const cormorant = localFont({
  src: [
    { path: "../public/fonts/CormorantGaramond-Light.woff2",       weight: "300", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-Regular.woff2",     weight: "400", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-Medium.woff2",      weight: "500", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/CormorantGaramond-Italic.woff2",      weight: "400", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-Light.woff2",   weight: "300", style: "normal" },
    { path: "../public/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-Medium.woff2",  weight: "500", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});