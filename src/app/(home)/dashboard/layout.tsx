import DashboardLayout from "@/components/core/dashboardLayout";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

type Prop = {
  children: React.ReactNode;
};
export default async function layout({ children }: Prop) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }
  return (
    <div>
      <DashboardLayout />
      {children}
    </div>
  );
}
