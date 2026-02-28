import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DegenClash - Predict. Battle. Win.",
  description:
    "Experience the thrill of gamified crypto prediction markets. Engage in high-stakes 1v1 duels or join forces in team battles to dominate the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-green-400 selection:text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
