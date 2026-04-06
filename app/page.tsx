"use client";

import { useState, useRef, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import PeopleWeHelpSection from "@/components/home/PeopleWeHelpSection";
import WorkingProcessSection from "@/components/home/WorkingProcessSection";
import AttorneysSection from "@/components/home/AttorneysSection";
import ContactSection from "@/components/home/ContactSection";
import AppointmentModal from "@/components/home/AppointmentModal";
import { SectionRefsContext, SectionKey } from "@/context/SectionRefsContext";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionMapRef = useRef<Partial<Record<SectionKey, HTMLElement>>>({});

  const register = useCallback(
    (key: SectionKey) => (el: HTMLElement | null) => {
      if (el) sectionMapRef.current[key] = el;
    },
    []
  );

  return (
    <SectionRefsContext.Provider value={sectionMapRef}>
      <Navbar />
      <main>
        <section ref={register("home")}>
          <HeroSlider onAppointmentClick={() => setIsModalOpen(true)} />
        </section>
        <section ref={register("practice")}>
          <ServicesSection />
        </section>
        <section ref={register("about")}>
          <AboutSection />
        </section>
        <StatsSection />
        <PeopleWeHelpSection />
        <WorkingProcessSection />
        <section ref={register("attorneys")}>
          <AttorneysSection />
        </section>
        <section ref={register("contact")}>
          <ContactSection />
        </section>
      </main>
      <Footer />
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </SectionRefsContext.Provider>
  );
}
