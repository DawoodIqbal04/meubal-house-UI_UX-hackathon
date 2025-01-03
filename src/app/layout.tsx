import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";

const poppins = Poppins({
  weight: ["200", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meubal House",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
