import styles from "@/lib/styles/sectionborderless.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
  id: string;
  title: string;
  image: StaticImageData;
  price: number;
  category: string;
}[];
type Props2 = {
  header?: string;
  link?: string;
  arrayItem: Props;
  href?: string;
};

export const SectionBorderless: React.FC<Props2> = (props) => {
  const { header, arrayItem, link, href } = props;

  return (
    <div className={`${styles.container}`}>
      <div className=" px-2 flex flex-row justify-between">
        <p className=" text-2xl font-bold">{header}</p>
        <Link href={`${href}`} className="p-2">
          {link}
        </Link>
      </div>

      <div className={`${styles.array_wrapper}`}>
        {arrayItem.slice(0, 6).map((item) => (
          <Link
            href={`/${item.category}/${item.id}`}
            key={item.id}
            className={`${styles.array_content}`}
          >
            <div>
              <Image src={item.image} alt={item.title} priority />
            </div>
            <div className=" my-1 px-1">
              <p className=" text-xs">{item.title}</p>
            </div>
            <div className=" my-1 px-1">
              <p className=" text-xs">₦{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
