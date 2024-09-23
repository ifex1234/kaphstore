"use client";
import FormatCurrency from "@/lib/services/FormatCurrency";
import style from "@/lib/styles/categories.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

enum category {
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
  id: number;
  imageUrl: string;
  title: string;
  productUrl: String;
  previousPrice: String;
  currentPrice: String;
  category: category;
  quantity: String;
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
                  src={item.imageUrl}
                  alt={item.title}
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
              <Button
                className={`${style.btn}`}
                // onClick={() => dispatch(addToCart(arrayItem))}
              >
                Add to Cart
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestAppliance;
