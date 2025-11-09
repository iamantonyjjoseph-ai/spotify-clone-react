import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { playercontext } from "./Context/PlayerContext";

function Player() {
  const { seekbar, seekbg, play, pause, playstatus,time,totaltime,track,before,after,seekbgclick} = useContext(playercontext);

  return (
   

    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 16) + "..."}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center m-auto">
        <div className="flex gap-4">
          <img  className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
          <img onClick={()=>before()} className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous" />

          {!playstatus ? (
            <img
              onClick={play}
              className="w-6 cursor-pointer"
              src={assets.play_icon}
              alt="play"
            />
          ) : (
            <img
              onClick={pause}
              className="w-6 cursor-pointer"
              src={assets.pause_icon}
              alt="pause"
            />
          )}

          <img onClick={()=>after()} className="w-4 cursor-pointer" src={assets.next_icon} alt="next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop" />
        </div>

        <div className="flex items-center gap-5">
          <p>{time.currenttime.minute}:{time.currenttime.second}</p>
          <div
            ref={seekbg} onClick={seekbgclick}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekbar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>{totaltime.minute}:{totaltime.second}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-3 rounded item-center"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  
  );
}

export default Player;
