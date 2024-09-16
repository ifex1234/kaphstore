import Categories from "@/components/core/Categories";
import { Toaster } from "@/components/ui/sonner";
import { Products } from "@/lib/assets/allProducts";
import React from "react";
export default async function Page() {
  const appliances = Products.slice(24, 50);

  return (
    <div className=" md:container">
      <Categories arrayItem={appliances} />
      <Toaster
        position="bottom-right"
        toastOptions={{ style: { backgroundColor: "purple", color: "white" } }}
        theme="system"
      />
    </div>
  );
}
