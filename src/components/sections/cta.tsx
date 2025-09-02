"use client"

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';


export default function Cta() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0x0, // background color
        skyColor: 0x1d2a58, // cloud color
        cloudColor: 0x4a71c8, // accent color
        cloudShadowColor: 0x1d2a58, // shadow color
        sunColor: 0xffc400,
        sunGlareColor: 0xffa700,
        sunlightColor: 0xffa700,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div 
          ref={vantaRef}
          className={cn(
            "text-primary-foreground rounded-lg p-8 md:p-16 text-center shadow-lg transition-all duration-700 ease-in-out relative overflow-hidden",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Ready to Give Your Child a Brighter Future?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Admissions are open for Government School children (Classes 1–10, State Syllabus). Join our non-profit initiative for free, high-quality tuition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="#faq">Enroll Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/gallery">Learn More</Link>
                </Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
