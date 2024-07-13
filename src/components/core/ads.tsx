import Image from "next/image";
import style from "../../lib/styles/ads.module.scss";
import image from "../../../public/images/Choplife-brands-top-strip (1).gif";

export const TopAds = () => {
  return (
    <div className={`${style.container}`}>
      <Image className={`${style.img}`} src={image} alt="top ads" />
    </div>
  );
};
