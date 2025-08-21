
"use client"

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';

const stats = [
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 10, label: "Classes Covered", suffix: "" },
  { value: 100, label: "Students Passed", suffix: "%" },
  { value: 750, label: "Happy Students", suffix: "+" },
]

function Counter({ to, duration = 2000, suffix = '' }: { to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;

    // A higher frame rate for smoother animation
    const frameRate = 60; // fps
    const totalFrames = duration / (1000 / frameRate);
    const increment = end / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [to, duration]);

  return (
    <span className="text-5xl md:text-7xl font-bold font-headline text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, isInView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg">
              {isInView ? <Counter to={stat.value} suffix={stat.suffix} /> : 
                <span className="text-5xl md:text-7xl font-bold font-headline text-primary">0{stat.suffix}</span>
              }
              <p className="mt-2 text-lg md:text-xl text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
