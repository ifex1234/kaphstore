import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import React from "react";
import { Button } from "../ui/button";

export default function Logout() {
  return (
    <Button className="bg-fuchsia-500 hover:bg-gradient-to-r from-fuchsia-400 to-fuchsia-900">
      <LogoutLink>Log out</LogoutLink>
    </Button>
  );
}
