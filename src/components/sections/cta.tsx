"use client"

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';

type VantaEffect = {
  destroy: () => void;
};

export default function Cta() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    let effect: VantaEffect | null = null;
    if (isInView && vantaRef.current) {
        Promise.all([
            import('three'),
            import('vanta/dist/vanta.birds.min.js')
        ]).then(([THREE, VANTA]) => {
            const VantaBirds = (VANTA as any).default || VANTA;
            if (!vantaEffect) {
                effect = VantaBirds({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    backgroundColor: 0x115e59, // Dark green-teal
                    color1: 0xfacc15, // accent yellow
                    color2: 0xf0fdf4, // light green-white
                    quantity: 3.00,
                });
                setVantaEffect(effect);
            }
        }).catch(err => console.error("Vanta loading failed:", err));
    }
    return () => {
        if (vantaEffect) {
            vantaEffect.destroy();
        }
    }
  }, [isInView, vantaEffect]);


  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={vantaRef}
          className={cn(
            "text-primary-foreground rounded-lg p-8 md:p-16 text-center shadow-lg transition-all duration-700 ease-in-out relative overflow-hidden min-h-[500px] md:min-h-[400px] flex flex-col justify-center",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <div ref={ref} className="relative z-10">
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
