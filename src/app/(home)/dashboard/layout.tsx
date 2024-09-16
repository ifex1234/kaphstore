import React from "react";
import DashboardLayout from "@/components/core/dashboardLayout";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardLayout />
      <div>{children}</div>
    </div>
  );
}
