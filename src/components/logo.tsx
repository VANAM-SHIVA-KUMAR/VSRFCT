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
        width={240}
        height={240}
        className="h-20 w-20 md:h-24 md:w-24 rounded-full"
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
