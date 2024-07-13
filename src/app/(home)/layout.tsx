import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Footer from "@/components/core/footer";
import ContextProvider from "@/components/core/ContextProvider";
import { TopAds } from "@/components/core/ads";
import Navbar from "@/components/core/navbar";
import { Separator } from "@/components/ui/separator";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaphstore",
  description: "online super store at affordable prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}flex flex-col md:container`}>
        <ContextProvider>
          <TopAds />
          <Separator />
          <Separator />
          <Navbar />
          <Separator />
          <div className=" w-full">{children}</div>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
