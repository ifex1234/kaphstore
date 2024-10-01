import React from "react";
import style from "@/lib/styles/topnav.module.scss";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

function TopNav() {
  return (
    <div className={`${style.container}`}>
      <span>Kaphstore</span>
      <div className={`${style.inputdiv}`}>
        <Input
          className=" w-10/12"
          placeholder="Search products, brands and categories"
        />
        <Button className={`${style.btn}`}>Search</Button>
      </div>
      <div className={`${style.account}`}>
        <span className="">
          <Link
            className="flex flex-row items-center gap-x-2 justify-end relative"
            href="/cart"
          >
            <FaCartShopping />
            <span className=" absolute -top-3 left-3">0</span>
            cart
          </Link>
        </span>
      </div>
    </div>
  );
}

export default TopNav;
