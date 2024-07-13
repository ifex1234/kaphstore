import Categories from "@/components/core/Categories";
import { Groceries } from "@/lib/assets/categories/supermaket";
import React from "react";

export default function Page() {
  return (
    <div className=" md:container">
      <Categories arrayItem={Groceries} />
    </div>
  );
}
