import styles from "@/lib/styles/sectionborderless.module.scss";
import Image, { StaticImageData } from "next/image";
type Props = {
  id: number;
  title: string;
  image: StaticImageData;
  price: number;
}[];
type Props2 = {
  header?: string;
  arrayItem: Props;
};

export const SectionBorderless: React.FC<Props2> = (props) => {
  const { header, arrayItem } = props;

  return (
    <div className={`${styles.container}`}>
      <div className=" px-2">
        <p className=" text-2xl font-bold">{header}</p>
      </div>

      <div className={`${styles.array_wrapper}`}>
        {arrayItem.slice(0, 6).map((item) => (
          <div key={item.id} className={`${styles.array_content}`}>
            <div>
              <Image src={item.image} alt={item.title} priority />
            </div>
            <div className=" my-1 px-1">
              <p className=" text-xs">{item.title}</p>
            </div>
            <div className=" my-1 px-1">
              <p className=" text-xs">₦{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
