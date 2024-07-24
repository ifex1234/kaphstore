"use client";
import React from "react";
import style from "@/lib/styles/cart.module.scss";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { increment, decrement, removeFromCart } from "@/lib/services/Slice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/lib/services/Store";
import Image from "next/image";
import FormatCurrency from "@/lib/services/FormatCurrency";
import { LuTrash } from "react-icons/lu";

function Cart() {
  const router = useRouter();
  const products = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setTotalCart(
      products.reduce((arg1: number, arg2) => arg1 + arg2.price! * arg2.qty, 0)
    );
  }, [products]);
  return (
    <div className={`${style.container}`}>
      {products.length ? (
        <div className={`${style.notEmpty} lg:container`}>
          <div className={`${style.mainContent}`}>
            <h3>cart:({products.length}) items</h3>
            <Separator />
            {products.map((product) => (
              <div
                key={product.id}
                className={` h-64 w-full flex flex-col gap-2`}
              >
                <div className={`${style.details}`}>
                  <span className="w-32 h-11">
                    <Image src={product.image!} alt="" />
                  </span>
                  <span className=" flex flex-col gap-2">
                    <span>{FormatCurrency(product.price!)} </span>
                    <span> {FormatCurrency(product.old!)}</span>
                  </span>
                </div>
                <div className={`${style.btnContainer}`}>
                  <Button
                    onClick={() => removeFromCart(product.id)}
                    className=" bg-purple-500 text-white hover:bg-purple-700 flex flex-row gap-5"
                  >
                    {" "}
                    <LuTrash />
                    Remove
                  </Button>
                  <span className={`${style.calc}`}>
                    <Button
                      onClick={() => dispatch(decrement(product.id))}
                      className="bg-purple-500 text-white hover:bg-purple-700"
                    >
                      -
                    </Button>
                    {product.qty}
                    <Button
                      onClick={() => dispatch(increment(product.id))}
                      className="bg-purple-500 text-white hover:bg-purple-700"
                    >
                      +
                    </Button>
                  </span>
                </div>{" "}
                <Separator />
              </div>
            ))}
          </div>
          <div className={`${style.checkOut}`}>
            <div>
              <h3>Cart Summary</h3>

              <div className=" flex flex-row justify-between">
                <span>Subtotal:</span>
                <span>{FormatCurrency(totalCart)}</span>
              </div>

              <div>
                <Button className="bg-purple-600 hover:bg-gradient-to-l w-full from-purple-500 to-purple-700">
                  Check out {FormatCurrency(Number(totalCart.toFixed(2)))}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Cart;
