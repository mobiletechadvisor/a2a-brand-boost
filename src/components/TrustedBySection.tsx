const TrustedBySection = () => {
  const logos = [
    { src: "/img/client-logo-1.png", alt: "AstraZeneca" },
    { src: "/img/client-logo-2.png", alt: "GSK" },
    { src: "https://hello.qmed.asia/lovable-uploads/04b0578b-5022-44cd-86d5-13b9484e384a.png", alt: "OncoCare Cancer Centre" },
    { src: "/img/client-logo-4.png", alt: "Novartis" },
    { src: "https://hello.qmed.asia/lovable-uploads/c5cfbf45-954f-49f2-bf38-2f05949e246c.png", alt: "Spritzer" },
    { src: "/img/client-logo-6.png", alt: "Client Logo 6" },
    { src: "https://hello.qmed.asia/lovable-uploads/ed845c77-cd92-4dd-9571-17e23d0fbed0.png", alt: "Homesoy" },
    { src: "https://hello.qmed.asia/lovable-uploads/e3eee58e-518c-4382-b7d0-6f05d1592880.png", alt: "ETiQa" },
    { src: "https://hello.qmed.asia/lovable-uploads/88f241d3-cda0-45b8-9e0b-06588dd9239a.png", alt: "UCSI University" },
    { src: "https://hello.qmed.asia/lovable-uploads/fc3db3fb-087b-4483-9565-cee81e17a693.png", alt: "HealthLane" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-[158px]">
        <div className="text-center mb-12">
          <h2 className="font-lexend text-[32px] font-medium text-black mb-6 leading-10">
            Our Clientele
          </h2>
          <p className="font-lexend text-lg font-medium text-[#737171] max-w-3xl mx-auto leading-[26px]">
            The leading names in healthcare leverage on Qmed Engage suite to transform relationships into Growth Engines
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[269px] h-[124px] flex items-center justify-center border border-[#EEEEEE] rounded-2xl mx-2 shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]">
                <img src={logo.src} alt={logo.alt} className="max-h-[90px] max-w-[200px] object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-4">
          <div className="flex animate-scroll-logos-reverse">
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
