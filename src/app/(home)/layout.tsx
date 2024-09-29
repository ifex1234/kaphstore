import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Footer from "@/components/core/footer";
import { TopAds } from "@/components/core/ads";
import Navbar from "@/components/core/navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";
import style from "../../lib/styles/topnav.module.scss";
import QueryContext from "@/lib/contextProviders/queryContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
      <body
        className={`${inter.className}flex flex-col md:container ${style.bg_main}`}
      >
        {/* <ClerkProvider> */}
        <QueryContext>
          <TopAds />
          <Separator />
          <Navbar />
          <Separator />
          {/* <TopNav /> */}
          <Separator />
          <div className=" w-full">{children}</div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: { backgroundColor: "purple", color: "white" },
            }}
            theme="system"
          />
          <Footer />
          <ReactQueryDevtools position="bottom" />
        </QueryContext>
        {/* </ClerkProvider> */}
      </body>
    </html>
  );
}
