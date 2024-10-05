"use client";
import { SectionBorderless } from "@/components/core/sectionBorderless";
import SectionBig from "@/components/core/sectionBig";
import { SectionMinor } from "@/components/core/sectionMinor";
import SubHeader from "@/components/core/subHeader";
import { Products } from "@/lib/assets/allProducts";
import { LoadingSkeleton } from "@/components/core/skeleton";
import { fetchProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const recommended = Products.slice(235, 241);
  const appliance = Products.slice(24, 30);
  const computers = Products.slice(193, 199);
  const electronics = Products.slice(170, 178);
  const fashion = Products.slice(50, 57);
  const groceries = Products.slice(110, 117);
  const health_beauty = Products.slice(82, 88);
  const home_office = Products.slice(142, 148);
  const mobile = Products.slice(0, 7);

  const {
    data: applianceData,
    isError: applianceError,
    isLoading: applianceLoading,
  } = useQuery({
    queryKey: ["appliances"],
    queryFn: () => fetchProducts("appliances"),
  });

  return (
    <main>
      <section className=" rounded-sm mb-5">
        <SectionMinor />
        <SubHeader item1={"Flash sales"} item2={"/flash-sales"} />
        <SectionBig />
        <SectionBorderless
          arrayItem={recommended}
          header={"Top Selling Items"}
          link="see all"
          href="/categories/recommended"
        />
        <SubHeader
          item1={"Top Appliance Deals"}
          item2={"/categories/appliances"}
        />
        {applianceLoading ? (
          <LoadingSkeleton />
        ) : (
          <SectionBorderless arrayItem={applianceData} />
        )}

        <SubHeader
          item1={"Top Computer Deals"}
          item2={"/categories/computers"}
        />
        <SectionBorderless arrayItem={computers} />

        <SubHeader
          item1={"Top Electronics Deals"}
          item2={"/categories/electronics"}
        />
        <SectionBorderless arrayItem={electronics} />

        <SubHeader item1={"Top Fashion deals"} item2={"/categories/fashion"} />
        <SectionBorderless arrayItem={fashion} />

        <SubHeader
          item1={"Super Groceries deals"}
          item2={"/categories/groceries"}
        />
        <SectionBorderless arrayItem={groceries} />

        <SubHeader
          item1={"Top Health and Beauty deals"}
          item2={"/categories/health-beauty"}
        />
        <SectionBorderless arrayItem={health_beauty} />

        <SubHeader
          item1={"Home and Office deals"}
          item2={"/categories/home-office"}
        />
        <SectionBorderless arrayItem={home_office} />

        <SubHeader
          item1={"Top Mobile deals"}
          item2={"/categories/mobile-tablet"}
        />
        <SectionBorderless arrayItem={mobile} />
      </section>
    </main>
  );
}
