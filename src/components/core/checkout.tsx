"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { CreditCard, Truck } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStore from "@/lib/services/zustStore";
import FormatCurrency from "@/lib/services/FormatCurrency";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/lib/api";
import Loader from "./loader";
import Link from "next/link";

export const description = "Dashboard";

export default function Checkout() {
  const orderId = useStore((state) => state.orderID);
  const router = useRouter();
  const [totalCart, setTotalCart] = useState(0);
  const products = useStore((state) => state.cart);
  const { user } = useKindeBrowserClient();
  const confirmation = useStore((state) => state.clearCart);

  const { isError, isLoading, data } = useQuery({
    queryKey: ["userId"],
    queryFn: () => fetchUser(String(user?.id)),
  });
  useEffect(() => {
    setTotalCart(
      products.reduce(
        (arg1: number, arg2) => arg1 + arg2.currentPrice! * arg2.quantity,
        0
      )
    );
  }, [products]);

  if (isLoading) return <Loader />;
  if (isError) return <p>error loading details</p>;

  function processPayment(orderId: number) {
    confirmation(orderId);
    axios
      .post("http://127.0.0.1:3001/api/orders", {
        userId: String(user?.id),
        orderId,
        sum: totalCart,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push("/");
  }
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order ID:{orderId}
            </CardTitle>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Track Order
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {products.map((item) => (
                <li className="flex items-center justify-between" key={item.id}>
                  <span className="text-muted-foreground">{item.title}</span>
                  <span>{FormatCurrency(item.currentPrice!)}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{FormatCurrency(Number(totalCart.toFixed(2)))}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {FormatCurrency(Number(totalCart.toFixed(2)) * 0.02)}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>
                  {FormatCurrency(Number(totalCart.toFixed(2)) * 0.001)}
                </span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>
                  {FormatCurrency(
                    Number(totalCart.toFixed(2)) * 0.02 +
                      Number(totalCart.toFixed(2)) * 0.001 +
                      totalCart
                  )}{" "}
                </span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>
                  {user?.family_name} {user?.given_name}
                </span>
                <span>
                  {!data?.address ? (
                    <Link href="/dashboard/profile">
                      create your billing details here
                    </Link>
                  ) : (
                    data?.address
                  )}
                </span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                {data?.address ? (
                  "Same as shipping address"
                ) : (
                  <Link href="/dashboard/profile">
                    create your billing details here
                  </Link>
                )}
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>
                  {user?.family_name} {user?.given_name}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{user?.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{isLoading ? "..." : data?.phoneNo}</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Payment Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-around items-center border-t bg-muted/50 px-6 py-3">
          <Button onClick={router.back} className="bg-red-600">
            Cancel order
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                disabled={!data?.address || !totalCart}
                className="bg-green-600 text-white"
                variant="outline"
              >
                Make payment
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Ensure all details are correct.
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Confirm payment. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => processPayment(orderId)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
