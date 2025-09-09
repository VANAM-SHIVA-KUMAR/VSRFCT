"use client"

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Define the type for the Vanta effect
type VantaEffect = {
  destroy: () => void;
  // Add other methods if needed
};

// Define the type for the Vanta function
type VantaFunction = (options: {
    el: HTMLElement | null;
    THREE: typeof THREE;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    birdSize?: number;
    wingSpan?: number;
    speedLimit?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
}) => VantaEffect;


export default function Cta() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;
    if (isInView && vantaRef.current) {
        Promise.all([
            import('three'),
            import('vanta/dist/vanta.birds.min.js')
        ]).then(([three, vanta]) => {
            const THREE_IMPORT = three.default || three;
            const BIRDS = (vanta.default || vanta) as VantaFunction;
            if (!vantaEffect) {
                effect = BIRDS({
                    el: vantaRef.current,
                    THREE: THREE_IMPORT,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    backgroundColor: 0x1e3a8a, // primary color
                    color1: 0xffc107, // accent color
                    color2: 0x155799,
                    quantity: 3.00,
                });
                setVantaEffect(effect);
            }
        })
    }
    return () => {
      if (effect) effect.destroy();
    }
  }, [isInView]);

  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div 
          ref={vantaRef}
          className={cn(
            "text-primary-foreground rounded-lg p-8 md:p-16 text-center shadow-lg transition-all duration-700 ease-in-out relative overflow-hidden min-h-[500px] md:min-h-[400px] flex flex-col justify-center",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Ready to Give Your Child a Brighter Future?</h2>
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
