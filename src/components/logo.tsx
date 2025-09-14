import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'default' | 'dark';
};

export function Logo({ variant = 'default' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-primary-foreground' : 'text-primary';
  return (
    <a href="/" className="flex items-center space-x-2 md:space-x-4">
      <Image
        src="/images/logo.jpeg"
        alt="VSRFCT Logo"
        width={120}
        height={120}
        className="h-14 w-14 md:h-16 md:w-16 rounded-full"
        data-ai-hint="logo"
      />
      <div>
        <p className={cn("text-xl md:text-2xl font-bold font-headline", textColor)}>
          Prof. V.S. Raju
        </p>
        <p className={cn("text-sm md:text-lg font-bold font-headline", textColor)}>
          Family Charitable Trust
        </p>
      </div>
    </a>
  );
}
