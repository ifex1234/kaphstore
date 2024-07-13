import img1 from "../../../public/images/section1/5k-store.gif";
import img2 from "../../../public/images/section1/clearance.gif";
import img3 from "../../../public/images/section1/computing.jpg";
import img4 from "../../../public/images/section1/ezgif.com-gif-maker.gif";
import img5 from "../../../public/images/section1/earphones_300x240.png";
import img6 from "../../../public/images/section1/fashion_300x240.png";
import img7 from "../../../public/images/section1/generator.gif";
import img8 from "../../../public/images/section1/grocies-freelinks.jpg";
import img9 from "../../../public/images/section1/phones-tablets_300x240.png";
import img10 from "../../../public/images/section1/refrigerators_300x240.png";
import img11 from "../../../public/images/section1/TELEVISION.jpg";
import img12 from "../../../public/images/section1/watches_300x240.png";
import { StaticImageData } from "next/image";

type Props = {
  title: string;
  Image: StaticImageData;
}[];
export const Section_1data: Props = [
  {
    title: "N5,000 Store",
    Image: img1,
  },
  {
    title: "Clearance sale",
    Image: img2,
  },
  {
    title: "Computing deals",
    Image: img3,
  },
  {
    title: "Authentic guarantee",
    Image: img4,
  },
  {
    title: "Mobile Accessories",
    Image: img5,
  },
  {
    title: "Men's Sneakers",
    Image: img6,
  },
  {
    title: "Generators",
    Image: img7,
  },
  {
    title: "Groceries",
    Image: img8,
  },
  {
    title: "Phones and Tablets",
    Image: img9,
  },
  {
    title: "Refrigerators",
    Image: img10,
  },
  {
    title: "Televisions",
    Image: img11,
  },
  {
    title: "Watches",
    Image: img12,
  },
];
