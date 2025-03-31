import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "vishwajeet_profile",
  description: "This is my developer profile built on Next Js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-background dark:text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
