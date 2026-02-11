import Characters from "@/components/Characters";
import { IoMdSettings } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";

export default function Home() {
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
