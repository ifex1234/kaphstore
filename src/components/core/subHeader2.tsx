import styles from "@/lib/styles/subheader.module.scss";

type props = {
  title: string;
};

const SubHeader2 = ({ title }: props) => {
  return (
    <div className={`${styles.container}`}>
      <p>{title} </p>
    </div>
  );
};

export default SubHeader2;
