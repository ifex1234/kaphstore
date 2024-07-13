"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Drawer } from "../core/drawer";
import { FaCartShopping } from "react-icons/fa6";
import { Navlink } from "@/lib/assets/navlink";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row items-center h-16 justify-between text-slate-600 w-full bg-purple-600">
      <Link href="/">
        <span className=" origin-center  hover:rotate-360 text-white px-2 md:hidden xl:block">
          Home
        </span>
      </Link>

      <span className="hidden lg:flex ">
        <NavigationMenu className="text-slate-700 ">
          <NavigationMenuList>
            {Navlink.map((Links) => (
              <NavigationMenuItem key={Links.id}>
                <Link href={Links.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname === `${Links.href}`
                        ? "bg-slate-200 text-purple-900"
                        : ""
                    }  hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                  >
                    {Links.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </span>

      <div className=" flex justify-between items-center flex-row gap-5 px-2">
        <Link
          className="flex flex-row items-center gap-x-2 justify-end relative md:hidden"
          href="/cart"
        >
          <FaCartShopping fill="white" size={20} />
          <span className=" absolute -top-3 left-4 text-white">0</span>
        </Link>
        <span className="block lg:hidden">
          <Drawer />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
