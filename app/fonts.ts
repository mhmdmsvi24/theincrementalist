import localFont from "next/font/local"

// ─────────────────────────────────────────────
// Iran Sans
// ─────────────────────────────────────────────

export const fontIrSans = localFont({
  src: "./fonts/IranSans.ttf",
  variable: "--font-ir-sans",
  weight: "400",
  style: "normal",
  display: "swap",
})

// ─────────────────────────────────────────────
// Vazir
// ─────────────────────────────────────────────

export const vazirmatn = localFont({
  variable: "--font-vazirmatn",
  src: [
    {
      path: "./fonts/Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
})

// ─────────────────────────────────────────────
// Roboto
// ─────────────────────────────────────────────

export const roboto = localFont({
  variable: "--font-en-roboto",
  src: [
    {
      path: "./fonts/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
})

// ─────────────────────────────────────────────
// Sekuya
// ─────────────────────────────────────────────

export const fontSekuya = localFont({
  variable: "--font-sekuya",
  src: "./fonts/Sekuya-Regular.woff2",
  style: "normal",
})
