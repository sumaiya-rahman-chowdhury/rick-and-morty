import CharacterCard from "@/components/CharacterCard";
import { CharacterCardType } from "@/components/Swiper";
import { baseApi } from "@/lib/constants";
import React from "react";


async function page() {
  const response = await fetch(`${baseApi}/character`);
  const data = await response.json();

  return (
    <div className="h-screen flex flex-wrap gap-5 justify-center items-center py-10">
      {data.results.map((card: CharacterCardType) => (
        <CharacterCard
          key={card.id}
          name={card.name}
          image={card.image}
          id={card.id}
        />
      ))}
    </div>
  );
}

export default page;
