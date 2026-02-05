const EligibilityCriteria = () => {
    return (
        <>
            <section className="bg-[#f5f8ff]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                        {/* LEFT CARD */}
                        <div className="lg:col-span-2 bg-linear-to-br from-[#0b132b] to-[#0b1d3a] text-white rounded-[36px] p-10 shadow-xl">
                            {/* Heading */}
                            <h2 className="text-4xl font-bold mb-10">
                                Eligibility <span className="text-blue-400">Criteria</span>
                            </h2>

                            {/* Criteria List */}
                            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-200">
                                <div className="flex gap-4">
                                    <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                    <p>Bachelor's degree in any discipline from a recognized university</p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                    <p>Minimum 50% aggregate marks (45% for SC/ST candidates)</p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                    <p>Valid score in CAT / MAT / CMAT / XAT or institutional entrance test</p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                    <p>Work experience is preferred but not mandatory</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-10 h-px bg-white/10"></div>

                            {/* Footer Info */}
                            <div className="flex flex-wrap gap-10 text-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                        📅
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">LAST DATE TO APPLY</p>
                                        <p className="font-semibold">30th June 2026</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                        ₹
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">APPLICATION FEE</p>
                                        <p className="font-semibold">₹1,100/-</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="bg-blue-600 rounded-[36px] p-10 text-white shadow-xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">Start Your Journey</h3>

                                <p className="text-blue-100 text-sm leading-relaxed">
                                    Take the first step towards a successful career in Computer Applications. Our
                                    admissions team is here to guide you.
                                </p>
                            </div>

                            <button className="mt-10 bg-white text-blue-600 font-semibold py-4 rounded-full hover:bg-blue-50 transition">
                                Apply Online Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EligibilityCriteria;
