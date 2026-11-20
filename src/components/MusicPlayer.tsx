"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthdayData";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(BIRTHDAY_DATA.music.audioUrl);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Audio play error:", e);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#FFFDF9]/90 border border-[#E9D8C9] shadow-lg px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-2.5">
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-[#E58C8A] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          title={isPlaying ? "พักเสียงเพลง" : "เปิดเพลงบรรเลงอบอุ่น"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
        </button>

        <div className="text-xs hidden sm:block max-w-[140px]">
          <p className="font-semibold text-[#5A4543] truncate">{isPlaying ? "กำลังเล่นเพลง" : "เพลงเพื่อแม่"}</p>
          <p className="text-[#967C79] text-[10px] truncate">{isPlaying ? "คลิกเพื่อหยุด" : "คลิกเพื่อฟังเพลง"}</p>
        </div>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="text-[#967C79] hover:text-[#5A4543] p-1 transition-colors cursor-pointer"
            title={isMuted ? "เปิดเสียง" : "ปิดเสียง"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>

      <div className="flex items-center gap-1 pl-1">
        <span className={`w-1.5 h-1.5 rounded-full bg-[#E58C8A] ${isPlaying ? 'animate-ping' : 'opacity-40'}`} />
      </div>
    </div>
  );
}
