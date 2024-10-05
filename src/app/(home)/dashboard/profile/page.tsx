"use client";
import { BillingTable } from "@/components/core/billingInfo";
import CreateUserInfo from "@/components/core/createBillingInfo";
import Loader from "@/components/core/loader";
import { fetchUser } from "@/lib/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
  const { user } = useKindeBrowserClient();
  const { isError, isLoading, data } = useQuery({
    queryKey: ["userId"],
    queryFn: () => fetchUser(String(user?.id)),
  });
  if (isLoading) return <Loader />;
  if (isError) return <p>error loading details</p>;
  if (data?.userId === user?.id!) {
    const { firstName, lastName, email, phoneNo, address } = data;
    return (
      <>
        <BillingTable
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNo={phoneNo}
          address={address}
        />
      </>
    );
  }
  return (
    <div className="flex justify-center flex-col gap-4">
      <h1 className="font-normal text-2xl container text-center mt-3">
        Add Billing Information
      </h1>
      <CreateUserInfo />
    </div>
  );
}
