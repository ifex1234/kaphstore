"use client";
/* eslint-disable react/no-unescaped-entities */
import { FaTruck, FaUndo } from "react-icons/fa";
import { Mobile } from "@/lib/assets/categories/mobile";
import {
  BsCartPlus,
  BsStarFill,
  BsStarHalf,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import React from "react";
import style from "@/lib/styles/productDetails.module.scss";
import Image from "next/image";
import { LuBook, LuHeart, LuSettings, LuUser } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/lib/services/Slice";

function Page({ params }: { params: { id: string } }) {
  const [favourite, setfavourite] = useState(false);
  const dispatch = useDispatch();
  const makeFavourite = () => {
    setfavourite((previous) => (previous = true));
  };
  const selectedID = Mobile.find((label) => label.id === params.id);
  return (
    <div className={`${style.container}`}>
      <div className={`${style.main}`}>
        <div className={`${style.image}`}>
          <Image width={311} height={311} src={selectedID?.image!} alt="" />
          <span className="flex flex-col my-5 px-5">
            <p>Share this product on:</p>
            <span className="flex flex-row gap-x-2">
              <BsTwitter />
              <BsFacebook />
            </span>
          </span>
        </div>

        <div className={`${style.specs}`}>
          <span>
            <h2>{selectedID?.title}</h2>
          </span>
          <Separator className="bg-slate-400 my-2" />
          <div className={`${style.price}`}>
            <p>N{selectedID?.price}</p>
            <p>Few units left</p>
            <p>shipping from 500 to Agege</p>
            <p>Product rating</p>
            <span className="flex flex-row justify-start w-20">
              <BsStarFill color="purple" /> <BsStarFill color="purple" />
              <BsStarFill color="purple" />
              <BsStarFill color="purple" /> <BsStarHalf color="purple" />
            </span>
          </div>
          <Separator className="bg-slate-400 my-2" />
          <div className="flex flex-row items-center justify-between">
            <Button
              className=" flex justify-between flex-row bg-purple-500 hover:bg-purple-700 w-2/3 my-3 h-14"
              // onClick={
              //   arrayItem.find((product) => product.id !== item.id)
              //     ? () => dispatch(addToCart(item))
              //     : () => dispatch(removeFromCart(item.id!))
              // }
            >
              <BsCartPlus size={25} />
              Add to Cart
              <div />
            </Button>
            <LuHeart
              size={25}
              color="purple"
              fill={`${favourite ? "purple" : ""}`}
              onClick={() => makeFavourite}
            />
          </div>
        </div>
      </div>
      <div className={`${style.side}`}>
        <h3>DELIVERY & RETURNS</h3>
        <Separator className="bg-black my-2" />
        <p>Free delivery on thousands of products in Lagos only</p>
        <Link href="">Details</Link>
        <Separator className="bg-black my-2" />
        <h2 className="my-3 font-semibold">Choose your Location</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex flex-row gap-x-2 border-none ring-0  bg-inherit justify-between"
              variant="outline"
            >
              Choose Location <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Location</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className=" bg-purple-600 text-white z-20">
              <Link
                className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
                href="/profile"
              >
                <LuUser className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>

              <DropdownMenuItem className="cursor-pointer hover:bg-slate-300 flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md">
                <LuSettings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>

              <Link
                className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
                href="/orders"
              >
                <LuBook className="mr-2 h-4 w-4" />
                <span>My orders</span>
              </Link>

              <Link
                className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
                href="/favourites"
              >
                <LuHeart className="mr-2 h-4 w-4" />
                <span>Favorites</span>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator className="bg-black my-2" />
        <div className={`${style.deliveries}`}>
          <div>image</div>
          <p>
            <strong> Pickup Station </strong>
            <br /> Delivery Fees ₦ 250 <br />
            Arriving at pickup station between 26 March & 28 March when you
            order within next 12hrs 50mins
          </p>
          <Link href="">details</Link>
        </div>
        <div className={`${style.deliveries}`}>
          <FaTruck size={80} />
          <p>
            <strong>Door Delivery</strong> <br /> Delivery Fees ₦ 620
            <br />
            Ready for delivery between 26 March & 28 March when you order within
            next 12hrs 50mins
          </p>
          <Link href="">details</Link>
        </div>
        <div className={`${style.deliveries}`}>
          <FaUndo size={20} />
          <p>Return Policy Free return within 7 days for ALL eligible items</p>
          <Link href="">details</Link>
        </div>
        <div className={`${style.deliveries}`}>
          <div>image</div>
          <p>Warranty 1 Year Warranty</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
