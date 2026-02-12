"use client";

import { TCharacterDetails } from "@/lib/types/freesr";
import game_data from "../data/game_data.json";
import Image from "next/image";
import { useHorizontalScroll } from "@/lib/utils";

export default function Characters() {
  const chars: TCharacterDetails[] = Object.values(game_data.characters);
  const scrollRef = useHorizontalScroll();

  const currChar = chars.filter((char) => char.name === "Phainon")[0];

  const charIcons = chars.map((char) => {
    return (
      <div key={char.id} className="large icon">
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
      <div className="character-header">
        <div className="character-header-section">
          <div className="medium icon">
            <Image
              src={`/assets/icon/ui/Character_Gold.png`}
              alt={`Character icon`}
              fill
              sizes="(max-width: 60px) 100vw"
              style={{ objectFit: "cover" }}
              className="unselectable"
              draggable={false}
            />
          </div>
          <div className="character-info-container">
            <p className="gold nowrap">Character Details</p>
            <div className="character-info">
              <div className="small icon">
                <Image
                  src={`/assets/icon/path/${currChar.path}_Simple.webp`}
                  alt={`${currChar.path} icon`}
                  fill
                  sizes="(max-width: 22px) 100vw"
                  style={{ objectFit: "cover" }}
                  className="unselectable"
                  draggable={false}
                />
              </div>
              <p className="medium horizontal">
                <p className="nowrap">{currChar.path}</p>
                <p>/</p>
                <p>{currChar.name}</p>
              </p>
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="character-nav no-scrollbar drag-scroll">
          {charIcons}
        </div>
        <div className="character-header-section"></div>
      </div>

      <div className="character-main">
        <div>Tabs</div>
        <div>tab specific content</div>
      </div>
    </div>
  );
}
