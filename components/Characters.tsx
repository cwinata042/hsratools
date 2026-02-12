"use client";

import { TCharacterDetails } from "@/lib/types/freesr";
import game_data from "../data/game_data.json";
import Image from "next/image";
import { useHorizontalScroll } from "@/lib/utils";

export default function Characters() {
  const chars: TCharacterDetails[] = Object.values(game_data.characters);
  const scrollRef = useHorizontalScroll();

  const charIcons = chars.map((char) => {
    return (
      <div key={char.id} className="char-icon">
        <Image
          src={`/assets/icon/avatar/${char.id}.webp`}
          alt={`Character icon`}
          fill
          sizes="(max-width: 60px) 100vw"
          style={{ objectFit: "cover" }}
          className="unselectable"
          draggable={false}
        />
      </div>
    );
  });

  return (
    <div className="characters">
      <div ref={scrollRef} className="character-nav no-scrollbar drag-scroll">
        {charIcons}
      </div>
      <div className="character-main">Main Character Screen</div>
    </div>
  );
}
