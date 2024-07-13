import style from "@/lib/styles/subheader.module.scss";

type Props = {
  item1: string;
  item2: string;
  color: string;
};
const SubHeader = ({ item1, item2, color }: Props) => {
  return (
    <div className={`${style.container2}`}>
      <div>
        <p> {item1}</p>
      </div>
      <div>
        <p>{item2}</p>
      </div>
    </div>
  );
};

export default SubHeader;
