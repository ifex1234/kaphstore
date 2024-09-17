import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Footer from "@/components/core/footer";
import ContextProvider from "@/components/core/ContextProvider";
import { TopAds } from "@/components/core/ads";
import Navbar from "@/components/core/navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";
import style from "../../lib/styles/topnav.module.scss";
import QueryContext from "@/lib/services/queryContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <QueryContext>
          <ContextProvider>
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
          </ContextProvider>
          <ReactQueryDevtools position="bottom" />
        </QueryContext>
      </body>
    </html>
  );
}
