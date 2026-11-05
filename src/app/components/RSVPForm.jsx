"use client";

import { useEffect, useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    arrivalDetails: "",
    blessingMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (!showPopup) return;

    const timeoutId = window.setTimeout(() => setShowPopup(false), 5000);

    return () => window.clearTimeout(timeoutId);
  }, [showPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || showPopup) return;

    setIsSubmitting(true);
    setEmailError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          countryCode: formData.countryCode,
          phone: formData.phone.trim(),
          arrivalDetails: formData.arrivalDetails.trim(),
          blessingMessage:
            formData.blessingMessage.trim() || "No message provided",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "We couldn't send your RSVP. Please try again.",
        );
      }

      setShowPopup(true);
    } catch (error) {
      console.error("RSVP email error:", error);

      setEmailError(
        error.message || "We couldn't send your RSVP. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = "text-xs uppercase tracking-[2px] text-[#a87832]";

  const inputClass =
    "w-full box-border rounded-[11px] border border-[#e5b574] bg-white/70 px-[14px] py-[13px] text-sm text-[#60382d] placeholder:text-[#a99d94] outline-none transition focus:border-[#9a641f] focus focus:ring-[#9a641f]/10";

  return (
    <section className="relative w-full h-[1200px] md:h-[950px] lg:h-[1550px] bg-[url('/assets/hero_bg2.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
      <div className="mx-auto w-full ">
        <p className="text-[#C9850B] tracking-wider text-[17px] md:text-[20px]  eb-garamond font-semibold uppercase">
       R.S.V.P
      </p>

    <div className="flex flex-col justify-center items-center">
          <img
        src="/assets/underline.png"
        alt="Wedding Logo"
        className="w-36 md:py-6 py-2"
      />
    </div>
      <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-3xl md:text-4xl lg:text-[70px] mt-8">
        <span className="great-vibes-regular">Join Us In Celebration</span>

        <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px] eb-garamond font-semibold mt-5">
          “We would be honored to celebrate this special wedding week with you. Kindly let us know which events you will be attending by 1st January 2027”
        </p>
        </h2>

        <div className="w-full flex flex-col items-center justify-center mt-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Guest name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={labelClass}>
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              required
              maxLength={100}
              disabled={isSubmitting || showPopup}
            />
          </div>

          {/* Phone number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>

            <div className="flex gap-2">
              <select
                name="countryCode"
                aria-label="Country code"
                value={formData.countryCode}
                onChange={handleChange}
                className={`${inputClass} h-[46px] !w-[72px] shrink-0 px-2 text-sm`}
                disabled={isSubmitting || showPopup}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
                <option value="+61">+61</option>
              </select>

              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => {
                  const digitsOnly = e.target.value.replace(/\D/g, "");
                  handleChange({
                    target: {
                      name: "phone",
                      value: digitsOnly,
                    },
                  });
                }}
                className={`${inputClass} h-[46px] min-w-0 flex-1`}
                required
                maxLength={20}
                disabled={isSubmitting || showPopup}
              />
            </div>
          </div>

          {/* Arrival information */}
          <div className="flex flex-col gap-2">
            <label htmlFor="arrivalDetails" className={labelClass}>
              Date, Time &amp; Place of Arrival
            </label>

            <textarea
              id="arrivalDetails"
              name="arrivalDetails"
              placeholder="Share your arrival date, time and place..."
              value={formData.arrivalDetails}
              onChange={handleChange}
              rows={3}
              maxLength={2000}
              className={`${inputClass} resize-y leading-relaxed`}
              required
              disabled={isSubmitting || showPopup}
            />
          </div>

          {/* Blessing message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="blessingMessage" className={labelClass}>
              A Blessing Message for the Couple
            </label>

            <textarea
              id="blessingMessage"
              name="blessingMessage"
              placeholder="Write a heartfelt message for the couple..."
              value={formData.blessingMessage}
              onChange={handleChange}
              rows={4}
              maxLength={3000}
              className={`${inputClass} resize-y leading-relaxed`}
              disabled={isSubmitting || showPopup}
            />
          </div>

          {/* Email error */}
          {emailError && (
            <p
              role="alert"
              className="text-center text-sm leading-relaxed text-red-700"
            >
              {emailError}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || showPopup}
            className="mt-0.5 flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl border border-[#8c1e1e] bg-[#8c1e1e] px-5 py-3.5 text-[13px] uppercase tracking-[2px] text-[#fffaf6] transition duration-300 hover:-translate-y-px hover:bg-[#6f1717] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send RSVP"}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>
        </form>

         <a
            href="https://www.instagram.com/theinvitearc/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-30 flex items-center gap-3 font-serif text-[16px] text-[#546F2F]"
          >
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="object-contain h-4 w-5"
            />

            <span>Follow us on Instagram</span>
          </a>
       </div>
      </div>

      {/* Success popup */}
      {showPopup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="rsvp-success-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#261411]/55 p-5"
        >
          <div className="w-full max-w-[340px] animate-[popupIn_0.3s_ease] rounded-[14px] border border-[#e5b574] bg-[#fcf5ed] px-6 py-8 text-center shadow-2xl">
            <div className="mb-2 text-[32px] text-[#8c1e1e]">♥</div>

            <h3
              id="rsvp-success-title"
              className="mb-2 font-['Great_Vibes',cursive] text-4xl font-normal text-[#870b25]"
            >
              Thank You!
            </h3>

            <p className="text-sm leading-[1.8] text-[#8a633e]">
              Your response means so much to us. We look forward to celebrating
              with you!
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes popupIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}