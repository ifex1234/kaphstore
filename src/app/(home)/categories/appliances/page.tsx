import Categories from "@/components/core/Categories";
import { Toaster } from "@/components/ui/sonner";
import { Products } from "@/lib/assets/allProducts";
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
export default async function Page() {
  const appliances = Products.slice(24, 50);
  const datas = await fetch("http://127.0.0.1:3000/cart");
  const prod = datas.json();
  console.log(prod);

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
