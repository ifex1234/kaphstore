import Link from "next/link";
import Image from "next/image";
import { Section_1data } from "@/lib/assets/section1";
import style from "@/lib/styles/sectionminor.module.scss";

export const SectionMinor = () => {
  return (
    <div className={`${style.container}`}>
      {Section_1data.map((item, idx: number) => {
        return (
          <Link href="/" key={idx}>
            <div className={`${style.content}`}>
              <div>
                <Image src={item.Image} alt={item.title} priority />
              </div>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
