import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Gnb from "@/components/gnb";
import Header from "@/components/header";
import Favicon from "../../public/favicon.ico";

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
      <body className="flex flex-col w-full max-w-screen-md mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Gnb />
      </body>
    </html>
  );
}
