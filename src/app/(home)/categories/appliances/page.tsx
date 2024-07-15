import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  return (
    <div className=" md:container">
      <Categories arrayItem={Products} />
    </div>
  );
}
