import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const home = Products.slice(142, 170);
  return (
    <div className=" md:container">
      <Categories arrayItem={home} />
    </div>
  );
}
