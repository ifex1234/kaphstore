import image1 from "../../../public/images/section2/1.jpg";
import image2 from "../../../public/images/section2/2.jpg";
import image3 from "../../../public/images/section2/3.jpg";
import image4 from "../../../public/images/section2/4.jpg";
import image5 from "../../../public/images/section2/5.jpg";
import image8 from "../../../public/images/section2/8.jpg";
import image9 from "../../../public/images/section2/9.jpg";
import image12 from "../../../public/images/section2/12.jpg";
import image14 from "../../../public/images/section2/15.jpg";
import { StaticImageData } from "next/image";

type Props = {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  value?: number;
  itemLeft?: string;
  itemLeftValue: number;
}[];
export const productsData: Props = [
  {
    id: 1,
    image: image1,
    title: "Malta Guiness can..",
    price: 6650,
    value: 20,
    itemLeft: "1100 items left",
    itemLeftValue: 20,
  },
  {
    id: 2,
    image: image2,
    title: "Ace elec power bank",
    price: 5000,
    value: 60,
    itemLeft: "100 items left",
    itemLeftValue: 50,
  },
  {
    id: 3,
    image: image3,
    title: "Nestle golden morn...",
    price: 2800,
    value: 80,
    itemLeft: "400 items left",
    itemLeftValue: 10,
  },
  {
    id: 4,
    image: image4,
    title: "Nivea dry comfort...",
    price: 3150,
    value: 10,
    itemLeft: "200 items left",
    itemLeftValue: 80,
  },
  {
    id: 5,
    image: image5,
    title: "Ace Elec F9 Finger..",
    price: 3450,
    value: 44,
    itemLeft: "55 items left",
    itemLeftValue: 60,
  },
  {
    id: 8,
    image: image8,
    title: "Nivea Perfect & Rad..",
    price: 4805,
    value: 15,
    itemLeft: "110 items left",
    itemLeftValue: 40,
  },
  {
    id: 9,
    image: image9,
    title: "Eilifinit B06 Casual Cros",
    price: 1880,
    itemLeftValue: 90,
  },
  {
    id: 12,
    image: image12,
    title: "S20 Wireless Bluetooth",
    price: 5349,
    itemLeftValue: 50,
  },
  {
    id: 14,
    image: image14,
    title: "Diamond Necklace",
    price: 112000,
    itemLeftValue: 35,
  },
];
