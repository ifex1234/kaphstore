import Newsletter from "./newsletter";
import { LuYoutube, LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";
import Link from "next/link";
import styles from "../../lib/styles/footer.module.scss";

function Footer() {
  return (
    <div className={` ${styles.container} `}>
      <Newsletter />

      <div
        className={` flex flex-col md:flex-row text-white px-5 gap-4 justify-between py-5 ${styles.first_row}`}
      >
        <div className={`${styles.foot}`}>
          <div className={`${styles.layer2}`}>
            <h4>NEED HELP?</h4>{" "}
            <p>
              <Link href="">Chat with us</Link> <br />
              <Link href="">Help Center</Link> <br />
              <Link href="">Contact Us</Link> <br />{" "}
            </p>
          </div>
          <h4>USEFUL LINKS</h4>{" "}
          <p>
            <Link href="">Service Center</Link> <br />
            <Link href="">How to shop?</Link> <br />
            <Link href="">Delivery options and timelines</Link> <br />
            <Link href="">How to return a product?</Link> <br />
            <Link href="">Corporate and bulk purchases</Link> <br />
            <Link href="">Report a Product</Link> <br />
            <Link href="">Ship your package anywhere in Nigeria</Link> <br />
            <Link href="">Dispute Resolution Policy</Link> <br />
            <Link href="">Returns & Refund Timeline</Link> <br />
            <Link href="">Return Policy</Link> <br />{" "}
          </p>{" "}
        </div>
        <div className={`${styles.foot}`}>
          <h4>ABOUT KAPHstores</h4>
          <p>
            <Link href="">About us</Link> <br />
            <Link href="">Terms and Conditions</Link> <br />
            <Link href="">Privacy Notice</Link> <br />
            <Link href="">Credit Terms & Conditions</Link> <br />
            <Link href="">Information Guidelines</Link> <br />
            <Link href="">Cookie Notice</Link> <br />
            <Link href="">Flash Sales</Link> <br />
            <Link href="">Black Friday 2024</Link>
          </p>
          <br />
        </div>
        <div className={`${styles.foot}`}>
          <h4>MAKE MONEY WITH KAPH</h4>
          <p>
            <Link href="">Sell on Store</Link> <br />
            <Link href="">Vendor hub</Link> <br />
            <Link href="">Become a Sales Consultant</Link> <br />
            <Link href="">Become a Logistics Service Partner</Link> <br />
          </p>
        </div>
        <div className={`${styles.social_container}`}>
          <h4>CONNECT WITH US</h4>
          <div className={`${styles.social}`}>
            <Link href="fb.com">
              {" "}
              <LuFacebook size={20} fill="blue" className=" cursor-pointer" />
            </Link>
            <Link href="twitter.com">
              <LuTwitter size={20} fill="cyan" className=" cursor-pointer" />
            </Link>
            <Link href="youtube.com">
              <LuYoutube size={20} fill="red" className=" cursor-pointer" />
            </Link>
            <Link href="instagram.com">
              <LuInstagram
                size={20}
                fill="burlywood"
                className=" cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-center">designed by ifex</div>
    </div>
  );
}

export default Footer;
