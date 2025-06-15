
import { Users, UsersRound, DollarSign } from "lucide-react"; // Using generic icons
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StatsSection = () => {
  const stats = [
    {
      id: "patient-activation",
      title: "O2O Patient Activation",
      description: "The Engage Suite improves patient access to the right treatment, at the right time. AI-powered symptom checker, identifies at-risk patients anonymously and supports patients with personalized educational content.",
      icon: Users, 
      iconBgColor: "bg-blue-100", 
      textColor: "text-black",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      id: "hcp-engagement",
      title: "HCP Network Engagement & Digital Referral Management",
      description: "Amplify your brand's influence and drive tangible results with Engage Suite. We begin by casting a wide net to elevate your brand's visibility among HCPs and facilitates digital referral, ensuring patients with concerning symptoms are escalated efficiently and appropriately, whether through GPs, specialists, or medical tourism channels.",
      icon: UsersRound, 
      iconBgColor: "bg-green-100",
      textColor: "text-black",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      id: "captive-advertising",
      title: "Healthcare-specific Captive Media",
      description: "Revolutionize your marketing spend by leveraging the Engage suite. It delivers targeted, in-clinic messaging that drives patient awareness to action, while achieving over 50% in cost savings compared to conventional marketing approaches.",
      icon: DollarSign, 
      iconBgColor: "bg-purple-100",
      textColor: "text-black",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    }
  ];

  return (
    <section className="py-20 bg-white"> {/* Removed gradient, plain white background */}
      <div className="max-w-[1440px] mx-auto px-[158px] flex flex-col md:flex-row items-start gap-16"> {/* items-start to align columns at top */}
        
        {/* Left Column: Text and Button */}
        <div className="md:w-2/5 text-left">
          <h2 className="font-roboto text-[32px] font-semibold text-black mb-6 leading-tight"> {/* Added font-roboto */}
            The <span className="bg-gradient-to-r from-[#00B5D5] to-[#1B4A52] text-transparent bg-clip-text">O2O</span> Advantage:
            <br />
            How We Build Meaningful Patient and HCP conversations
          </h2>
          <p className="font-lexend text-lg font-medium text-[#737171] mb-8 leading-[26px]"> {/* Added font-lexend, Re-added paragraph with Figma styles */}
            Engage Suite is at the heart of our O2O strategy, a powerful framework designed to unify Patient, HCP, and brand engagement into a measurable, scalable ecosystem
          </p>
          <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-11 w-[164px] mt-4"> {/* Adjusted margin top for button */}
            Get in Touch
          </Button>
        </div>
        
        {/* Right Column: Stats Cards */}
        <div className="md:w-3/5 grid md:grid-cols-1 lg:grid-cols-1 gap-8"> {/* Changed to single column for cards, increased gap */}
          {stats.map((stat) => (
            <Card 
              key={stat.id} 
              className={`rounded-2xl shadow-lg border ${stat.borderColor} ${stat.bgColor} ${stat.textColor} flex flex-col p-6`} // Simplified shadow, consistent padding
            >
              <CardContent className="flex flex-col items-start text-left gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.iconBgColor} mb-3`}> {/* Larger icon, rounded-lg */}
                  <stat.icon className={`h-6 w-6 text-gray-700`} /> {/* Consistent icon color */}
                </div>
                
                <div className={`font-lexend text-2xl font-medium leading-[30px] ${stat.textColor}`}> {/* Added font-lexend, Updated font size, weight, line height */}
                  {stat.title}
                </div>
                                
                <p className={`font-manrope text-sm font-medium text-[#737171] leading-[20px]`}> {/* Added font-manrope, Updated font size, weight, color, line height */}
                  {stat.description}
                </p>
                {stat.id === "captive-advertising" && (
                  <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-6 py-2 text-sm font-semibold rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] h-9 w-auto mt-4">
                    Get in Touch
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
