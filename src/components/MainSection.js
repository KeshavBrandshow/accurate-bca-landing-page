import React from "react";

const MainSection = () => {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden">
            {/* BACKGROUND VIDEO */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/accurate-video.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-900/60 to-blue-800/40" />

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[90vh] items-center">
                <div className="mx-auto max-w-7xl px-6 w-full">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-2 text-white">
                            <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-black">
                                Admissions Open
                            </span>

                            <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                                B.Tech Programme
                            </h1>

                            <p className="mt-3 text-lg text-gray-200">
                                Accurate Institute of Management & Technology – Industry-Focused Engineering Education
                            </p>

                            {/* INFO CARDS */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    ["Programme Duration", "4 Years"],
                                    ["Approval", "AICTE Approved"],
                                    ["Specialisations", "CSE, ME, CE, ECE, EE"],
                                    ["Eligibility", "10+2 with PCM (as per norms)"],
                                ].map(([title, value]) => (
                                    <div
                                        key={title}
                                        className="rounded-xl bg-white/10 backdrop-blur-md p-5 border border-white/20"
                                    >
                                        <p className="text-sm font-semibold text-gray-300">{title}</p>
                                        <p className="mt-1 text-base font-medium">{value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* ADMISSION INFO */}
                            <div className="mt-8 max-w-sm overflow-hidden rounded-xl border border-white/20">
                                <div className="bg-yellow-400 py-3 text-center font-semibold text-black">
                                    B.Tech Admissions
                                </div>
                                <div className="bg-white py-3 text-center font-medium text-gray-800">
                                    Apply Early for Better Opportunities
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="rounded-2xl bg-white p-3 shadow-2xl">
                            <div className="rounded-xl bg-green-600 p-2 text-white">
                                <h3 className="text-xl font-semibold">Talk To An Expert</h3>
                                <p className="text-sm opacity-90">Get guidance for B.Tech admissions</p>
                            </div>

                            <form className="mt-6 space-y-4 text-gray-400">
                                <input className="w-full rounded-md border px-4 py-3 text-sm" placeholder="Name*" />
                                <input className="w-full rounded-md border px-4 py-3 text-sm" placeholder="Email*" />
                                <input className="w-full rounded-md border px-4 py-3 text-sm" placeholder="Phone*" />

                                <select className="w-full rounded-md border px-4 py-3 text-sm">
                                    <option>Select B.Tech Branch</option>
                                    <option>Computer Science Engineering</option>
                                    <option>Mechanical Engineering</option>
                                    <option>Civil Engineering</option>
                                    <option>Electronics & Communication</option>
                                    <option>Electrical Engineering</option>
                                </select>

                                <select className="w-full rounded-md border px-4 py-3 text-sm">
                                    <option>12th Board</option>
                                    <option>CBSE</option>
                                    <option>ICSE</option>
                                    <option>State Board</option>
                                </select>

                                <select className="w-full rounded-md border px-4 py-3 text-sm">
                                    <option>12th PCM Percentage</option>
                                    <option>Above 90%</option>
                                    <option>75% - 90%</option>
                                    <option>60% - 75%</option>
                                    <option>Below 60%</option>
                                </select>

                                <label className="flex gap-2 text-xs text-gray-600">
                                    <input type="checkbox" className="mt-1" />I consent to receive
                                    calls/SMS/WhatsApp/email regarding my enquiry
                                </label>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-500"
                                >
                                    Apply for B.Tech Counselling
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
