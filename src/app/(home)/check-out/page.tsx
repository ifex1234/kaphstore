import React from "react";
import style from "@/lib/styles/checkout.module.scss";
import Link from "next/link";
import { LuCheckCircle2 } from "react-icons/lu";
import Checkout from "@/components/core/checkout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function page() {
  const randVal = Math.ceil(Math.random() * 1000000000000);
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }
  return (
    <div className={`${style.container}`}>
      <div className={`${style.content}`}>
        <h2>Check Out Page</h2>
        <Checkout />
      </div>
    </div>
  );
}

export default page;
