import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const appliances = Products.slice(169);
  return (
    <div className=" md:container">
      <Categories arrayItem={appliances} />
    </div>
  );
}
