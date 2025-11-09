import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../assets/assets";

export const playercontext = createContext();

const PlayerContextProvider = (props) => {
  const audioref = useRef(null);
  const seekbg = useRef(null);
  const seekbar = useRef(null);

  const [track, settrack] = useState(songsData[1]);
  const [playstatus, setplaystatus] = useState(false);

  const [time, settime] = useState({
    currenttime: { second: 0, minute: 0},
  });
  const [totaltime, settotaltime] = useState({
    second: 0,
    minute: 0,
  });
 useEffect(() => {
    const audio = audioref.current;
    if (!audio) return;

   
    audio.onloadedmetadata= () => {
      settotaltime({
        second: Math.floor(audio.duration % 60),
        minute: Math.floor(audio.duration / 60),
      });
    };

   
    audio.ontimeupdate = () => {
      settime({
        currenttime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
      });

   
      if (seekbar.current && seekbg.current && audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekbar.current.style.width = `${progress}%`;
      }
    };

  
    return () => {
      audio.ontimeupdate = null;
      audio.onloadedmetadata = null;
    };
  }, [audioref, track]);

  const play = () => {
    if (audioref.current) {
      audioref.current.play();
      setplaystatus(true);
    }
  };

  const pause = () => {
    if (audioref.current) {
      audioref.current.pause();
      setplaystatus(false);
    }
  };
  const playwithid = async(id)=>{
    await settrack(songsData[id])
    await audioref.current.play();
    setplaystatus(true);
  }
  const before = async()=>{
    if(track.id > 0){
      await settrack(songsData[track.id - 1])
      await audioref.current.play();
      setplaystatus(true);
    }
    

  }
  const after = async()=>{
      if(track.id < songsData.length - 1){
        await settrack(songsData[track.id - 1])
        await audioref.current.play();
        setplaystatus(true);
      }
    }
    const seekbgclick = async(e)=>{
     audioref.current.currentTime = ((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioref.current.duration)
    }

  const contextvalue = {
    audioref,
    seekbg,
    seekbar,
    track,
    playstatus,
    time,
    totaltime,
    settrack,
    setplaystatus,
    settime,
    settotaltime,
    play,
    pause,
    playwithid,
    before,
    after,
    seekbgclick
  };

  return (
    <playercontext.Provider value={contextvalue}>
      {props.children}
      
      <audio ref={audioref} src={track.file}></audio>
    </playercontext.Provider>
  );
};

export default PlayerContextProvider;
