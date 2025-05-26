import React from "react";
import Image from "next/image";
import InfoCard from "@/components/details/MiniCard";
import { RiEarthFill, RiAndroidFill, RiHeart2Fill } from "react-icons/ri";
import { IoMaleSharp } from "react-icons/io5";
import { GrWebcam } from "react-icons/gr";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CgPlayList } from "react-icons/cg";
import { baseApi } from "@/lib/constants";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`${baseApi}/character/${id}`);
  const data = await response.json();
  // console.log(data);
  const episodeIds = data.episode
    .map((url: string) => url.split("/").pop())
    .join(",");
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodeIds}`
  );
  const episodes = await res.json();
  console.log(episodes);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col md:flex-row bg-[#0a0a232d] bg-opacity-50">
      <div>
        <h2 className="text-[34px] text-cyan-300 mb-3 text-center">
          {data.name}
        </h2>
        <div className="bg-[#7575d11a] p-4 rounded-md shadow-md border border-cyan-500 text-center">
          <Image
            src={data.image}
            alt={data.name}
            width={240}
            height={240}
            className="rounded-md p-5"
          />
        </div>
      </div>
      <div className="hidden md:block w-[2px] mx-20 h-[300px] bg-gradient-to-b from-cyan-400 to-green-400 rounded-full" />
      <div className="">
        <div className="flex gap-6 flex-wrap">
          <InfoCard
            icon={<RiHeart2Fill />}
            label="Status"
            value={data.status}
            className="md:w-[200px]"
          />
          <InfoCard
            icon={<RiAndroidFill />}
            label="Species"
            value={data.species}
            className="md:w-[200px]"
          />
          <InfoCard
            icon={<IoMaleSharp />}
            label="Gender"
            value={data.gender}
            className="md:w-[200px]"
          />
        </div>
        <div>
          <InfoCard
            icon={<RiEarthFill />}
            label="Origin"
            value={data.origin.name}
            extraIcon={<FaArrowUpRightFromSquare />}
          />
        </div>
        <div className="">
          <InfoCard
            icon={<GrWebcam />}
            label="Last Known Location"
            value={data.location.name}
            extraIcon={<FaArrowUpRightFromSquare />}
          />
        </div>
        <div
          className="shadow-md bg-[#7575d11a] border
        border-cyan-500 hover:border-green-400 transition-all duration-300 p-5 rounded
        
        "
        >
          <CgPlayList className="text-green-400 text-2xl" />
          <span className="text-lg text-white">Episode(S)</span>
          <ul className="episodes text-white  rounded-md p-4  overflow-y-scroll  h-[400px] scroll-cyan-400">
            {episodes.length > 0 ? (
              episodes.map((episode: { name: string; id: string }) => {
                return (
                  <li key={episode.id} className="list-disc">
                    {episode.name}
                  </li>
                );
              })
            ) : (
              <li>{episodes.name}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;
