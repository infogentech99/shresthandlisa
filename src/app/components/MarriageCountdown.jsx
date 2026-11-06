"use client";
import { useEffect, useState } from "react";


export default function MarriageCountdown() {
 const addToMarriage = () => {
  const url = new URL("https://calendar.google.com/calendar/render");

  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", "Wedding Ceremony");
  url.searchParams.set("dates", "20261212T000000/20261213T000000");
  url.searchParams.set("ctz", "Asia/Kolkata");

  window.open(url.toString(), "_blank");
};







    const TARGET_DATE = new Date("2026-12-12").getTime();
  const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 12,
  minutes: 28,
  seconds: 0, 
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  // Update every second
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

    return (
        <>
            <div className="bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat">
               
                    <h2 className="text-[34px] md:text-4xl lg:text-[56px] text-center text-[#C9850B] pt-8 md:pt-11 lg:pt-10 3xl:pt-25 great-vibes-regular">Our countdown to forever begins..</h2> 
                     
                    <div className="flex md:gap-12 gap-2 justify-center items-center mt-6">
                       <div className="border px-5 py-2 bg-[#F8F4EA] border-[#C9850B] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#C9850B] eb-garamond "> {timeLeft.days}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black  uppercase">Days </h2>
                       </div>
                        <div className="border px-5 py-2 bg-[#F8F4EA] border-[#C9850B] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#C9850B] eb-garamond"> {timeLeft.hours}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black uppercase">Hours</h2>
                       </div>
                       <div className="border px-5 py-2 bg-[#F8F4EA] border-[#C9850B] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#C9850B] eb-garamond"> {timeLeft.minutes}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black uppercase">Minutes</h2>
                       </div>
                       <div className="border px-5 py-2 bg-[#F8F4EA] border-[#C9850B] rounded-md">
                         <h2 className="text-[26px] md:text-4xl lg:text-[52px] text-center text-[#C9850B] eb-garamond">{timeLeft.seconds}</h2>
                          <h2 className="text-[10px] md:text-[14px] lg:text-[12px] text-center text-black uppercase">Seconds</h2>
                       </div>

                    </div>
<a
  href={addToMarriage()}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex items-center justify-center gap-4 w-full max-w-[200px] md:max-w-[380px] mx-auto md:h-[80px] h-[40px] mt-10"
>
  <div className="relative overflow-hidden flex items-center justify-center gap-3 w-full h-full cursor-pointer rounded-xl bg-gradient-to-r from-[#C18B13] via-[#E8C45E] to-[#A8790D] text-white">

    <span className="relative z-10 text-[13px] md:text-[18px] font-semibold tracking-[2px] ">
      Add To Calendar
    </span>

    <svg
      className="relative z-10 w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3h7v7M21 3 11 13" />
      <path d="M19 13v7H4V5h7" />
    </svg>
  </div>
</a>
            </div>
        </>
    );
} 