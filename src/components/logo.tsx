import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <GraduationCap className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline text-foreground">
        VSRFCT
      </span>
    </a>
  );
}
