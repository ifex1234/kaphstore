"use client";
import FormatCurrency from "@/lib/services/FormatCurrency";
import style from "@/lib/styles/categories.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
type Props = {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  icon?: string;
}[];
type Prop = {
  arrayItem: Props;
};

const Categories: React.FC<Prop> = (ObjArr) => {
  const { arrayItem } = ObjArr;
  const pathName = usePathname();
  const randomNumber = Math.floor(Math.random() * 10);
  return (
    <div className=" container">
      <div className={`${style.container}`}>
        {arrayItem.map((item) => (
          <Link href={`${pathName}/${item.id}`} key={item.id}>
            <div className={`${style.arrayCont}`}>
              <div className={`${style.arrayItem}`}>
                <Image src={item.image} alt={item.title} priority />
              </div>
              <p>{item.title}</p>
              <p>
                {FormatCurrency(item.price)} -{randomNumber}%
              </p>
              <span className="flex flex-row justify-start w-20 items-center">
                <BsStarFill color="purple" /> <BsStarFill color="purple" />
                <BsStarFill color="purple" />
                <BsStarFill color="purple" /> <BsStarHalf color="purple" /> (
                {randomNumber})
              </span>
              <p>{item.icon}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
