export default function Venue() {
  return (
    <div className="relative w-full h-[800px] md:h-[950px] lg:h-[1150px] bg-[url('/assets/hero_bg2.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
      <p className="text-[#C9850B] tracking-wider text-[12px] md:text-[20px]  eb-garamond font-semibold uppercase">
        VENUE & LOCATION
      </p>

      <img
        src="/assets/underline.png"
        alt="Wedding Logo"
        className="w-36 md:py-6 py-2"
      />
      <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] mt-8">
        <span className="great-vibes-regular">Where Two Hearts Unite</span>

        <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px] eb-garamond font-semibold mt-5">
          Venue Lavanya 3 Radisson Blu Kaushambi
        </p>
      </h2>
      {/* <div className="rounded-2xl border border-[#D9B875] bg-[#FFF1D9] p-2 md:p-3 shadow-sm md:mt-12 mt-8">
        <div className="w-75 md:w-220  rounded-xl border border-[#E7D4A8]">
         <img
          src="/assets/venue.jpg"
          alt="Wedding Logo"
          className="rounded-xl"
        />
        </div>
      </div> */}

<div className="rounded-2xl border border-[#D9B875] bg-[#FFF1D9] p-2 md:p-3 shadow-sm md:mt-12 mt-8">
  <div className="relative w-75 md:w-220 rounded-xl border border-[#E7D4A8] overflow-hidden">

    <a
      href="https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Hotel+Kaushambi+Delhi+NCR"
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      {/* Open Map Button */}
     <span className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-white/95 text-[#C9850B] text-[11px] md:text-xs font-semibold px-2 py-1 rounded-full shadow-md hover:bg-[#C9850B] hover:text-white transition">
  <i className="fa-solid fa-location-dot"></i>
  Open Map
</span>

      {/* Clickable Image */}
      <img
        src="/assets/venue.jpg"
        alt="Wedding Venue - Open Map"
        className="rounded-xl w-full"
      />
    </a>

  </div>
</div>





      <a
        href="https://www.google.com/maps/search/?api=1&query=Radisson+Blu+Hotel+Kaushambi+Delhi+NCR"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-4 w-full max-w-[260px] md:max-w-[380px] mx-auto md:h-[80px] h-[65px] rounded-xl border border-[#D8B875] bg-[#FAF4E9] p-2 shadow-sm mt-10"
      >
        <div className="relative overflow-hidden flex items-center justify-center gap-3 w-full h-full rounded-xl bg-gradient-to-r from-[#C18B13] via-[#E8C45E] to-[#A8790D] text-white">
          {/* Golden diagonal design */}
          <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,0.12)_0%,transparent_40%,rgba(255,255,255,0.10)_100%)]" />

          <svg
            className="relative z-10 w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.5 5.5-3 7-7 3 3-7Z" />
          </svg>

          <span className="relative z-10 text-[13px] md:text-[18px] font-semibold tracking-[2px]">
            GET DIRECTIONS
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

      <img
        src="/assets/underline2.png"
        alt="Wedding Logo"
        className="md:w-1/5 w-2/3 py-6"
      />
      <img
        src="/assets/venue_flower.png"
        alt=""
        className="absolute bottom-0 left-0 w-[25%] md:w-[15%] object-bottom z-10"
      />

      <img
        src="/assets/hero_flower.png"
        alt=""
        className="absolute bottom-0 right-0 w-[25%] md:w-[15%]  object-bottom z-10 "
      />
    </div>
  );
}
