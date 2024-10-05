import FormatCurrency from "@/lib/services/FormatCurrency";
import styles from "@/lib/styles/sectionborderless.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
  id?: number;
  currentPrice?: number;
  category?: Category;
  imageUrl?: string;
  productUrl?: string;
  title?: string;
}[];
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
            href={`/categories/${item.category}/${item.productUrl}`}
            key={item.id}
            className={`${styles.array_content}`}
          >
            <div>
              <Image
                src={item.imageUrl!}
                alt={item.title!}
                height={300}
                width={300}
                priority
              />
            </div>
            <div className=" my-1 px-1">
              <p className=" text-sm">{item.title}</p>
            </div>
            <div className=" my-1 px-1">
              <p className=" text-sm">{FormatCurrency(item.currentPrice!)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
