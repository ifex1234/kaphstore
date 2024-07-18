import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const electronics = Products.slice(170, 193);
  return (
    <div className=" md:container">
      <Categories arrayItem={electronics} />
    </div>
  );
}
