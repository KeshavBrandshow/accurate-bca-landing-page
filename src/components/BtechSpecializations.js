"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const specialization = [
    { title: "Internet of Things (IoT)", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Embedded Systems", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Artificial Intelligence & ML", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Cloud Computing", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Cyber Security", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Data Analytics", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Robotics & Automation", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Industrial IoT", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Smart Manufacturing", image: "/img/diksharambh-orientation-event-collage.webp" },
    { title: "Edge Computing", image: "/img/diksharambh-orientation-event-collage.webp" },
];

const CARD_WIDTH = 260;
const GAP = 16;

const BtechSpecializations = () => {
    const sliderRef = useRef(null);
    const autoScrollRef = useRef(null);

    const scrollByOneCard = (direction = 1) => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction * (CARD_WIDTH + GAP),
            behavior: "smooth",
        });
    };

    // Auto scroll (paused on hover)
    useEffect(() => {
        autoScrollRef.current = setInterval(() => {
            scrollByOneCard(1);
        }, 3000);

        return () => clearInterval(autoScrollRef.current);
    }, []);

    const pauseAutoScroll = () => clearInterval(autoScrollRef.current);
    const resumeAutoScroll = () => {
        autoScrollRef.current = setInterval(() => {
            scrollByOneCard(1);
        }, 3000);
    };

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-extrabold text-[#0b1d3a] mb-4">B.Tech (IoT) Specializations</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={sliderRef}
                        onMouseEnter={pauseAutoScroll}
                        onMouseLeave={resumeAutoScroll}
                        className="flex gap-4 overflow-x-auto scroll-smooth
                        [&::-webkit-scrollbar]:hidden
                        [-ms-overflow-style:none]
                        [scrollbar-width:none]"
                    >
                        {specialization.map((item, index) => (
                            <div key={index} className="w-65 shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="relative h-44 w-full">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>

                                <div className="bg-green-600 text-white text-center py-3 font-semibold text-sm">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-8 mt-4">
                        <button
                            onClick={() => {
                                pauseAutoScroll();
                                scrollByOneCard(-1);
                            }}
                            className="w-12 h-12 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => {
                                pauseAutoScroll();
                                scrollByOneCard(1);
                            }}
                            className="w-12 h-12 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button className="bg-[#0b2a5b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e3a7c] transition">
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BtechSpecializations;
