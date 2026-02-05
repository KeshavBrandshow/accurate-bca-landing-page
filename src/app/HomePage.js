import React from "react";
import MainSection from "@/components/MainSection";
import Accreditation from "@/components/Accreditation";
import ProgrammeOverview from "@/components/ProgrammeOverview";
import ProgrammeHighlights from "@/components/ProgrammeHighlights";
import WhyUs from "@/components/WhyUs";
import ProgrammeCurriculum from "@/components/ProgrammeCurriculum";
import BtechSpecializations from "@/components/BtechSpecializations";
import ProgrammeDetails from "@/components/ProgrammeDetails";
import AdmissionProcess from "@/components/AdmissionProcess";
import OurRecruiters from "@/components/OurRecruiters";
import EligibilityCriteria from "@/components/EligibilityCriteria";

export default function HomePage() {
    return (
        <>
            <MainSection />
            <Accreditation />
            <ProgrammeOverview />
            <ProgrammeHighlights />
            <WhyUs />
            <ProgrammeCurriculum />
            <BtechSpecializations />
            <ProgrammeDetails />
            <AdmissionProcess />
            <EligibilityCriteria />
            <OurRecruiters />
        </>
    );
}
