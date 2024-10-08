"use client";
import React from "react";
import style from "@/lib/styles/cart.module.scss";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image";
import FormatCurrency from "@/lib/services/FormatCurrency";
import { LuTrash } from "react-icons/lu";
import useStore from "@/lib/services/zustStore";

function Cart() {
  const router = useRouter();
  const products = useStore((state) => state.cart);
  const remove = useStore((state) => state.removeItem);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setTotalCart(
      products.reduce(
        (arg1: number, arg2) => arg1 + arg2.currentPrice! * arg2.quantity,
        0
      )
    );
  }, [products]);
  console.log(products);

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
                className={` h-72 w-full flex flex-col gap-2`}
              >
                <div className={`${style.details}`}>
                  <span className="w-32 h-11">
                    <Image
                      src={product.imageUrl!}
                      alt={product.productUrl!}
                      width={300}
                      height={300}
                    />
                  </span>
                  <span className=" flex flex-col gap-2"></span>
                  <span className=" flex flex-col gap-2">
                    <span>{product.title} </span>
                    <span>{FormatCurrency(product.currentPrice!)} </span>
                    <span className={`${style.calc}`}>
                      {/* <Button
                        onClick={() => decrement()}
                        className={`${style.btn}`}
                      >
                        -
                      </Button> */}
                      {product.quantity}
                      {/* <Button
                        onClick={() => increment(product.id)}
                        className={`${style.btn}`}
                      >
                        +
                      </Button> */}
                    </span>
                    <Button
                      onClick={() => remove(product.id!)}
                      className={`${style.btn} w-28 flex justify-between`}
                    >
                      {" "}
                      <LuTrash />
                      Remove
                    </Button>
                  </span>
                </div>
                {/* <div className={`${style.btnContainer}`}>
                </div>{" "} */}
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
                <Button
                  className={`${style.btn} w-full`}
                  onClick={() => router.push("/check-out")}
                >
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
            <Button className={`${style.btn}`} onClick={() => router.push("/")}>
              Start Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
