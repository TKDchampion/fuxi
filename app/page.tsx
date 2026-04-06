"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import PeopleWeHelpSection from "@/components/home/PeopleWeHelpSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";
import AttorneysSection from "@/components/home/AttorneysSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ContactSection from "@/components/home/ContactSection";
import AppointmentModal from "@/components/home/AppointmentModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <HeroSlider onAppointmentClick={() => setIsModalOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <PeopleWeHelpSection />
        <TestimonialsSection />
        <WorkingProcessSection />
        <AttorneysSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
