// import { CalendarDays, Clock, MapPin } from "lucide-react";
export default function Events() {
  const details = [
    {
      icon: "/assets/icon_1.png",
      label: "AUSPICIOUS DATE",
      value: "10th December",
    },
    {
      icon: "/assets/icon2.png",
      label: "SANGEET",
      value: "5:00 pm",
    },
    {
      icon: "/assets/icon3.png",
      label: "BIKANERVALA",
      value: "Raj nagar ext",
    },
  ];

  const haldidetails = [
    {
      icon: "/assets/icon_1.png",
      label: "AUSPICIOUS DATE",
      value: "11th December",
    },
    {
      icon: "/assets/icon2.png",
      label: "Haldi & Mehendi",
      value: "11:00 am",
    },
    {
      icon: "/assets/icon3.png",
      label: "BIKANERVALA",
      value: "Raj nagar ext",
    },
  ];

  const weddingdetails = [
    {
      icon: "/assets/icon_1.png",
      label: "AUSPICIOUS DATE",
      value: "12th December",
    },
    {
      icon: "/assets/icon2.png",
      label: "Wedding",
      value: "10.30 am",
    },
    {
      icon: "/assets/icon3.png",
      label: "Venue lavanya 1radisson blu",
      value: "Kashumbi",
    },
  ];

  return (
    <>
      {/* sangeet */}
      <div className="relative w-full h-[650px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
        <img
          src="/assets/sun.png"
          alt=""
          className="absolute top-0 left-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/hero_top_flower.png"
          alt=""
          className="absolute top-0 right-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/sangeet.webp"
          alt="Wedding Logo"
          className="md:w-32 w-22 relative z-10 mt-4"
        />
        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] md:mt-12 mt-6 great-vibes-regular">
          The Sangeet Soirée
        </h2>

        <p className="relative z-10 text-[#546F2F] tracking-wider text-[12px] md:text-[20px] mt-4 eb-garamond font-semibold px-3 md:w-240">
          Divine Musical Soirée a magical evening filled with soulful melodies,
          graceful dances, joyous laughter, and beautiful moments celebrating
          love and togetherness.
        </p>
        <img
          src="/assets/underline2.png"
          alt="Wedding Logo"
          className="md:w-1/5 w-2/3 py-3"
        />
        <section className="w-full py-6 px-3 md:py-7 md:mt-5">
          {/* Details */}
          <div className="max-w-3xl mx-auto grid grid-cols-3">
            {details.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2
              ${index !== 2 ? "border-r border-[#E8D6BD]" : ""}`}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl border border-[#E6C69A]
              bg-[#FBE9D2] flex items-center justify-center text-[#95601C]"
                >
                  {/* {item.icon} */}
                  <img
                    src={item.icon}
                    alt="Wedding Logo"
                    //   className="md:w-32 w-22 relative z-10 mt-4"
                  />
                </div>

                {/* Label */}
                <p
                  className="text-[#82715B] text-[9px] md:text-[10px]
              tracking-[1.5px] mt-2 font-medium"
                >
                  {item.label}
                </p>

                {/* Value */}
                <h3
                  className="text-[#536F32] text-[15px] md:text-[26px]
              mt-1 eb-garamond whitespace-nowrap"
                >
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* View Map */}
          <div className="flex justify-center mt-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Raj+Nagar+Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94600F] text-[13px] tracking-wider
            border-b border-[#C9A36B] pb-1 hover:text-[#C14405] transition"
            >
              View on Map →
            </a>
          </div>
        </section>
        <img
          src="/assets/temple.webp"
          alt=""
          className="absolute bottom-0 left-0 w-[48%] md:w-[40%] object-bottom z-10"
        />

        <img
          src="/assets/event_flower.png"
          alt=""
          className="absolute bottom-0 right-0 w-[25%] md:w-[15%]  object-bottom z-10 "
        />
      </div>

      {/* Haldi */}

      <div className="relative w-full h-[650px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
        <img
          src="/assets/sun.png"
          alt=""
          className="absolute top-0 left-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/event_flower_opposite.png"
          alt=""
          className="absolute top-0 right-0 w-[25%] md:w-[15%]  object-contain z-10"
        />

        <img
          src="/assets/haldi.webp"
          alt="Wedding Logo"
          className="md:w-32 w-22 relative z-10 mt-4"
        />
        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] md:mt-12 mt-6 great-vibes-regular">
          Hues of Haldi & Mehndi
        </h2>

        <p className="relative z-10 text-[#546F2F] tracking-wider text-[12px] md:text-[20px] mt-4 eb-garamond font-semibold px-3 md:w-240">
          A vibrant Haldi & Mehndi celebration filled with golden hues,
          intricate henna designs, joyful laughter, cherished traditions, and
          beautiful moments of love, blessings, and togetherness.
        </p>
        <img
          src="/assets/underline2.png"
          alt="Wedding Logo"
          className="md:w-1/5 w-2/3 py-3"
        />
        <section className="w-full py-6 px-3 md:py-7 md:mt-5">
          {/* Details */}
          <div className="max-w-3xl mx-auto grid grid-cols-3">
            {haldidetails.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2
              ${index !== 2 ? "border-r border-[#E8D6BD]" : ""}`}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl border border-[#E6C69A]
              bg-[#FBE9D2] flex items-center justify-center text-[#95601C]"
                >
                  {/* {item.icon} */}
                  <img
                    src={item.icon}
                    alt="Wedding Logo"
                    //   className="md:w-32 w-22 relative z-10 mt-4"
                  />
                </div>

                {/* Label */}
                <p
                  className="text-[#82715B] text-[9px] md:text-[10px]
              tracking-[1.5px] mt-2 font-medium uppercase"
                >
                  {item.label}
                </p>

                {/* Value */}
                <h3
                  className="text-[#536F32] text-[15px] md:text-[26px]
              mt-1 eb-garamond whitespace-nowrap"
                >
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* View Map */}
          <div className="flex justify-center mt-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Raj+Nagar+Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94600F] text-[13px] tracking-wider
            border-b border-[#C9A36B] pb-1 hover:text-[#C14405] transition"
            >
              View on Map →
            </a>
          </div>
        </section>
        <img
          src="/assets/temple.webp"
          alt=""
          className="absolute bottom-0 left-0 w-[48%] md:w-[40%] object-bottom z-10"
        />

        <img
          src="/assets/haldi_flower.png"
          alt=""
          className="absolute bottom-0 right-0 w-15 md:w-55  object-bottom z-10 "
        />
      </div>

      {/* Wedding */}
      <div className="relative w-full h-[650px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
        <img
          src="/assets/sun.png"
          alt=""
          className="absolute top-0 left-0 w-24 md:w-36 object-contain z-10"
        />

        <img
          src="/assets/wedding_flower_top.png"
          alt=""
          className="absolute top-0 right-0  w-15 md:w-55 object-contain z-10"
        />

        <img
          src="/assets/wedding.webp"
          alt="Wedding Logo"
          className="md:w-32 w-22 relative z-10 mt-4"
        />
        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] md:mt-12 mt-6 great-vibes-regular">
          The Grand Wedding
        </h2>

        <p className="relative z-10 text-[#546F2F] tracking-wider text-[12px] md:text-[20px] mt-4 eb-garamond font-semibold px-3 md:w-240">
          A sacred wedding celebration filled with timeless rituals, heartfelt
          vows, divine blessings, cherished traditions, and beautiful moments as
          two souls unite in love, joy, and togetherness for a lifetime of
          forever.
        </p>
        <img
          src="/assets/underline2.png"
          alt="Wedding Logo"
          className="md:w-1/5 w-2/3  py-3"
        />
        <section className="w-full py-6 px-3 md:py-7 md:mt-5">
          {/* Details */}
          <div className="max-w-3xl mx-auto grid grid-cols-3">
            {weddingdetails.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2
              ${index !== 2 ? "border-r border-[#E8D6BD]" : ""}`}
              >
                
                <div
                  className="w-9 h-9 rounded-xl border border-[#E6C69A]
              bg-[#FBE9D2] flex items-center justify-center text-[#95601C]"
                >
                
                  <img
                    src={item.icon}
                    alt="Wedding Logo"
                    //   className="md:w-32 w-22 relative z-10 mt-4"
                  />
                </div>

              
                <p
                  className="text-[#82715B] text-[9px] md:text-[10px]
              tracking-[1.5px] mt-2 font-medium uppercase"
                >
                  {item.label}
                </p>

              
                <h3
                  className="text-[#536F32] text-[15px] md:text-[26px]
              mt-1 eb-garamond whitespace-nowrap"
                >
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="https://maps.app.goo.gl/v5Sb7pKgqvCUT9Ta9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94600F] text-[13px] tracking-wider
            border-b border-[#C9A36B] pb-1 hover:text-[#C14405] transition"
            >
              View on Map →
            </a>
          </div>
        </section>
        <img
          src="/assets/temple.webp"
          alt=""
          className="absolute bottom-0 left-0 w-[48%] md:w-[40%] object-bottom z-10"
        />

        <img
          src="/assets/event_flower.png"
          alt=""
          className="absolute bottom-0 right-0 w-[25%] md:w-[15%]  object-bottom z-10 "
        />
      </div>
    </>
  );
}
