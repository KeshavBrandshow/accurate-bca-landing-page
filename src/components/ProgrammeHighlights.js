"use client";

import React, { useEffect, useRef } from "react";
import {
    BookOpen,
    FileCheck2,
    Briefcase,
    GraduationCap,
    Users,
    Building2,
    FlaskConical,
    Globe,
    Award,
    TrendingUp,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

/* ===== HIGHLIGHTS DATA ===== */
const highlights = [
    {
        icon: BookOpen,
        title: "Focused Learners Finish Faster",
        description:
            "The maximum tenure of the programme is 6 years; however, focused learners can complete the doctorate journey in as little as 3 years.",
    },
    {
        icon: FileCheck2,
        title: "UGC Approved Degree",
        description:
            "Earn a valid and UGC-approved PhD degree recognized by the Government of India, statutory bodies, and universities.",
    },
    {
        icon: Briefcase,
        title: "Careers Beyond Academia",
        description:
            "A PhD opens opportunities in government jobs, R&D labs, think tanks, policy-making, consulting, and industry research.",
    },
    {
        icon: GraduationCap,
        title: "Eligibility for Academic Careers",
        description:
            "A UGC-approved PhD is mandatory for roles such as Professors, Assistant Professors, and academic researchers.",
    },
    {
        icon: Users,
        title: "Expert Faculty Mentorship",
        description: "Receive continuous guidance from experienced faculty members and dedicated research supervisors.",
    },
    {
        icon: Building2,
        title: "Industry Collaboration",
        description:
            "Work on industry-linked research projects that address real-world challenges and practical applications.",
    },
    {
        icon: FlaskConical,
        title: "Advanced Research Infrastructure",
        description: "Access modern laboratories, research centers, digital libraries, and analytical research tools.",
    },
    {
        icon: Globe,
        title: "Interdisciplinary Research",
        description:
            "Explore interdisciplinary research opportunities that encourage innovation and holistic problem-solving.",
    },
    {
        icon: Award,
        title: "Enhanced Professional Credibility",
        description:
            "Strengthen your professional profile and establish authority in your domain with a doctoral qualification.",
    },
    {
        icon: TrendingUp,
        title: "Long-Term Career Growth",
        description:
            "Develop advanced analytical, leadership, and research skills that support sustained career progression.",
    },
];

const ProgrammeHighlights = () => {
    const sliderRef = useRef(null);

    const scrollByCard = (direction = "right") => {
        const slider = sliderRef.current;
        if (!slider) return;

        const cardWidth = slider.children[0].offsetWidth + 24;
        slider.scrollBy({
            left: direction === "right" ? cardWidth : -cardWidth,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            const cardWidth = slider.children[0].offsetWidth + 24;
            const maxScroll = slider.scrollWidth - slider.clientWidth;

            if (slider.scrollLeft >= maxScroll) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-6 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-4xl font-bold text-blue-950 font-serif">Programme Highlights</h2>

                {/* SLIDER */}
                <div className="relative mt-4">
                    <div
                        ref={sliderRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="min-w-75 rounded-2xl bg-blue-950 p-6 text-white">
                                    <Icon className="h-10 w-10 mb-6" />
                                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-blue-100">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* ARROWS */}
                    <div className="mt-4 flex justify-center gap-4">
                        <button
                            onClick={() => scrollByCard("left")}
                            className="rounded-full border border-blue-950 p-2 text-blue-950 hover:bg-blue-950 hover:text-white transition"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        
                        <button
                            onClick={() => scrollByCard("right")}
                            className="rounded-full border border-blue-950 p-2 text-blue-950 hover:bg-blue-950 hover:text-white transition"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeHighlights;
