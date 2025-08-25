import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <GraduationCap className="h-10 w-10 text-primary" />
      <div>
        <span className="text-2xl font-bold font-headline text-foreground">
          VSRFCT
        </span>
        <p className="text-xs text-muted-foreground font-medium">
          VS Raju Family Charitable Trust
        </p>
      </div>
    </a>
  );
}
