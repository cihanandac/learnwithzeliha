import { Shadows_Into_Light } from "next/font/google";
import { Sevillana } from "next/font/google";

export const ShadowInto = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: '--shadow-into-font'
});

export const sevillana = Sevillana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--sevillana-font",
});