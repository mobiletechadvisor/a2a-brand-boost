
import { Button } from "@/components/ui/button";
// ArrowRight removed as "Read More" is not in Figma card
// Card and CardContent removed as they are not used

const ResourcesSection = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-[158px] flex flex-col gap-10"> {/* Reduced gap slightly */}
        
        {/* Top part: Title and Button */}
        <div className="flex justify-between items-center">
          <h2 className="font-lexend text-[32px] font-medium text-black leading-tight"> {/* Added font-lexend, Adjusted width to fit content */}
            Expanding Healthcare Networks – Insights & Resources
          </h2>
          <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-11">
            Browse All Articles
          </Button>
        </div>
        <p className="font-lexend text-lg font-medium text-[#737171] text-center -mt-4 mb-6 leading-[26px]"> {/* Added font-lexend, Updated styles for subtitle */}
          Discover how our O2O engagement solutions are transforming healthcare growth strategies
        </p>
        
        {/* Articles Carousel */}
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"> {/* Increased space-x */}
          {articlesData.map((article) => (
            <div 
              key={article.id} 
              className={`flex-shrink-0 ${article.widthClass} h-[280px] rounded-xl overflow-hidden relative group cursor-pointer shadow-lg border border-gray-200`} // Increased height, rounded-xl, added shadow & border
            >
              <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-roboto text-2xl font-semibold text-white mb-1 leading-8"> {/* Added font-roboto, Updated styles for card title */}
                  {article.title}
                </h3>
                <p className="font-manrope text-xs font-semibold text-white leading-normal">{article.author}</p> {/* Added font-manrope, Updated styles for card author */}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar - kept similar, adjust activeSlide if carousel is implemented */}
        <div className="flex justify-center space-x-2 mt-2"> {/* Adjusted margin */}
          {articlesData.map((_, index) => (
            <div 
              key={index} 
              // className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-[#1B4A52]' : 'w-4 bg-gray-300'}`} // Example active state
              className={`h-2 rounded-full transition-all duration-300 ${index === 0 ? 'w-8 bg-[#C3D4D7]' : 'w-4 bg-[#E2E8F0]'}`} // Kept original active state for first dot
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
