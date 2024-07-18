"use client";
import React from "react";
import style from "@/lib/styles/cart.module.scss";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

function Cart() {
  const router = useRouter();
  const cart = 0;
  return (
    <div className={`${style.container}`}>
      {cart !== 0 ? (
        <div className={`${style.isEmpty}`}>
          <div className={`${style.cart}`}>
            <h4>Your cart is empty!</h4>
            <p>Browse our categories and discover our best deals!</p>
            <Button
              className=" bg-purple-600 hover:bg-purple-800 h-12 text-white"
              onClick={() => router.push("/")}
            >
              Start Shopping
            </Button>
          </div>
        </div>
      ) : (
        <div className={`${style.notEmpty}`}>
          <h3>Cart (1)</h3>
          <Separator />
          <div className={`${style.content}`}>
            <div>image</div>
            <div className={`${style.btnContainer}`}>
              <Button className=" bg-purple-500 text-white hover:bg-purple-700">
                Remove
              </Button>
              <span className={`${style.calc}`}>
                <Button className="bg-purple-500 text-white hover:bg-purple-700">
                  -
                </Button>
                1
                <Button className="bg-purple-500 text-white hover:bg-purple-700">
                  +
                </Button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
