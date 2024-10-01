// "use client";
// import FormatCurrency from "@/lib/services/FormatCurrency";
// import style from "@/lib/styles/categories.module.scss";
// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
// import React from "react";
// import { usePathname } from "next/navigation";
// import { Button } from "../ui/button";
// type Props = {
//   id: string;
//   image: StaticImageData;
//   title: string;
//   price: number;
//   icon?: string;
//   old?: number;
//   category: string;
//   percent?: number;
// }[];

// type Prop = {
//   arrayItem: Props;
// };
// const Categories: React.FC<Prop> = (ObjArr) => {
//   const { arrayItem } = ObjArr;
//   const pathName = usePathname();

//   return (
//     <div className={`lg:container ${style.main}`}>
//       <div className={`${style.container}`}>
//         {arrayItem.map((item) => (
//           <Link href={`${pathName}/${item.id}`} key={item.id}>
//             <div className={`${style.arrayCont}`}>
//               <div className={`${style.arrayItem}`}>
//                 <Image
//                   width={300}
//                   height={300}
//                   src={item.image}
//                   alt={item.title}
//                   priority
//                 />
//               </div>
//               <p>{item.title}</p>
//               <p>{FormatCurrency(Number(item.price))}</p>
//               <p>
//                 {" "}
//                 <span className=" line-through mr-4">
//                   {FormatCurrency(Number(item.old)! ? Number(item.old)! : 0)}
//                 </span>
//                 -
//                 {item.old
//                   ? (
//                       ((Number(item.old)! - Number(item.price)) /
//                         Number(item.price)) *
//                       100
//                     ).toFixed(0)
//                   : 0}
//                 %
//               </p>
//               <p>{item.icon}</p>
//               <Button
//                 className={`${style.btn}`}
//                 // onClick={() => dispatch(addToCart(arrayItem))}
//               >
//                 Add to Cart
//               </Button>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
