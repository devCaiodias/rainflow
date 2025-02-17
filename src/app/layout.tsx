import type { Metadata } from "next";
import "./globals.css";
import MainContainer from "./components/layout/MainContainer";

export const metadata: Metadata = {
  title: "RainFlow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-no-repeat bg-cover"
      >
        <MainContainer>

          {children}
        </MainContainer>
      </body>
    </html>
  );
}
