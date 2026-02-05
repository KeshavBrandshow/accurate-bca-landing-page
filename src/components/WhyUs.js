import React from "react";
import {
  FileText,
  BookOpenCheck,
  Building2,
  Users,
  Headset,
  Hotel,
  Library,
  ClipboardCheck,
  FlaskConical,
  Mic2,
  UserRoundCog,
  MessageCircle,
  BadgeCheck,
  UserStar,
  Presentation,
  Briefcase,
} from "lucide-react";

const features = [
  { icon: FileText, text: "Industry Relevant Curriculum" },
  { icon: BookOpenCheck, text: "Case Based Learning" },
  { icon: Building2, text: "Holistic Training Infrastructure" },
  { icon: Users, text: "Discussion Forums" },
  { icon: Headset, text: "24×7 Web Support" },
  { icon: Hotel, text: "Hostel Accommodation" },
  { icon: Library, text: "Digital Library" },
  { icon: ClipboardCheck, text: "Regular Assessments" },
  { icon: FlaskConical, text: "State of the Art Labs" },
  { icon: Mic2, text: "Guest Speakers & Industry Leaders" },
  { icon: UserRoundCog, text: "Regular Counselling Sessions" },
  { icon: MessageCircle, text: "Open Learning with Faculty" },
  { icon: BadgeCheck, text: "UGC Approved Degree Programme" },
  { icon: UserStar, text: "Distinguished Faculty" },
  { icon: Presentation, text: "Interactive Classes" },
  { icon: Briefcase, text: "Employment Driven Education" },
];

const WhyUs = () => {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="mx-auto max-w-350 px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-7">
          <h2 className="text-4xl font-bold text-blue-950 font-serif">
            Why Starex University?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 border border-yellow-200 group-hover:bg-blue-950 transition">
                  <Icon className="h-6 w-6 text-blue-950 group-hover:text-white transition" />
                </div>

                <p className="text-base font-semibold text-gray-900 leading-snug">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
