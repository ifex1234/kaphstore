import image1 from "../../../public/images/deals/300x400-fashion-deals.jpg";
import image2 from "../../../public/images/deals/appliances-deals_300x400.png";
import image3 from "../../../public/images/deals/beauty-deals_300x400.png";
import image5 from "../../../public/images/deals/phone-deals_300x400.png";
import image6 from "../../../public/images/deals/supermarket-deals_300x400.png";

import image_1 from "../../../public/images/deals/1 (14).jpg";
import image_2 from "../../../public/images/deals/1 (15).jpg";
import image_3 from "../../../public/images/deals/1 (16).jpg";
import image_4 from "../../../public/images/deals/1 (17).jpg";
import image_5 from "../../../public/images/deals/1 (18).jpg";
import image_6 from "../../../public/images/deals/1 (19).jpg";

import image_001 from "../../../public/images/deals/choplife/1.jpg";
import image_002 from "../../../public/images/deals/choplife/1 (1).jpg";
import image_003 from "../../../public/images/deals/choplife/1 (2).jpg";
import image_004 from "../../../public/images/deals/choplife/1 (3).jpg";
import image_005 from "../../../public/images/deals/choplife/1 (4).jpg";
import image_006 from "../../../public/images/deals/choplife/1 (5).jpg";

import image_101 from "../../../public/images/deals/gins/1 (6).jpg";
import image_202 from "../../../public/images/deals/gins/1 (7).jpg";
import image_303 from "../../../public/images/deals/gins/1 (8).jpg";
import image_404 from "../../../public/images/deals/gins/1 (9).jpg";
import image_505 from "../../../public/images/deals/gins/1 (10).jpg";
import image_606 from "../../../public/images/deals/gins/1 (11).jpg";

import image_111 from "../../../public/images/deals/bestp/1 (12).jpg";
import image_222 from "../../../public/images/deals/bestp/1 (13).jpg";
import image_333 from "../../../public/images/deals/bestp/1 (14).jpg";
import image_444 from "../../../public/images/deals/bestp/1 (15).jpg";
import image_555 from "../../../public/images/deals/bestp/1 (16).jpg";
import image_666 from "../../../public/images/deals/bestp/1 (17).jpg";
import { StaticImageData } from "next/image";

type Prop1 = {
  image: StaticImageData;
  id: number;
}[];

export const deals1: Prop1 = [
  {
    // title: "Top Fashion Deals",
    image: image1,
    id: 0,
  },
  {
    // title: "Top Appliance Deals",
    image: image2,
    id: 1,
  },
  {
    // title: "Top Beauty Deals",
    image: image3,
    id: 2,
  },
  {
    // title: "Top Electronics Deals",
    image: image3,
    id: 3,
  },
  {
    // title: "Top Phones Deals",
    image: image5,
    id: 4,
  },
  {
    // title: "Top Supermarket Deals",
    image: image6,
    id: 5,
  },
];

type Prop = {
  image: StaticImageData;
  price: number;
  id: number;
  title: string;
}[];
export const PhoneDeals: Prop = [
  { image: image_1, price: 74500, id: 1, title: 'Infinix Hot 30i 6.6" HD' },
  { image: image_2, price: 70000, id: 2, title: 'Xiaomi Redmi A2+ 6.71"' },
  { image: image_3, price: 94500, id: 3, title: 'Infinix Hot 30i 6.6" HD' },
  { image: image_4, price: 101500, id: 4, title: "Oppo A78 Mist Black" },
  { image: image_5, price: 80500, id: 5, title: 'Infinix Hot 30i 6.6" HD' },
  { image: image_6, price: 90500, id: 6, title: 'Infinix Hot 30i 6.6" HD' },
];

export const Choplife: Prop = [
  { id: 1, image: image_001, title: "Defacto women casual", price: 8543 },
  { id: 2, image: image_002, title: "Powerbank 20000 mah", price: 7100 },
  { id: 3, image: image_003, title: "Sony Playstation 5 cons.", price: 580000 },
  { id: 4, image: image_004, title: "Royal 32' LCD TV", price: 62100 },
  { id: 5, image: image_005, title: "Midea 43 liter Refrigera", price: 59500 },
  { id: 6, image: image_006, title: "ADIDAS Vs pace", price: 28725 },
];
export const Gins: Prop = [
  { id: 1, image: image_101, title: "Monkey Shoulder Blended", price: 23750 },
  { id: 2, image: image_202, title: "ST Remy VSOP", price: 10615 },
  { id: 3, image: image_303, title: "Glendifich 15 year old.", price: 49375 },
  { id: 4, image: image_404, title: "Jaggermeiter Herb Liquer", price: 6065 },
  { id: 5, image: image_505, title: "Glendifich 12 year old.", price: 35450 },
  { id: 6, image: image_606, title: "Jaggermeiter Herb Liquer", price: 10855 },
];

export const BestPrice: Prop = [
  { id: 1, image: image_111, title: "Firman 7kva Key starter", price: 1573000 },
  { id: 2, image: image_222, title: "Nestle Maggie Cube Chic", price: 910 },
  { id: 3, image: image_333, title: "Defacto Regular man", price: 10522 },
  { id: 4, image: image_444, title: "Ace Elec Power Bank", price: 7100 },
  { id: 5, image: image_555, title: "Eilinfinite 3 in 1 bag", price: 6680 },
  { id: 6, image: image_666, title: "Hisense 5kg Top Loader", price: 85320 },
];
