"use client"

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';
import type * as THREE from 'three';

// Define the type for the Vanta effect
type VantaEffect = {
  destroy: () => void;
};

// Define the type for the Vanta Clouds function
type VantaClouds = {
  (options: {
    el: HTMLElement | null;
    THREE: typeof THREE;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    backgroundColor: number;
    skyColor: number;
    cloudColor: number;
    cloudShadowColor: number;
    sunColor: number;
    sunGlareColor: number;
    sunlightColor: number;
  }): VantaEffect;
};

export default function Cta() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;
    if (vantaRef.current) {
      // Dynamically import dependencies
      Promise.all([
        import('three'),
        import('vanta/dist/vanta.clouds.min.js')
      ]).then(([three, vanta]) => {
        const THREE = three.default;
        const CLOUDS = (vanta.default || vanta) as VantaClouds;
        if (!vantaEffect) {
          effect = CLOUDS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0x0,
            skyColor: 0x1d2a58,
            cloudColor: 0x4a71c8,
            cloudShadowColor: 0x1d2a58,
            sunColor: 0xffc400,
            sunGlareColor: 0xffa700,
            sunlightColor: 0xffa700,
          });
          setVantaEffect(effect);
        }
      });
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
            "text-primary-foreground rounded-lg p-8 md:p-16 text-center shadow-lg transition-all duration-700 ease-in-out relative overflow-hidden min-h-[400px] flex flex-col justify-center",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-green-100">Ready to Give Your Child a Brighter Future?</h2>
            <p className="text-lg md:text-xl text-green-300 mb-8 max-w-3xl mx-auto">
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
