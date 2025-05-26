"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from "react";

interface SwiperSliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  prevClassName: string;
  nextClassName: string;
}

function SwiperSlider<T>({
  items,
  renderItem,
  slidesPerView = 1.5,
  prevClassName,
  nextClassName,
}: SwiperSliderProps<T>) {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: `.${nextClassName}`,
          prevEl: `.${prevClassName}`,
        }}
        modules={[Navigation]}
        className="mySwiper mb-10"
        spaceBetween={20}
        slidesPerView={slidesPerView}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4.5 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`${prevClassName} absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer`}
      >
        <ChevronLeft />
      </div>
      <div
        className={`${nextClassName} absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer`}
      >
        <ChevronRight />
      </div>
    </div>
  );
}

export default SwiperSlider;
