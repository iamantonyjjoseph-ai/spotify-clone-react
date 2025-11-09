import React, { useContext } from "react";
import Sidebartemp from "./Sidebartemp";
import Player from "./Playerin";
import Display from "./Display"; 
import { playercontext } from "./Context/PlayerContext";

const Home = () => {
  const {audioref,track } = useContext(playercontext)
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebartemp />
        <div className="bg-[#121212] h-[98%] w-[100%] rounded flex-col justify-around mt-2 mr-2">
          <Display /> 
        </div>
      </div>
      <Player />
      <audio ref={audioref} preload='auto'src={track.file}></audio>
    </div>
  );
};

export default Home;
