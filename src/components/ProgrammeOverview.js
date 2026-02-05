import React from "react";

const ProgrammeOverview = () => {
    return (
        <>
            <section className="py-6 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-4xl font-bold text-blue-950 font-serif">Programme Overview</h2>

                    <div className="mt-6 max-w-5xl space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            The Ph.D. Programme at Starex University is designed to nurture deep study, new ideas, and
                            high learning among working professionals and aspiring scholars. With a strong focus on
                            industrial collaboration and academic rigor, the programme provides an opportunity for
                            candidates to deepen their expertise, contribute original research, and create an impact in
                            their chosen domain.
                        </p>

                        <p>
                            At Starex University, research is not confined to classrooms; it thrives in collaboration
                            with industry and society. The programme fosters a vibrant research culture, encouraging
                            candidates to explore contemporary challenges, generate new knowledge, and advance practices
                            in their professional and academic fields.
                        </p>

                        <p>
                            Whether you are a{" "}
                            <strong>seasoned professional seeking strategic or consulting-level advancement</strong> or
                            an <strong>early-stage researcher driven by intellectual curiosity</strong>, the Ph.D.
                            Programme equips you with the skills, resources, and academic credentials to excel in both
                            academia and industry.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgrammeOverview;
