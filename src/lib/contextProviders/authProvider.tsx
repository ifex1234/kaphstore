"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const Providers = ({ children }: Prop) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
