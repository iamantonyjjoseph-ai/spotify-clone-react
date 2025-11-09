import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { playercontext } from "./Context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[parseInt(id)];
  const {playwithid} = useContext(playercontext);


    return (
      <>
        <Navbar />
    

   
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-end gap-8 px-6">
    
        <img
          className="w-48 h-48 rounded-md shadow-lg object-cover"
          src={albumdata.image}
          alt=""
        />

    
        <div className="flex flex-col text-left justify-end">
          <p className="text-gray-400 mb-1 text-sm">Playlist</p>

          <h2 className="text-3xl md:text-6xl font-bold text-white mb-2">
            {albumdata.name}
          </h2>

          <p className="text-gray-300 mb-2">{albumdata.desc}</p>

          <p className="mt-2 text-sm text-gray-400">
            <img
              className="inline-block w-5 mr-1 align-middle"
              src={assets.spotify_logo}
              alt=""
            />
            <b className="text-green-500">Spotify Clone</b> 33,62,251 likes •{" "}
            <b className="text-white">50 songs</b> • about 2 hr 35 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-1">#</b>Title</p>
        <p>Album</p>
        <p className="hidden md:block">Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />

      </div>
      <hr />
      {
        songsData.map((item, index) => (
          <div key={index} onClick={()=>playwithid(item.id)} className="grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 item-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
            <p className="text-white">
              <b className="mr-4 text-[a7a7a7]">{index+1}</b>
              <img className="inline w-8 mr-5" src={item.image} alt="" />
            </p>
            <p className="text-[15px]">{albumdata.name}</p>
            <p className="text-[15px]">3 days ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))
      }
    </>
  );
};

export default DisplayAlbum;
