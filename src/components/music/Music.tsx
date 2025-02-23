"use client";

import { Volume, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MusicProps {
  src: string;
}

const Music = ({ src="astro_bot" }: MusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);
  const toggleAudio = () => {
    // console.log("isplaying",isPlaying)
    setIsPlaying(!isPlaying)
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };





  return (
    <div className="w-50 h-50  border-[1px] border-white bg-circlebuttonbg bg-opacity-30 shadow-indigo-500/40 shadow-xl text-white absolute top-8 right-10 rounded-full p-2" onClick={toggleAudio}>
      <audio loop ref={audioRef} src={`audios/${src}.mp3`} autoPlay={isPlaying}>
        {/* <source  type="audio/mp3"/> */}
      </audio>
      {isPlaying ? (
        <Volume2 className="w-full h-full " />
      ) : (
        <VolumeX className="w-full h-full " />
      )}
    </div>
  );
};

export default Music;
