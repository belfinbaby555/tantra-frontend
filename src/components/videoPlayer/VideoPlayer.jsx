import React from "react"
import video from "../../assets/gif/zebra.gif";
import vid from "../../assets/videos/v.mp4"
import "./player.css"
import {useState} from 'react';
import { BorderAll } from "@material-ui/icons";
import { useRef } from 'react';



const VideoPlayer = () => {

  const [isActive, setIsActive] = useState(false);

  const setPlayer = () => {
    (!isActive) ? setIsActive(true) : setIsActive(false);
    PlayPause();
  };

  const PlayPause = () => {
    if (!isActive) {
      child.current.play();
    } else {
      child.current.pause();
    }
  }

  const child = useRef(null);

  return (
    <div className="absolute -mt-60 ml-[35vw] ease-in-out duration-500" style={{
      marginLeft: isActive ? '25vw' : '',
    }}>
    <div className="w-[25vw] h-24 overflow-hidden relative ease-in-out duration-500 " id="player" 
    style=
      {{ width: isActive ? '50vw' : '',
          height: isActive ? '50vh' : '',
          borderRadius: isActive ? '10px': '',
          }}>
      <div className="play" style={{
        border: isActive ? 'none': '',
      }}></div>
      <button onClick={setPlayer} className="w-[65px] h-[65px] z-10 bg-white absolute mt-4 ml-4 rounded-full ease-in-out duration-500"
      style={{
        backgroundColor : isActive ? 'rgba(0,0,0,0.5)' : '',
        fontSize: isActive ? '50px': '',
        width: isActive ? '50px' : '',
        height :isActive ? '50px' : '',
        fontSize: isActive ? '20px': '',
      }}
      >
        {isActive ? '⛌' : ''}
      </button>
      <img src={video} alt=""className="w-auto grayscale	"style={{display:isActive ? 'none' : 'block',}}/>
      <video  ref={child} controls autoPlay className="video" style={{
        display:isActive ? 'block' : 'none',
        margin: isActive ? 'auto' : '',
    }}>
        <source src={vid} type="video/mp4"/>
      </video>
    </div>
    </div>
  );
};

export default VideoPlayer;
