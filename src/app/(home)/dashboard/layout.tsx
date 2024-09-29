import DashboardLayout from "@/components/core/dashboardLayout";
import Loader from "@/components/core/loader";
import React, { Suspense } from "react";

type Prop = {
  children: React.ReactNode;
};
export default function layout({ children }: Prop) {
  return (
    <div>
      <DashboardLayout />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
