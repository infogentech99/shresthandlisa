// import { CalendarDays, Clock, MapPin } from "lucide-react";
export default function Events() {
  const addToMuscial = () => {
    const url = new URL("https://calendar.google.com/calendar/render");

    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "Divine Musical Evening");
    url.searchParams.set("dates", "20261210T170000/20261210T180000");
    url.searchParams.set("ctz", "Asia/Kolkata");

    window.open(url.toString(), "_blank");
  };



const addToHaldi = () => {
  const url = new URL("https://calendar.google.com/calendar/render");

  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", "Hues of Haldi & Mehndi");
  url.searchParams.set("dates", "20261211T110000/20261211T120000");
  url.searchParams.set("ctz", "Asia/Kolkata");

  window.open(url.toString(), "_blank");
};



const addToHolyMatrimony = () => {
  const url = new URL("https://calendar.google.com/calendar/render");

  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", "Holy Matrimony");
  url.searchParams.set("dates", "20261212T103000/20261212T113000");
  url.searchParams.set("ctz", "Asia/Kolkata");

  window.open(url.toString(), "_blank");
};





const addToWedding = () => {
  const url = new URL("https://calendar.google.com/calendar/render");

  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", "The Grand Wedding");
  url.searchParams.set("dates", "20261212T180000/20261212T190000");
  url.searchParams.set("ctz", "Asia/Kolkata");

  window.open(url.toString(), "_blank");
};




  const details = [
    {
      icon: "/assets/icon_1.png",
      label: "AUSPICIOUS DATE",
      value: "10th December",
    },
    {
      icon: "/assets/icon2.png",
      label: "SANGEET",
      value: "4:00 pm",
    },
    {
      icon: "/assets/icon3.png",
      label: "BIKANERVALA",
      value: "Raj Nagar Ext",
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
      value: "10:30 am",
    },
    {
      icon: "/assets/icon3.png",
      label: "BIKANERVALA",
      value: "Raj Nagar Ext",
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
      value: <><span className="border-b">Sehra Bandi</span> <br/> 5:00 pm onwards <br/><span className="border-b"> Departure of Baraat </span><br/> 7:00 pm onwards <br/><span className="border-b"> Dinner </span><br/> 8:30 pm onwards</>,
    },
    {
      icon: "/assets/icon3.png",
      label: "Venue Lavanya 3 Radisson Blu",
      value: "Kaushambi",
    },
  ];

  const matrimonydetails = [
    {
      icon: "/assets/icon_1.png",
      label: "AUSPICIOUS DATE",
      value: "12th December",
    },
    {
      icon: "/assets/icon2.png",
      label: "Wedding",
      value: "10:30 am",
    },
    {
      icon: "/assets/icon3.png",
      label: "Venue Lavanya 1 Radisson Blu",
      value: "Kaushambi",
    },
  ];
  return (
    <>
      {/* sangeet */}
      <div className="relative w-full h-[680px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
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
          Divine Musical Evening
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
              href="https://maps.app.goo.gl/grCppvfdSFEUfTwV6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94600F] text-[13px] tracking-wider
            border-b border-[#C9A36B] pb-1 hover:text-[#C14405] transition"
            >
              View on Map →
            </a>
          </div>

          <button
            type="button"
            onClick={addToMuscial}
            className="group relative flex items-center justify-center gap-4 w-full max-w-[200px] md:max-w-[380px] mx-auto md:h-[80px] h-[40px] mt-2"
          >
            <div className="relative overflow-hidden flex items-center justify-center gap-1 w-full h-full cursor-pointer text-[#94600F] hover:text-[#C14405] transition">
              <span className="relative z-10 text-[13px] md:text-[18px] tracking-[1px] cursor-pointer border-b pb-1 border-[#C9A36B]">
                Add To Calendar →
              </span>

              {/* <svg
      className="relative z-10 w-3.5 h-3.5 mb-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3h7v7M21 3 11 13" />
      <path d="M19 13v7H4V5h7" />
    </svg> */}
            </div>
          </button>
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

      <div className="relative w-full h-[680px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
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
              href="https://maps.app.goo.gl/T5Aw86od2BtEZwpPA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94600F] text-[13px] tracking-wider
            border-b border-[#C9A36B] pb-1 hover:text-[#C14405] transition"
            >
              View on Map →
            </a>
          </div>


   <button
  type="button"
  onClick={addToHaldi}
  className="group relative flex items-center justify-center gap-4 w-full max-w-[200px] md:max-w-[380px] mx-auto md:h-[80px] h-[40px] mt-2"
>
  <div className="relative overflow-hidden flex items-center justify-center gap-1 w-full h-full cursor-pointer text-[#94600F] hover:text-[#C14405] transition">

    <span className="relative z-10 text-[13px] md:text-[18px] tracking-[1px] cursor-pointer border-b pb-1 border-[#C9A36B]">
      Add To Calendar →
    </span>

    {/* <svg
      className="relative z-10 w-3.5 h-3.5 mb-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3h7v7M21 3 11 13" />
      <path d="M19 13v7H4V5h7" />
    </svg> */}

  </div>
</button>



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

      {/* Holy Matrimony */}
      <div className="relative w-full h-[700px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
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
          src="/assets/matrimony.png"
          alt="Wedding Logo"
          className="md:w-32 w-22 relative z-10 mt-4"
        />
        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] md:mt-12 mt-6 great-vibes-regular">
          Holy Matrimony
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
            {matrimonydetails.map((item, index) => (
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




 <button
  type="button"
  onClick={addToHolyMatrimony}
  className="group relative flex items-center justify-center gap-4 w-full max-w-[200px] md:max-w-[380px] mx-auto md:h-[80px] h-[40px] mt-2"
>
  <div className="relative overflow-hidden flex items-center justify-center gap-1 w-full h-full cursor-pointer text-[#94600F] hover:text-[#C14405] transition">

    <span className="relative z-10 text-[13px] md:text-[18px] tracking-[1px] cursor-pointer border-b pb-1 border-[#C9A36B]">
      Add To Calendar →
    </span>

    {/* <svg
      className="relative z-10 w-3.5 h-3.5 mb-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3h7v7M21 3 11 13" />
      <path d="M19 13v7H4V5h7" />
    </svg> */}

  </div>
</button>



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

      {/* Wedding */}
      <div className="relative w-full h-[800px] md:h-[950px] lg:h-[900px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
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

        {/* <p className="relative z-10 text-[#546F2F] tracking-wider text-[16px] md:text-[20px] mt-2 eb-garamond font-semibold">
          Sehra Bandi <br />
          Departure of Baarat
        </p> */}
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
                  className="text-[#536F32] text-[14px] md:text-[26px]
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




 <button
  type="button"
  onClick={addToWedding}
  className="group relative flex items-center justify-center gap-4 w-full max-w-[200px] md:max-w-[380px] mx-auto md:h-[80px] h-[40px] mt-2"
>
  <div className="relative overflow-hidden flex items-center justify-center gap-1 w-full h-full cursor-pointer text-[#94600F] hover:text-[#C14405] transition">

    <span className="relative z-10 text-[13px] md:text-[18px] tracking-[1px] cursor-pointer border-b pb-1 border-[#C9A36B]">
      Add To Calendar →
    </span>

    {/* <svg
      className="relative z-10 w-3.5 h-3.5 mb-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3h7v7M21 3 11 13" />
      <path d="M19 13v7H4V5h7" />
    </svg> */}

  </div>
</button>




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
