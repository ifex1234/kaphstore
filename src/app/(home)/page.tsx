import { CarouselHome } from "@/components/core/carousel";
import HomeAside from "@/components/core/homeAside";
import { SectionBorderless } from "@/components/core/sectionBorderless";
import SectionBig from "@/components/core/sectionBig";
import { SectionMinor } from "@/components/core/sectionMinor";
import SubHeader from "@/components/core/subHeader";
import { PhoneDeals } from "@/lib/assets/deals";
import { Choplife, Gins, BestPrice } from "@/lib/assets/deals";
import { Seller } from "@/lib/assets/other/store";
import { productsData } from "@/lib/assets/section2";

export default function Home() {
  return (
    <main>
      <section className=" rounded-sm mb-5">
        <div className=" flex flex-row  my-2 gap-1">
          <CarouselHome /> <HomeAside />
        </div>
        <SectionMinor />
        <SubHeader item1={"Flash sales"} item2={"/flash-sales"} />
        <SectionBig />
        <SectionBorderless
          arrayItem={productsData}
          header={"Top Selling Items"}
        />
        <SubHeader item1={"Choplife Christmas Deals"} item2={"See all"} />
        <SectionBorderless arrayItem={Choplife} />
        <SubHeader item1={"Le drop Official Store Deals"} item2={"See all"} />
        <SectionBorderless arrayItem={Gins} />

        {/* <Sectionwithprice arrayItem={deals1} /> */}
        <SubHeader item1={"Best Price"} item2={"See all"} />
        <SectionBorderless arrayItem={BestPrice} />

        <SubHeader item1={"Top Phone deals"} item2={"See all"} />
        <SectionBorderless arrayItem={PhoneDeals} />
        <SubHeader item1={"Global Best Sellers"} item2={"See all"} />
        <SectionBorderless arrayItem={Seller} />
      </section>
    </main>
  );
}
