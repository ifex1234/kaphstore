import Image, { StaticImageData } from "next/image";
import styles from "../../lib/styles/sectionwithprice.module.scss";

type Props = {
  id: number;
  title?: string;
  image: StaticImageData;
}[];
type Props2 = {
  header?: string;
  arrayItem: Props;
};
export const Sectionwithprice: React.FC<Props2> = (props) => {
  const { arrayItem } = props;
  return (
    <div className={`${styles.container}`}>
      {arrayItem.map((contents) => (
        <div className={`${styles.map_wrapper}`} key={contents.id}>
          <div className={`${styles.image_wrapper}`}>
            <Image src={contents.image} alt={contents.title!} priority />
            <div className={`${styles.content}`}>
              <p className=" font-semibold text-xs">{contents.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
