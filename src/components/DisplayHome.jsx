import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albumitems from "./Albumitems";
import Songitems from "./Songitems";

export const DisplayHome = () => {
  return (
    <>
    <div className="bg-[#121212] h-[100%] w-full rounded p-4 overflow-y-scroll">
     
      <Navbar />

   
  <div className=" mt-[-20px] font-bold  grid">

        <h1 className="my-5 font-bold text-2xl  text-white">Your Top Playlist</h1>
        <div className="flex overflow-auto" >
            {albumsData.map((item, index) => (
          <Albumitems
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
        </div>
      
      </div>
      
  <div className=" mt-[-20px] font-bold  grid">

        <h1 className="my-9 font-bold text-2xl  text-white">Recently Played</h1>
        <div className="flex overflow-auto" >
            {songsData.map((item, index) => (
          <Songitems
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
        </div>
      
      </div>
    </div>
    
    </>
  );
};