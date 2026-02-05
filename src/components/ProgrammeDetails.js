"use client";

import { useState } from "react";

const ProgrammeDetails = () => {
    const [activeTab, setActiveTab] = useState("fit");

    return (
        <section className="bg-white py-14">
            <div className="max-w-350 mx-auto px-6">
                {/* Tabs */}
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <button
                        onClick={() => setActiveTab("fit")}
                        className={`text-4xl font-bold py-4 relative transition flex justify-center
                            ${activeTab === "fit" ? "text-green-700" : "text-gray-900"}
                        `}
                    >
                        Programme is Best Fit For?
                        {activeTab === "fit" && (
                            <span className="absolute left-1/2 -bottom-1 h-1 w-full -translate-x-1/2 bg-green-700"></span>
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("learning")}
                        className={`text-4xl font-bold py-4 relative transition flex justify-center
                            ${activeTab === "learning" ? "text-green-700" : "text-gray-900"}
                        `}
                    >
                        Programme Learnings
                        {activeTab === "learning" && (
                            <span className="absolute left-1/2 -bottom-1 h-1 w-full -translate-x-1/2 bg-green-700"></span>
                        )}
                    </button>
                </div>

                {/* Content */}
                <div className="mt-10 text-gray-800">
                    {/* TAB 1 CONTENT */}
                    {activeTab === "fit" && (
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Ideal for passionate individuals and people from academic background, who are
                                    curious to learn, explore, research and contribute in the industry / society with
                                    advanced approaches
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Unfold the new dimension of your field with research, generate new ideas and
                                        drive socio-economic impact with research papers and as thought leader at
                                        national / international conferences
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Ideal for professionals, who want to shift their career from 9 to 5 job to academic
                                    profile
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Be a contributor to build a knowledge driven society. Shape young minds with
                                        your past industrial experience and in-depth research learning.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Designed for working professional with a desire to better understand the field and
                                    develop future insights.
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Be the source of innovation and growth in respective organisation and industry
                                    </li>
                                    <li>
                                        Earn recognition through valuable contribution in the industry and build a
                                        strong network
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* TAB 2 CONTENT */}
                    {activeTab === "learning" && (
                        <div className="space-y-8">
                            {/* Knowledge Creation & Innovation */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Knowledge Creation & Innovation
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>Develop fresh ideas, theories, and solutions.</li>
                                    <li>
                                        Transform yourself to gain the ability to think differently and bring new
                                        perspectives to your field of study.
                                    </li>
                                </ul>
                            </div>

                            {/* Research & Discovery */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Research & Discovery
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Beyond theory, conduct research supported with data and analytics. Learn how to
                                        conduct in-depth research and find meaningful insights.
                                    </li>
                                    <li>
                                        Publish and gain national / international recognition by sharing your
                                        discoveries with the academic and professional world.
                                    </li>
                                    <li>Build credibility and recognition by contributing new ideas and solutions.</li>
                                </ul>
                            </div>

                            {/* Ethical & Social Understanding */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Ethical & Social Understanding
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Understand how society, law, environment, technology, and economics impact
                                        organisations and decision-making.
                                    </li>
                                </ul>
                            </div>

                            {/* Communication & Influence */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Communication & Influence
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>Improve written and verbal communication skills.</li>
                                    <li>
                                        Learn how to prepare reports and present ideas clearly, leading to informed
                                        decision-making.
                                    </li>
                                </ul>
                            </div>

                            {/* Advanced Research Skills */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Advanced Research Skills
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Learn how to study existing research, identify knowledge gaps, and create
                                        impactful research questions.
                                    </li>
                                    <li>
                                        Use different research methods to collect, analyse, and interpret data
                                        effectively.
                                    </li>
                                    <li>Develop critical and analytical thinking to solve complex problems.</li>
                                    <li>
                                        Master statistical and research tools to handle both quantitative and
                                        qualitative insights.
                                    </li>
                                    <li>
                                        Use technology effectively — including spreadsheets, research tools, online
                                        platforms, and communication software.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProgrammeDetails;
