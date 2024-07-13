import Image, { StaticImageData } from "next/image";
import style from "@/lib/styles/sectionSmall.module.scss";

type Props = {
  id: number;
  image: StaticImageData;
}[];
type Props2 = {
  header?: string;
  arrayItem: Props;
};

export const SectionSmall: React.FC<Props2> = (props) => {
  const { arrayItem } = props;
  return (
    <div className={`${style.container}`}>
      {arrayItem.map((item) => (
        <div className={`${style.contents}`} key={item.id}>
          <Image priority src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};
export const SectionSmall2: React.FC<Props2> = (props) => {
  const { arrayItem } = props;
  return (
    <div className={style.container2}>
      {arrayItem.map((item) => (
        <div className={`${style.content2}`} key={item.id}>
          <Image priority src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};
