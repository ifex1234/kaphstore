import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const mobile = Products.slice(0, 24);
  return (
    <div className=" md:container">
      <Categories arrayItem={mobile} />
    </div>
  );
}
