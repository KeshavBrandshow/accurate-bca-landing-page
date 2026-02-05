import Image from "next/image";
import React from "react";

const accreditations = [
    { src: "/img/accreditations/aicte-logo.webp", alt: "AICTE" },
    { src: "/img/accreditations/ccsu-logo.webp", alt: "CCSU" },
    { src: "/img/accreditations/iso.webp", alt: "ISO" },
    { src: "/img/accreditations/naac-logo.webp", alt: "NAAC" },
];

const Accreditation = () => {
    return (
        <>
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="rounded-3xl bg-yellow-400 px-8 py-4">
                        {/* Heading */}
                        <h2 className="mb-6 text-3xl font-bold text-blue-950">Accreditations</h2>

                        {/* Logos */}
                        <div className="grid grid-cols-4 gap-6">
                            {accreditations.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-sm"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={90}
                                        height={90}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Accreditation;
