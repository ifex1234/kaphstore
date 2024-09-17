"use client";
import Categories from "@/components/core/Categories";
import { Products } from "@/lib/assets/allProducts";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
export default function Page() {
  const appliances = Products.slice(24, 50);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["appliance"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;
  console.log(data);
  return (
    <div className=" md:container">
      <Categories arrayItem={data} />
    </div>
  );
}
