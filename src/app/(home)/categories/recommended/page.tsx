"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import { LoadingSkeleton } from "@/components/core/skeleton";
import ProductsCategory from "@/components/core/productCategories";
export default function Page() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["recommended"],
    queryFn: () => fetchProducts("recommended"),
  });
  if (isLoading)
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  if (isError) return <div>error...</div>;
  return (
    <div className=" md:container">
      <ProductsCategory arrayItem={data} />
    </div>
  );
}
