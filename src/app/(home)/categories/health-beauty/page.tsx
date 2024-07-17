import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";

export default function Page() {
  const health_beauty = Products.slice(81, 110);
  return (
    <div className=" md:container">
      <Categories arrayItem={health_beauty} />
    </div>
  );
}
