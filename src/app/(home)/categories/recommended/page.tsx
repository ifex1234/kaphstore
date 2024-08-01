import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";

import React from "react";

function page() {
  const recommended = Products.slice(235, 255);
  return (
    <div className=" md:container">
      <Categories arrayItem={recommended} />
    </div>
  );
}

export default page;
