
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react"; // Added Quote icon

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
      author: "Dr. John Doe",
      avatar: "/img/avatar-john-doe.png", // Using downloaded avatar
    },
    {
      id: 2,
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
      author: "Dr. John Doe",
      avatar: "/img/avatar-john-doe.png", // Using a placeholder or different avatar if available
    },
    {
      id: 3,
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
      author: "Dr. John Doe",
      avatar: "/img/avatar-john-doe.png",
    },
    {
      id: 4,
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
      author: "Dr. John Doe",
      avatar: "/img/avatar-john-doe.png",
    },
    {
      id: 5,
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
      author: "Dr. John Doe",
      avatar: "/img/avatar-john-doe.png",
    },
    {
      id: 6,
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
      author: "Dr. John Doe",
      avatar: "/img/avatar-john-doe.png",
    },
  ];

  return (
    // Background gradient from Figma node 1:3149
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-radial from-[#FFEFE1] to-[rgba(255,255,255,0)]"> {/* Responsive section padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px]"> {/* Responsive container padding */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12"> {/* Responsive margin */}
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-black mb-4 sm:mb-6"> {/* Responsive font size & margin */}
            Success Speaks for Itself
          </h2>
          <p className="text-base sm:text-lg text-[#737171] max-w-3xl mx-auto leading-relaxed"> {/* Responsive font size */}
            Discover the impact of A2A through the experiences of those who've witnessed
            its transformative power firsthand.
          </p>
        </div>
        
        {/* Horizontal scroll for testimonials - based on Figma node I1:3153;22657:15731 */}
        <div className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent -mx-4 sm:-mx-0 px-4 sm:px-0"> {/* Responsive spacing, negative margin for edge-to-edge scroll on mobile */}
          {testimonialsData.map((testimonial) => (
            // Card styling from Figma node I1:3153;22657:15732
            <Card key={testimonial.id} className="flex-shrink-0 w-[calc(100vw-3rem)] xs:w-[calc(100vw-5rem)] sm:w-[360px] md:w-[400px] lg:w-[459px] bg-white border border-[#C9C9C9] rounded-xl sm:rounded-2xl shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]"> {/* Responsive width & border-radius */}
              <CardContent className="p-6 sm:p-8 flex flex-col h-full"> {/* Responsive padding, ensure full height for flex-grow */}
                {/* Quote icon from Figma node I1:3153;22657:15733 */}
                <Quote className="w-8 h-8 sm:w-9 sm:h-9 text-[#C3D4D7] opacity-40 mb-4 sm:mb-6" /> {/* Responsive icon size & margin */}
                
                <p className="text-sm text-[#737171] mb-4 sm:mb-6 leading-relaxed flex-grow"> {/* Responsive margin */}
                  {testimonial.text}
                </p>
                
                {/* Author section from Figma node I1:3153;22657:15738 */}
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] rounded-full mr-3 sm:mr-4 object-cover" // Responsive avatar size & margin
                  />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-black">{testimonial.author}</p> {/* Responsive font size */}
                    {/* Company info removed as not present in Figma card */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
