"use client";

import { useEffect, useState, useRef } from "react";
import Hero from "./components/hero";
import Events from "./components/Events";
import Venue from "./components/Venue";
import RSVPForm from "./components/RSVPForm";
import IntroVideo from "./components/IntroVideo";
export default function Home() {

const [showScroll, setShowScroll] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    setShowScroll(window.scrollY < 20);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);




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
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#C9850B] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        playsInline
      />
      <IntroVideo onFinish={() => setIntroDone(true)} />
        {/* <div
  className={`fixed bottom-20 left-1/2 z-30
    -translate-x-1/2 flex flex-col items-center
    transition-all duration-500
    ${
      showScroll
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-4 opacity-0"
    }`}
> */}
{/* <div
  className={`fixed bottom-20 right-3 z-30
    flex flex-col items-center
    transition-all duration-500
    ${
      showScroll
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-4 opacity-0"
    }`}
>
  <button
    type="button"
    onClick={() => {
      window.scrollBy({
        top: window.innerHeight * 0.7,
        behavior: "smooth",
      });
    }}
    className="flex flex-col items-center gap-2 text-[#B35800]"
    aria-label="Scroll down to explore"
  >
    <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#B35800] bg-[#FFF8EB]/80">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 10 5 5 5-5" />
        <path d="m7 5 5 5 5-5" />
      </svg>
    </span>

    <span className="animate-pulse text-[9px] tracking-[2px] font-cormorant-garamond font-semibold">
      SCROLL <br/> DOWN
    </span>
  </button>
</div> */}

<div className="fixed bottom-20 right-2 z-50 flex flex-col items-center">
  <button
    type="button"
    onClick={() => {
      window.scrollBy({
        top: window.innerHeight * 0.7,
        behavior: "smooth",
      });
    }}
    className="flex flex-col items-center gap-2 text-[#fff]"
    aria-label="Scroll down to explore"
  >
    <span className="flex h-16 w-6 items-center justify-center rounded-full border-2 border-[#C14405] bg-[#C14405] cursor-pointer">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 10 5 5 5-5" />
        <path d="m7 5 5 5 5-5" />
      </svg>
    </span>

    <span className="animate-pulse text-[12px] tracking-[2px] poppins-bold  font-bold text-[#C14405]">
      SCROLL <br /> DOWN
    </span>
   
  </button>

</div>
      <Hero />
      <Events />
      <Venue />
      <RSVPForm />
    </>
  );
}
