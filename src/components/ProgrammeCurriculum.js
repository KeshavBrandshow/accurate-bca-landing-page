"use client";

import Image from "next/image";
import React, { useState } from "react";

const curriculumData = [
    {
        year: "1st Year",
        title: "Coursework",
        points: ["Research Foundation", "Domain Specific Coursework", "Communication Skills"],
    },
    {
        year: "2nd Year",
        title: "Advanced Studies",
        points: ["Advanced Domain Subjects", "Research Methodology", "Industry Exposure"],
    },
    {
        year: "3rd Year",
        title: "Specialization",
        points: ["Specialized Electives", "Case Study Analysis", "Mini Project"],
    },
    {
        year: "4th Year",
        title: "Final Year",
        points: ["Major Project", "Internship / Industrial Training", "Dissertation & Viva"],
    },
];

const ProgrammeCurriculum = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Heading */}
                    <h2 className="mb-10 text-4xl font-bold text-[#0b1c3f]">Programme Curriculum</h2>

                    <div className="flex flex-col gap-14 lg:flex-row">
                        {/* LEFT CONTENT – 65% */}
                        <div className="w-full lg:w-[65%]">
                            {/* Tabs */}
                            <div className="flex w-full border-b border-gray-300">
                                {curriculumData.map((item, index) => (
                                    <button
                                        key={item.year}
                                        onClick={() => setActiveTab(index)}
                                        className={`relative flex-1 pb-4 text-center text-xl font-semibold transition-colors
                ${activeTab === index ? "text-black" : "text-gray-600 hover:text-black"}`}
                                    >
                                        {item.year}

                                        {activeTab === index && (
                                            <span className="absolute left-0 -bottom-px h-0.75 w-full bg-yellow-400"></span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="mt-10">
                                <h4 className="relative mb-4 pl-4 text-lg font-semibold">
                                    <span className="absolute left-0 top-1 h-5 w-0.75 bg-yellow-400"></span>
                                    {curriculumData[activeTab].title}
                                </h4>

                                <ul className="space-y-3 text-gray-800">
                                    {curriculumData[activeTab].points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT IMAGE – 35% */}
                        <div className="relative w-full lg:w-[35%]">
                            {/* Yellow shadow */}
                            <div className="absolute -right-3 -top-3 h-full w-full rounded-lg bg-yellow-400"></div>

                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    src="/img/diksharambh-orientation-event-collage.webp"
                                    alt="Campus"
                                    width={600}
                                    height={400}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgrammeCurriculum;
