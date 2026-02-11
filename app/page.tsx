import { IoMdSettings } from "react-icons/io";

export default function Home() {
  return (
    <div className="main">
      <div className="body">
        <div className="characters">
          <div className="character-nav">Character Navigation</div>
          <div className="character-main">Main Character Screen</div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-group">
          <button className="circle">
            <IoMdSettings />
          </button>
          <button>Download freesr-data.json</button>
          <button>Connect to PS</button>
        </div>
        <div className="navbar-group">
          <button>Characters</button>
          <button>Enemy Selection</button>
        </div>
      </div>
    </div>
  );
}
