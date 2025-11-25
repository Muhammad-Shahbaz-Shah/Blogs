"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SparklesIcon } from "lucide-react";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Badge } from "@/components/ui/badge";

export const CardCarousel = ({
  data,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  return (
    <section className="w-full py-12">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-5xl rounded-[24px] border dark:border-zinc-300  p-4 shadow-sm md:rounded-t-[44px] ">
        <div className="relative w-full flex flex-col items-center rounded-[24px] border  dark:border-zinc-400   p-6 shadow-sm md:gap-8 md:rounded-[40px]">
          <Badge
            variant="outline"
            className="mb-4 rounded-[14px] border  text-base"
          >
            <SparklesIcon className="mr-2 h-4 w-4 fill-[#EEBDE0] stroke-1 " />
            Latest Reviews
          </Badge>

          <div className="text-center max-w-2xl mb-8">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              See What Our Clients Say
            </h3>
            <p className="">
              Here are some reviews from our trusted clients who support us.
            </p>
          </div>

          <div className="w-full">
            <Swiper
              spaceBetween={50}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
              }}
              pagination={showPagination}
              navigation={
                showNavigation
                  ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                  : undefined
              }
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" h-full rounded-3xl  shadow-lg p-4 flex items-center justify-center">
                    {item}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
