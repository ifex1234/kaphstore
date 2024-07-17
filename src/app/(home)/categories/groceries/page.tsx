import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const groceries = Products.slice(110, 142);
  return (
    <div className=" md:container">
      <Categories arrayItem={groceries} />
    </div>
  );
}
