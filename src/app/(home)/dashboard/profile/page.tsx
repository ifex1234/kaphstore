import CreateUserInfo from "@/components/core/createBillingInfo";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center flex-col gap-4">
      <h1 className="font-normal text-2xl container text-center mt-3">
        Add Billing Information
      </h1>
      <CreateUserInfo />
    </div>
  );
}
