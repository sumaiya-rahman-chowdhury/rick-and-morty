"use client";

import { useEffect, useState } from "react";
import SwiperSlider from "./SharedSwiper";
import SectionTitle from "../Section-Title";
import { baseApi } from "@/lib/constants";

interface LocationType {
  id: number;
  name: string;
  episode: string;
}

async function fetchLocations(): Promise<LocationType[]> {
  const response = await fetch(`${baseApi}/location`);
  const data = await response.json();
  return data.results as LocationType[];
}

export default function Location() {
  const [locations, setLocations] = useState<LocationType[]>([]);

  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  return (
    <div className="text-white px-10">
      <SectionTitle title={`Locations`} />
      <SwiperSlider
        prevClassName="location-prev"
        nextClassName="location-next"
        items={locations}
        renderItem={(location) => (
          <div
            className="p-[2px] rounded-md my-5"
            style={{
              background:
                "linear-gradient(to right, rgb(50, 50, 150), rgb(203, 140, 235))",
              clipPath: "polygon(0 0, 100% 0, 100% 77%, 85% 100%, 0 100%)",
            }}
          >
            <div
              className="rounded-md text-left text-white transition-transform duration-200 hover:scale-[1.03] p-4"
              style={{
                background:
                  "linear-gradient(to bottom right, #0f0f1a, #1a1f40)",
                clipPath: "polygon(0 0, 100% 0, 100% 77%, 85% 100%, 0 100%)",
              }}
            >
              <p className="text-xs text-gray-400">
                {`#`}
                {location.id}
              </p>
              <p className="text-xs text-gray-400">{location.episode}</p>
              <h3 className="text-lg">{location.name}</h3>
            </div>
          </div>
        )}
      />
    </div>
  );
}
