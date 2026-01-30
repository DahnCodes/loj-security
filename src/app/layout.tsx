import type { Metadata } from "next";
import { Zalando_Sans } from "next/font/google";
import "./globals.css";

const zalandoSans = Zalando_Sans({
  subsets: ["latin"],
  variable: "--font-zalando",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lion of Judah Security",
  description: "Professional security services",
 
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${zalandoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
