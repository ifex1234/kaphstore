"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import TestAppliance from "@/components/core/testAppliance";
import { Products } from "@/lib/assets/allProducts";
export default function Page() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["appliances"],
    queryFn: () => fetchProducts("appliances"),
  });
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;
  console.log(data);
  return (
    <div className=" md:container">
      <TestAppliance arrayItem={data} />
    </div>
  );
}
