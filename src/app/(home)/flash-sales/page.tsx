import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";

import React from "react";

function page() {
  const flashSales = Products.slice(211, 235);
  return (
    <div className=" md:container">
      <div className=" bg-red-600 w-full h-14 text-white pt-4 px-5 mt-5 rounded-t-md">
        Time Left: HHMMSS
      </div>
      <Categories arrayItem={flashSales} />
    </div>
  );
}

export default page;
