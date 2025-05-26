"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CharacterCard from "./CharacterCard";

export interface CharacterCardType {
  name: string;
  image: string;
  id: string;
}

interface SwiperSliderProps {
  characters: CharacterCardType[];
}

function SwiperSlider({ characters }: SwiperSliderProps) {
  //   const swiperRef = useRef<any>(null);

  return (
    <div className="relative">
      <Swiper
        // ref={swiperRef}
        navigation={{
          nextEl: ".next-arrow",
          prevEl: ".prev-arrow",
        }}
        modules={[Navigation]}
        className="mySwiper mb-10"
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },

          1280: {
            slidesPerView: 5.5,
          },
        }}
      >
        {characters.map((character) => (
          <SwiperSlide key={character.id}>
            <CharacterCard
              name={character.name}
              image={character.image}
              id={character.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="prev-arrow absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
        <ChevronLeft />
      </div>
      <div className="next-arrow absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
        <ChevronRight />
      </div>
    </div>
  );
}

export default SwiperSlider;
