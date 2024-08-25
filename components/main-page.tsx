"use client";

import { useEffect, useRef } from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";
import { cn } from "@/lib/utils";
import WhoAmI from "./lp-sections/whoami";
import Skills from "./lp-sections/skills";
import Achievements from "./lp-sections/achievements";

const MainPage = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!pageRef.current) return;
      const { clientX, clientY } = ev;
      pageRef.current.style.setProperty("--x", `${clientX}px`);
      pageRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (min-width: 1024px) {
            .gradient-track {
              background-image: radial-gradient(
                circle farthest-side at var(--x, 25px) var(--y, 25px),
                #1250aa 0%,
                transparent 100%
              );
            }
          }
        `}
      </style>
      <main ref={pageRef} className={cn("max-w-5xl mx-auto")}>
        <Navbar />
        <HeroSection />
        <WhoAmI />
        <Skills />
        <Achievements />
        <div className="pb-20 max-w-xl"></div>
      </main>
    </>
  );
};

export default MainPage;
