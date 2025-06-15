
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
    <section className="py-20 bg-gradient-radial from-[#FFEFE1] to-[rgba(255,255,255,0)]">
      <div className="max-w-[1440px] mx-auto px-[158px]"> {/* Adjusted padding and max-width */}
        <div className="text-center mb-12"> {/* Spacing from Figma node 1:3150 */}
          <h2 className="text-[32px] font-medium text-black mb-6"> {/* Text style from Figma node 1:3151 */}
            Success Speaks for Itself
          </h2>
          <p className="text-lg text-[#737171] max-w-3xl mx-auto"> {/* Text style from Figma node 1:3152 */}
            Discover the impact of A2A through the experiences of those who've witnessed
            its transformative power firsthand.
          </p>
        </div>
        
        {/* Horizontal scroll for testimonials - based on Figma node I1:3153;22657:15731 */}
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {testimonialsData.map((testimonial) => (
            // Card styling from Figma node I1:3153;22657:15732
            <Card key={testimonial.id} className="flex-shrink-0 w-[459px] bg-white border border-[#C9C9C9] rounded-2xl shadow-[0px_1px_60px_0px_rgba(0,0,0,0.05)]">
              <CardContent className="p-8 flex flex-col">
                {/* Quote icon from Figma node I1:3153;22657:15733 */}
                <Quote className="w-9 h-9 text-[#C3D4D7] opacity-40 mb-6" /> 
                
                <p className="text-sm text-[#737171] mb-6 leading-relaxed flex-grow"> {/* Text style from Figma node I1:3153;22657:15737 */}
                  {testimonial.text}
                </p>
                
                {/* Author section from Figma node I1:3153;22657:15738 */}
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-[50px] h-[50px] rounded-full mr-4 object-cover" // Avatar from Figma node I1:3153;22657:15739
                  />
                  <div>
                    <p className="font-semibold text-base text-black">{testimonial.author}</p> {/* Text style from Figma node I1:3153;22657:15740 */}
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
