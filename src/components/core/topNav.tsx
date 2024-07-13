import React from "react";
import style from "@/lib/styles/topnav.module.scss";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { Dropdown } from "./dropdown";
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
        <Button className=" bg-purple-500 hover:bg-purple-700 text-white">
          Search
        </Button>
      </div>
      <div className={`${style.account}`}>
        <span className=" flex flex-row items-center justify-between gap-x-2">
          <Dropdown />
        </span>
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
