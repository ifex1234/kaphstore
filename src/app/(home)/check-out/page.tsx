import React from "react";
import style from "@/lib/styles/checkout.module.scss";
import Link from "next/link";
import { LuCheckCircle2 } from "react-icons/lu";

function page() {
  const randVal = Math.ceil(Math.random() * 1000000000000);
  return (
    <div className={`${style.container}`}>
      <div className={`${style.content}`}>
        <h2>
          Check Out Successful <LuCheckCircle2 fill="green" />
        </h2>
        <p>Your order with id #{randVal} has been processed successfully</p>
        <Link href="/">Continue Shopping</Link>
      </div>
    </div>
  );
}

export default page;
