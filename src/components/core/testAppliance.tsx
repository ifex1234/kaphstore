"use client";
import FormatCurrency from "@/lib/services/FormatCurrency";
import style from "@/lib/styles/categories.module.scss";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

enum Category {
  mobile_tablet,
  appliances,
  computers,
  groceries,
  electronics,
  fashion,
  beauty_health,
  home_office,
}
type Prop2 = {
  id?: number;
  price?: number;
  cartID?: number;
  currentPrice?: number;
  previousPrice?: number;
  category?: Category;
  imageUrl?: string;
  productUrl?: string;
  title?: string;
  quantity: number;
}[];
type Prop = {
  arrayItem: Prop2;
};
const TestAppliance: React.FC<Prop> = (ObjArr) => {
  const { arrayItem } = ObjArr;
  const pathName = usePathname();

  return (
    <div className={`lg:container ${style.main}`}>
      <div className={`${style.container}`}>
        {arrayItem.map((item) => (
          <Link href={`${pathName}/${item.productUrl}`} key={item.id}>
            <div className={`${style.arrayCont}`}>
              <div className={`${style.arrayItem}`}>
                <Image
                  width={300}
                  height={300}
                  src={item.imageUrl!}
                  alt={item.title!}
                  priority
                />
              </div>
              <p>{item.title}</p>
              <p>{FormatCurrency(Number(item.currentPrice))}</p>
              <p>
                {" "}
                <span className=" line-through mr-4">
                  {FormatCurrency(
                    Number(item.previousPrice)!
                      ? Number(item.previousPrice)!
                      : 0
                  )}
                </span>
                -
                {item.previousPrice
                  ? (
                      ((Number(item.previousPrice)! -
                        Number(item.currentPrice)) /
                        Number(item.currentPrice)) *
                      100
                    ).toFixed(0)
                  : 0}
                %
              </p>
              <Button className={`${style.btn}`}>
                More <br />
                Information
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestAppliance;
