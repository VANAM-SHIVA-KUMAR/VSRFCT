import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-4">
      <Image
        src="/images/logo.jpeg"
        alt="VSRFCT Logo"
        width={120}
        height={120}
        className="h-20 w-20 rounded-full"
        data-ai-hint="logo"
      />
      <div>
        <p className="text-2xl font-bold text-primary font-headline">
          VS Raju Family Charitable Trust
        </p>
      </div>
    </a>
  );
}
