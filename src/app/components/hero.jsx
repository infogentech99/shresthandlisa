"use client";
import { useState } from "react";
import ScratchText from "../components/ScratchText";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-[850px] md:h-[950px] lg:h-[1200px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
        <img
          src="/assets/sun.png"
          alt=""
          className="absolute top-0 left-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/flower_hero2.png"
          alt=""
          className="absolute md:top-30 top-22 left-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/hero_top_flower.png"
          alt=""
          className="absolute top-0 right-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/ganesha.png"
          alt="Wedding Logo"
          className="md:w-22 w-18 relative z-10 mt-14"
        />

        <p className="relative z-10 text-[#C99333] font-semibold tracking-widest text-[12px] md:text-[14px] mt-5 px-2">
          ||॥ श्री गणेशाय नमः ॥||
          <br />
          मंगलम् भगवान् विष्णु मंगलम् गरुणध्वजः मंगलम् पुण्डरीकाक्षः मंगलाय
          तनोहरि
        </p>
        <img
          src="/assets/underline.png"
          alt="Wedding Logo"
          className="w-36 py-3"
        />

        <p className="relative z-10 text-[#546F2F] tracking-wider text-[12px] md:text-[20px] mt-4 eb-garamond font-semibold">
          With the blessings of God Almighty, we cordially
          <br />
          invite you to the wedding ceremony of our beloved son.
        </p>

        <h2 className="relative z-10 flex flex-col items-center text-[#C14405] text-5xl md:text-4xl lg:text-[90px] mt-12">
          <span className="great-vibes-regular">Shresth</span>

          <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px] eb-garamond font-semibold">
            (S/o Surabhi & Anurag Sharma)
            <br />
            (Grand S/o Smt. Usha Sharma & Sh. S K Sharma)
          </p>

          <span className="great-vibes-regular text-2xl md:text-2xl lg:text-[48px] text-[#C14405] md:py-10 py-6">
            With
          </span>

          <span className="great-vibes-regular">Lisa</span>

          <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px]  eb-garamond font-semibold">
            (D/o Suma & Jose George)
            <br />
            (Grand D/o Smt. Lizyamma George & Late. Sh. M D George)
          </p>
        </h2>

        <img
          src="/assets/temple.webp"
          alt=""
          className="absolute bottom-0 left-0 w-[48%] md:w-[40%] object-bottom z-10"
        />

        <img
          src="/assets/hero_flower.png"
          alt=""
          className="absolute bottom-0 right-0 w-[25%] md:w-[15%]  object-bottom z-10 "
        />
      </div>

      <div className="relative w-full h-[750px] md:h-[950px] lg:h-[1050px] bg-[url('/assets/hero_bg2.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
        <img
          src="/assets/logo.png"
          alt="Wedding Logo"
          className="md:w-47 w-28 relative z-10 mt-10"
        />

        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] mt-12">
          <span className="great-vibes-regular">The Blessed Beginning</span>

          <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px] eb-garamond font-semibold mt-5">
            Every passing moment brings us closer to a beautiful beginning
            filled with love, laughter, and forever.
          </p>
          <img
            src="/assets/underline.png"
            alt="Wedding Logo"
            className="w-36 md:py-13 py-8"
          />

          <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px]  eb-garamond font-semibold uppercase">
            A Golden Secret Awaits Scratch to Reveal
          </p>
        </h2>
        <ScratchText />
        <img
          src="/assets/temple.webp"
          alt=""
          className="absolute bottom-0 left-0 w-[48%] md:w-[40%] object-bottom z-10"
        />

        <img
          src="/assets/hero_flower.png"
          alt=""
          className="absolute bottom-0 right-0 w-[25%] md:w-[15%]  object-bottom z-10 "
        />
      </div>

      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[360px] bg-[url('/assets/hero_bg2.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-18 md:pt-24 overflow-hidden">
        <p className="text-[#C9850B] tracking-wider text-[12px] md:text-[20px]  eb-garamond font-semibold uppercase">
          TIMELESS TRADITIONS
        </p>
        <img
          src="/assets/underline.png"
          alt="Wedding Logo"
          className="w-36 md:py-4 py-2"
        />
        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] md:mt-12 mt-6 great-vibes-regular">
         The Sacred Celebrations

         
        </h2>
      </div>
    </>
  );
}
