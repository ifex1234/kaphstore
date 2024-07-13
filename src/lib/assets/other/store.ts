import image1 from "../../../../public/images/store/adidas_260x144_V2.png";
import image2 from "../../../../public/images/store/bacardi-bacardi_260x144.png";
import image3 from "../../../../public/images/store/binatone_260x144.png";
import image4 from "../../../../public/images/store/bluetti.jpg";
import image5 from "../../../../public/images/store/bruhm_260x144.png";
import image6 from "../../../../public/images/store/chivita.jpg";
import image7 from "../../../../public/images/store/defacto_260x144.png";
import image8 from "../../../../public/images/store/diageo_260x144.png";
import image9 from "../../../../public/images/store/haier-thermocool_260x144.png";
import image10 from "../../../../public/images/store/infinix_260x144v2.png";
import image11 from "../../../../public/images/store/itel-phones_260x144.png";
import image12 from "../../../../public/images/store/ledrop.jpg";
import image13 from "../../../../public/images/store/loreal_freelinks_993x550.jpg";
import image14 from "../../../../public/images/store/nestle_260x144.png";
import image15 from "../../../../public/images/store/nexus_260x144.png";
import image16 from "../../../../public/images/store/nivea_260x144.png";
import image17 from "../../../../public/images/store/oppo_260x144.png";
import image18 from "../../../../public/images/store/oraimo_260x144.png";
import image19 from "../../../../public/images/store/Pernod_ricard.png";
import image20 from "../../../../public/images/store/reckitt_260x144.png";
import image21 from "../../../../public/images/store/ROYAL.jpg";
import image22 from "../../../../public/images/store/tecno_260x144.png";
import image23 from "../../../../public/images/store/unilever-hb_260x144.png";
import image24 from "../../../../public/images/store/xiaomi_260x144.png";

import image_01 from "../../../../public/images/seller/1 (18).jpg";
import image_02 from "../../../../public/images/seller/1 (19).jpg";
import image_03 from "../../../../public/images/seller/1 (20).jpg";
import image_04 from "../../../../public/images/seller/1 (21).jpg";
import image_05 from "../../../../public/images/seller/1 (22).jpg";
import image_06 from "../../../../public/images/seller/1 (23).jpg";

import { StaticImageData } from "next/image";

type Props = {
  id: number;
  image: StaticImageData;
}[];
export const StoreItems: Props = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
  { id: 10, image: image10 },
  { id: 11, image: image11 },
  { id: 12, image: image12 },
  { id: 13, image: image13 },
  { id: 14, image: image14 },
  { id: 15, image: image15 },
  { id: 16, image: image16 },
  { id: 17, image: image17 },
  { id: 18, image: image18 },
  { id: 19, image: image19 },
  { id: 20, image: image20 },
  { id: 21, image: image21 },
  { id: 22, image: image22 },
  { id: 23, image: image23 },
  { id: 24, image: image24 },
];

export const Seller = [
  { id: 1, image: image_01, price: 3799, title: "Eaget Pen Flash Drive 3.0" },
  { id: 2, image: image_02, price: 5349, title: "S20 Wireless bluetooth e" },
  { id: 3, image: image_03, price: 5489, title: "Wlist Luminous Thungster" },
  { id: 4, image: image_04, price: 2599, title: "TWS Wireless Bluetooth H" },
  { id: 5, image: image_05, price: 4850, title: "Straight Jeans Men's Pant" },
  { id: 6, image: image_06, price: 1590000, title: "Bluetti AC200MAX" },
];
