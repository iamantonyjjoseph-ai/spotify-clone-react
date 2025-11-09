import { BrowserRouter } from 'react-router-dom';
import Opening from './components/Opening';
import Home from "./components/Home";
import PlayerContextProvider from "./components/Context/PlayerContext";
import { useEffect, useState } from 'react';


function App() {
  const [issplashisvisible, setsplashvisible] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{setsplashvisible(false)

    },4000)
    return ()=> clearTimeout(timer)
  })
  return (
    <BrowserRouter>
     <PlayerContextProvider>
      {issplashisvisible &&   <Opening/>}
    
      <Home />
      </PlayerContextProvider>
    </BrowserRouter>
  );
}

export default App;
