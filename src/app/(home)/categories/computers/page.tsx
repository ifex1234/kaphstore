import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";

import React from "react";

function page() {
  const computing = Products.slice(193, 211);
  return (
    <div className=" md:container">
      <Categories arrayItem={computing} />
    </div>
  );
}

export default page;
