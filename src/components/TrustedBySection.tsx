
const TrustedBySection = () => {
  const logos = [
    { src: "/img/client-logo-1.png", alt: "AstraZeneca" },
    { src: "/img/client-logo-2.png", alt: "GSK" },
    { src: "/lovable-uploads/1d35c339-73e0-44d9-a9e7-6f891409195b.png", alt: "OncoCare Cancer Centre" },
    { src: "/img/client-logo-4.png", alt: "Novartis" },
    { src: "/lovable-uploads/e2070788-2561-43e9-8d89-1493eca4e49c.png", alt: "Spritzer" },
    { src: "https://yrnbbkljrdwoyqjpswtv.supabase.co/storage/v1/object/public/assets//img_petronas.png", alt: "Petronas" },
    { src: "/lovable-uploads/3f0667a4-eb5c-41b8-934d-9bb18fb27486.png", alt: "Homesoy" },
    { src: "/lovable-uploads/91c2daba-3a93-4ae4-b84a-141a05465d42.png", alt: "ETiQa" },
    { src: "/lovable-uploads/78d8b872-f2c3-42a4-a725-ad5814deb245.png", alt: "UCSI University" },
    { src: "/lovable-uploads/f847a2f6-438f-4052-a453-e6c937fd7d1f.png", alt: "HealthLane Family Pharmacy" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white"> {/* Responsive section padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px]"> {/* Responsive container padding */}
        <div className="text-center mb-10 md:mb-12"> {/* Adjusted margin */}
          <h2 className="font-lexend text-2xl sm:text-3xl md:text-[32px] font-medium text-black mb-4 md:mb-6 leading-tight sm:leading-10"> {/* Responsive font size & margin */}
            Our Clientele
          </h2>
          <p className="font-lexend text-base sm:text-lg font-medium text-[#737171] max-w-3xl mx-auto leading-relaxed sm:leading-[26px]"> {/* Responsive font size & line height */}
            The leading names in healthcare leverage on Qmed Engage suite to transform relationships into Growth Engines
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] lg:w-[269px] lg:h-[124px] flex items-center justify-center border border-[#EEEEEE] rounded-xl sm:rounded-2xl mx-1 sm:mx-2 shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]"> {/* Responsive sizing & margin */}
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-[50px] max-w-[120px] sm:max-h-[70px] sm:max-w-[160px] lg:max-h-[90px] lg:max-w-[200px] object-contain" // Responsive image sizing
                  onError={(e) => {
                    console.log(`Failed to load image: ${logo.src}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-3 sm:mt-4"> {/* Adjusted margin */}
          <div className="flex animate-scroll-logos-reverse">
            {duplicatedLogos.slice(logos.length / 2).concat(duplicatedLogos.slice(0, logos.length / 2)).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] lg:w-[269px] lg:h-[124px] flex items-center justify-center border border-[#EEEEEE] rounded-xl sm:rounded-2xl mx-1 sm:mx-2 shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]"> {/* Responsive sizing & margin */}
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-[50px] max-w-[120px] sm:max-h-[70px] sm:max-w-[160px] lg:max-h-[90px] lg:max-w-[200px] object-contain" // Responsive image sizing
                  onError={(e) => {
                    console.log(`Failed to load image: ${logo.src}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
