"use client"

import Characters from "@/components/Characters";
import { TDatabase } from "@/lib/types/freesr";
import { IoMdSettings } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";

export default function Home() {
  // Initializes DB 0 if does not exist
  if (!localStorage.getItem("db")) {
    initDatabase()
  }

  function initDatabase() {
    let data : TDatabase = {
      avatars: {},
      battle_config: {
        battle_type: "DEFAULT",
        blessings: [],
        custom_stats: [],
        cycle_count: 0,
        monsters: [],
        path_resonance_id: 0,
        stage_id: 0
      },
      lightcones: [],
      loadout: [],
      name: "Database 1",
      relics: []
    }

    localStorage.setItem("db", JSON.stringify([data]))
  }

  return (
    <div className="main">
      <div className="body">
        <Characters />
      </div>
      <div className="navbar">
        <div className="navbar-group">
          <button className="circle">
            <IoMdSettings className="icon" />
          </button>
          <button>
            <IoDownloadOutline className="icon" /> freesr-data.json
          </button>
          <button>
            {" "}
            <VscDebugDisconnect className="icon" />
            Connect to PS
          </button>
        </div>
        <div className="navbar-group">
          <button>Characters</button>
          <button>Enemy Selection</button>
        </div>
      </div>
    </div>
  );
}
