'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

export default function HomeFaq() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="faq-link" className="py-12 md:py-24 bg-card">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className={cn(
              "transition-all duration-700 ease-in-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-green-900">Frequently Asked Questions</h2>
            <p className="text-lg italic text-White-700">
              Find answers to common questions about our free tuition programme.
            </p>
          </div>
          <div
            className={cn(
              "text-center transition-all duration-700 ease-in-out delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <Link href="/faq">
                <Button size="lg">View FAQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
