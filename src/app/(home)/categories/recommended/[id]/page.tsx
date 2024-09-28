"use client";
/* eslint-disable react/no-unescaped-entities */
import { FaTruck, FaUndo } from "react-icons/fa";
import { Products } from "@/lib/assets/allProducts";
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
import { LuHeart } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormatCurrency from "@/lib/services/FormatCurrency";
import { toast, Toaster } from "sonner";
import useStore from "@/lib/services/zustStore";

function Page({ params }: { params: { id: string } }) {
  const [favourite, setfavourite] = useState(false);
  const delFee = Math.round(Math.random() * 1000);
  const flahSales = Products.slice(235, 255);
  const dispatch = useDispatch();
  const makeFavourite = () => {
    setfavourite((previous) => (previous = true));
  };
  const selectedID = flahSales.find((label) => label.id === params.id);
  const add_to_cart = useStore((state) => state.addTCart);
  return (
    <div className={`${style.container}`}>
      <div className={`${style.main}`}>
        <div className={`${style.image}`}>
          <Image
            width={311}
            height={311}
            src={selectedID?.image!}
            alt=""
            priority
          />
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
            <p>{FormatCurrency(selectedID?.price!)}</p>
            <p>Few units left</p>
            <p>shipping from {delFee} to Lagos</p>
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
              variant="outline"
              onClick={() =>
                toast("Item added to cart", {
                  action: {
                    label: "Happy shopping",
                    onClick: () => add_to_cart,
                  },
                })
              }
            >
              <BsCartPlus size={25} />
              Add to Cart
              <div />
            </Button>
            {/* <Button
              className=" flex justify-between flex-row bg-purple-500 hover:bg-purple-700 w-2/3 my-3 h-14"
              onClick={() => dispatch(addToCart(selectedID))}
            >
              <BsCartPlus size={25} />
              Add to Carts
              <div />
            </Button> */}
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
      <Toaster />
    </div>
  );
}

export default Page;
