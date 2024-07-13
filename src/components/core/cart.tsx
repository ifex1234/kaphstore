"use client";
import React from "react";
import style from "@/lib/styles/cart.module.scss";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();
  const cart = 0;
  return (
    <div className={`${style.container}`}>
      {cart === 0 ? (
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
        <div> you have one item in cart</div>
      )}
    </div>
  );
}

export default Cart;
