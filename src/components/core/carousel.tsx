"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CarouselContent as data } from "@/lib/assets/carousel1";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselHome() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="lg:w-3/4 lg:h-[450px] w-full h-52 md:h-96 my-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((data) => (
          <CarouselItem key={data.id}>
            <div className=" h-56 md:h-96">
              <Card className="h-full w-full ">
                <CardContent className="flex flex-col aspect-square bg-transparent pt-1">
                  <Image
                    className=" w-full object-fill"
                    src={data.image}
                    alt=""
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
