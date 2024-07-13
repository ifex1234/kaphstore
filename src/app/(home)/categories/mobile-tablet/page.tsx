import Categories from "@/components/core/Categories";
import { Mobile } from "@/lib/assets/categories/mobile";
import React from "react";

export default function Page() {
  return (
    <div className=" md:container">
      <Categories arrayItem={Mobile} />
    </div>
  );
}
