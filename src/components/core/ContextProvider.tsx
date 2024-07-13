"use client";
import { myStore } from "@/lib/services/Store";
import React from "react";
import { Provider } from "react-redux";

function ContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={myStore}>{children}</Provider>;
}

export default ContextProvider;
