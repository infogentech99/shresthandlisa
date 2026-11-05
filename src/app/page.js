"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "./components/hero";
import Events from "./components/Events";
import Venue from "./components/Venue";
import RSVPForm from "./components/RSVPForm";
export default function Home() {
   const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;
    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.log("Audio play failed:", err);
      }
    }
  };

  useEffect(() => {
    if (started) return;
    const handler = () => startMusic();
    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#C9850B] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="" loop preload="auto" playsInline />
    <Hero/>
    <Events/>
    <Venue/>
    <RSVPForm/>
    </>
  );
}
