import { productsData } from "@/lib/assets/section2";
import styles from "@/lib/styles/sectionbig.module.scss";
import Image from "next/image";
import { Progress } from "../ui/progress";

const SectionBig = () => {
  type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
    itemLeft?: string;
    value?: number;
    itemLeftValue: number;
  };

  return (
    <div className={`${styles.container}`}>
      {productsData.slice(0, 6).map((content) => (
        <div className={`${styles.arrayItem}`} key={content.id}>
          <div className=" h-3/5">
            <Image
              className="h-full"
              src={content.image}
              alt={content.title}
              priority
            />
          </div>
          <div>
            <p>{content.title}</p>
          </div>
          <div>
            <p>₦ {content.price}</p>
          </div>
          <div>
            <p> Items left:{content.itemLeft}</p>
            <Progress
              className="text-red-500"
              value={content.itemLeftValue}
              max={content.itemLeftValue + 100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionBig;
