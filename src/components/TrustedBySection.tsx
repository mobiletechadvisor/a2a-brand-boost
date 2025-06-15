const TrustedBySection = () => {
  const logos = [
    { src: "/img/client-logo-1.png", alt: "Client Logo 1" },
    { src: "/img/client-logo-2.png", alt: "Client Logo 2" },
    { src: "/img/client-logo-pfizer.png", alt: "Pfizer Logo" },
    { src: "/img/client-logo-4.png", alt: "Client Logo 4" },
    { src: "/img/client-logo-5.png", alt: "Client Logo 5" },
    { src: "/img/client-logo-6.png", alt: "Client Logo 6" },
    { src: "/img/client-logo-7.png", alt: "Client Logo 7" },
    { src: "/img/client-logo-8.png", alt: "Client Logo 8" },
    { src: "/img/client-logo-9.png", alt: "Client Logo 9" },
    { src: "/img/client-logo-10.png", alt: "Client Logo 10" },
  ];

  // Duplicate logos for a seamless scrolling effect if using animation
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-white"> {/* Adjusted padding based on Figma node 1:3248 */}
      <div className="max-w-[1440px] mx-auto px-[158px]"> {/* Adjusted padding and max-width */}
        <div className="text-center mb-12"> {/* Spacing from Figma node 1:3249 */}
          <h2 className="font-lexend text-[32px] font-medium text-black mb-6 leading-10"> {/* Added font-lexend, Updated size, color, line height */}
            Our Clientele
          </h2>
          <p className="font-lexend text-lg font-medium text-[#737171] max-w-3xl mx-auto leading-[26px]"> {/* Added font-lexend, Added font-medium, updated line height */}
            The leading names in healthcare leverage on Qmed Engage suite to transform relationships into Growth Engines
          </p>
        </div>

        {/* Logo marquee/slider - based on Figma nodes 1:3252, 1:3253, 1:3254 */}
        {/* This is a simplified static representation. A real implementation might use a library or custom CSS for scrolling animation. */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-logos"> {/* Placeholder for scrolling animation */}
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[269px] h-[124px] flex items-center justify-center border border-[#EEEEEE] rounded-2xl mx-2 shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]">
                <img src={logo.src} alt={logo.alt} className="max-h-[90px] max-w-[200px] object-contain" />
              </div>
            ))}
          </div>
        </div>
        {/* A second row of logos is present in Figma (node 1:3254), implying a multi-row or continuous scroll */}
         <div className="overflow-hidden mt-4"> {/* Second row, slightly offset or part of a continuous scroll */}
          <div className="flex animate-scroll-logos-reverse"> {/* Placeholder for scrolling animation (could be reversed or offset) */}
            {duplicatedLogos.slice(logos.length / 2).concat(duplicatedLogos.slice(0, logos.length / 2)).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[269px] h-[124px] flex items-center justify-center border border-[#EEEEEE] rounded-2xl mx-2 shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]">
                <img src={logo.src} alt={logo.alt} className="max-h-[90px] max-w-[200px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
