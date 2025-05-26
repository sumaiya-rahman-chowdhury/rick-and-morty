"use client";

import { useEffect, useState } from "react";
import SwiperSlider from "./SharedSwiper";
import SectionTitle from "../Section-Title";
import { baseApi } from "@/lib/constants";

interface EpisodeType {
  id: number;
  name: string;
  episode: string;
}

async function fetchEpisodes() {
  const response = await fetch(`${baseApi}/episode`);
  const data = await response.json();
  return data.results as EpisodeType[];
}

export default function Episode() {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  useEffect(() => {
    fetchEpisodes().then(setEpisodes);
  }, []);

  return (
    <div className="text-white px-10">
      <SectionTitle title={`Episodes`} />
      <SwiperSlider
        prevClassName="episode-prev"
        nextClassName="episode-next"
        items={episodes}
        renderItem={(episode) => (
          <div
            className="p-[2px] rounded-md my-5"
            style={{
              background:
                "linear-gradient(to right, rgb(50, 50, 150), rgb(203, 140, 235))",
              clipPath: "polygon(0 0, 100% 0, 100% 77%, 85% 100%, 0 100%)",
            }}
          >
            <div
              className="rounded-md text-white transition-transform duration-200 hover:scale-[1.03] p-4"
              style={{
                background:
                  "linear-gradient(to bottom right, #0f0f1a, #1a1f40)",
                clipPath: "polygon(0 0, 100% 0, 100% 77%, 85% 100%, 0 100%)",
              }}
            >
              <p className="text-xs text-gray-400">{episode.episode}</p>
              <h3 className="text-lg">{episode.name}</h3>
            </div>
          </div>
        )}
      />
    </div>
  );
}
