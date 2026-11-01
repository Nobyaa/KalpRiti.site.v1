import localFont from "next/font/local";

/**
 * Altone: Primary body, UI, buttons, forms font.
 * Loaded from Public/Assets/Fonts/Altone
 */
export const altone = localFont({
  src: [
    {
      path: "../../Public/Assets/Fonts/Altone/Open Type-TT/Altone-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/Altone/Open Type-TT/Altone-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/Altone/Open Type-TT/Altone-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/Altone/Open Type-TT/Altone-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/Altone/Open Type-TT/Altone-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-altone",
  display: "swap",
  declarations: [{ prop: "font-synthesis", value: "none" }],
});

/**
 * Qurova (DEMO): Headings only (H1 - H3, display).
 * Loaded from Public/Assets/Fonts/qurova-demo
 * TODO: Note from design rules - Qurova license must be purchased before official commercial launch.
 */
export const qurova = localFont({
  src: [
    {
      path: "../../Public/Assets/Fonts/qurova-demo/QurovaDEMO-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/qurova-demo/QurovaDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/qurova-demo/QurovaDEMO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/qurova-demo/QurovaDEMO-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Public/Assets/Fonts/qurova-demo/QurovaDEMO-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-qurova",
  display: "swap",
  declarations: [{ prop: "font-synthesis", value: "none" }],
});
