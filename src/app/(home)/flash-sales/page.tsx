import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";

import React from "react";

function page() {
  const flashSales = Products.slice(211, 235);
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div className=" md:container">
      <div className=" bg-red-600 w-full h-14 text-white pt-4 px-5 mt-5 rounded-t-md">
        Time Left: {hour}:{minute}:{seconds}
      </div>
      <Categories arrayItem={flashSales} />
    </div>
  );
}

export default page;
