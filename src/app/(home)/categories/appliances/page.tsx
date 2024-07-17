import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const fashion = Products.slice(0, 13);
  return (
    <div className=" md:container">
      <Categories arrayItem={fashion} />
    </div>
  );
}
