
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

// ArrowRight removed as "Read More" is not in Figma card
// Card and CardContent removed as they are not used

const ResourcesSection = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const articlesData = [
    {
      id: "cancer-care",
      title: "Empowering Cancer Care: Digital Care Ecosystem Delivers 83% Brand Lift for Oncology Centre",
      author: "by Qmed",
      image: "/img/article-a2a.png", // Placeholder image, update if specific images are provided
      widthClass: "w-[380px]", // Standardized width for cards
    },
    {
      id: "captive-media",
      title: "The Power of Captive Media",
      author: "by Qmed",
      image: "/img/article-hcp-intent.png", // Placeholder image
      widthClass: "w-[380px]", // Standardized width
    },
    {
      id: "o2o-transformation", // Placeholder ID
      title: "Transforming Healthcare Growth with O2O", // Placeholder title
      author: "by Qmed",
      image: "/img/article-power-insights.png", // Placeholder image
      widthClass: "w-[380px]", // Standardized width
    }
  ];

  // TODO: Implement actual carousel logic for active slide if needed for progress bar
  // const activeSlide = 0; // Placeholder for carousel state

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white"> {/* Responsive section padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px] flex flex-col gap-8 md:gap-10"> {/* Responsive container padding & gap */}
        
        {/* Top part: Title and Button */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-6"> {/* Responsive layout & gap */}
          <h2 className="font-lexend text-2xl sm:text-3xl md:text-[32px] font-medium text-black leading-tight"> {/* Responsive font size */}
            Expanding Healthcare Networks – Insights & Resources
          </h2>
          <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-10 sm:h-11 w-full md:w-auto mt-2 md:mt-0"> {/* Responsive padding, font size, border-radius, height & width */}
            Browse All Articles
          </Button>
        </div>
        <p className="font-lexend text-base sm:text-lg font-medium text-[#737171] text-center -mt-2 md:-mt-4 mb-4 md:mb-6 leading-relaxed sm:leading-[26px]"> {/* Responsive font size, line height & margins */}
          Discover how our O2O engagement solutions are transforming healthcare growth strategies
        </p>
        
        {/* Articles Carousel */}
        <Carousel setApi={setApi} className="w-full" opts={{ align: "start" }}>
          <CarouselContent className="-ml-4"> {/* Adjusted margin */}
            {articlesData.map((article, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"> {/* Responsive basis & padding */}
                <div 
                  className={`h-[240px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden relative group cursor-pointer shadow-lg border border-gray-200`} // Responsive height
                >
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full"> {/* Responsive padding */}
                    <h3 className="font-roboto text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 leading-tight sm:leading-8"> {/* Responsive font size & line height */}
                      {article.title}
                    </h3>
                    <p className="font-manrope text-xs font-semibold text-white leading-normal">{article.author}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 sm:left-[-15px] md:left-[-25px] top-1/2 -translate-y-1/2 z-10 hidden sm:flex" /> {/* Adjusted position, hidden on xs */}
          <CarouselNext className="absolute right-0 sm:right-[-15px] md:right-[-25px] top-1/2 -translate-y-1/2 z-10 hidden sm:flex" /> {/* Adjusted position, hidden on xs */}
        </Carousel>

        {/* Progress Bar - updated to reflect carousel state */}
        <div className="flex justify-center space-x-2 mt-6 md:mt-8"> {/* Responsive margin top */}
          {Array.from({ length: count }).map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full transition-all duration-300 ${index === current - 1 ? 'w-8 bg-[#1B4A52]' : 'w-4 bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
