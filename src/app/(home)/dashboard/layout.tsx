import React from "react";
import DashboardLayout from "@/components/core/dashboardLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Link href={`dashboard/profile/${session?.user.id}`}> profile</Link>
      <DashboardLayout />
      <div>{children}</div>
    </div>
  );
}
