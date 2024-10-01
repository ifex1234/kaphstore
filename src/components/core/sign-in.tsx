import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React from "react";

export default async function SignIn() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return (
      <>
        <LoginLink>Sign in</LoginLink>
      </>
    );
  }
}
