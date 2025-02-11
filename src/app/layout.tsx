import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import CartModel from "./components/CartModel";
import CartProviders from "./components/CartProviders";

const poppins = Poppins({
  weight: ["200", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meubal House",
  description: "Pakistan's leading furniture store and specialist",
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
        <CartProviders>
          <CartModel />
          {children}
          <Footer />
        </CartProviders>
      </body>
    </html>
  );
}
