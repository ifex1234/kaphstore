import style from "@/lib/styles/subheader.module.scss";
import Link from "next/link";

type Props = {
  item1: string;
  item2: string;
};
const SubHeader = ({ item1, item2 }: Props) => {
  return (
    <div className={`${style.container2}`}>
      <div>
        <p> {item1}</p>
      </div>
      <div>
        <Link href={item2}>See all</Link>
      </div>
    </div>
  );
};

export default SubHeader;
