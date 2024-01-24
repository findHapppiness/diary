import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Gnb from "@/components/gnb";
import Header from "@/components/header";
import Favicon from "../../public/favicon.ico";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "행복을 찾아서 : Diary",
  description: "diary app description",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hidden sm:block md:block">
        <Header />
        <div>{children}</div>
        <Gnb />
      </body>
    </html>
  );
}
