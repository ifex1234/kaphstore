"use client";
/* eslint-disable react/no-unescaped-entities */
import { FaTruck, FaUndo } from "react-icons/fa";
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
import FormatCurrency from "@/lib/services/FormatCurrency";
import { fetchProduct } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import useStore from "@/lib/services/zustStore";
import { LoadingSkeletonSecondary } from "@/components/core/skeleton";

function Page({ params }: { params: { id: string } }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => fetchProduct(params.id),
    enabled: !!params.id,
  });
  const [favourite, setfavourite] = useState(true);
  const [inCart, setInCart] = useState(false);
  const delFee = Math.round(Math.random() * 1000);
  const cart = useStore((state) => state.cart);

  const makeFavourite = () => {
    setfavourite(!favourite);
  };
  const addToCart = (id: number) => {
    const selectId = cart.find((item) => item.id === id);
    if (selectId === undefined) {
      add_to_cart(data);
      setTimeout(() => setInCart(!inCart), 3000);
      console.log("logged");
    } else {
      console.log("item in cart");
    }
  };
  const add_to_cart = useStore((state) => state.addTCart);

  if (isLoading) return <LoadingSkeletonSecondary />;
  if (isError) return <div>error...</div>;

  return (
    <div className={`${style.container}`}>
      <div className={`${style.main}`}>
        <div className={`${style.image}`}>
          <Image
            width={311}
            height={311}
            src={data.imageUrl!}
            alt=""
            priority
          />
          <span className="flex flex-col my-5 px-5">
            <p>Share this product on:</p>
            <span className="flex flex-row gap-x-2">
              <BsTwitter className=" cursor-pointer" />
              <BsFacebook className=" cursor-pointer" />
            </span>
          </span>
        </div>

        <div className={`${style.specs}`}>
          <span className=" flex justify-between">
            <h2>{data.title}</h2>
          </span>
          <Separator className="bg-slate-400 my-2" />
          <div className={`${style.price}`}>
            <p>{FormatCurrency(data.currentPrice!)}</p>
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
              className={`${style.btn}`}
              onClick={() => addToCart(data.id)}
            >
              <BsCartPlus size={25} />
              {inCart ? "Item now in cart" : "Add to Cart"}
              <div />
            </Button>
            <LuHeart
              className=" cursor-pointer md:inline-block hidden"
              size={25}
              onClick={makeFavourite}
              fill={`${favourite ? "#ba3fa7" : "transparent"}`}
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
    </div>
  );
}

export default Page;
