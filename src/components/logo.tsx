import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <Image
        src="/images/logo.jpeg"
        alt="VSRFCT Logo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        data-ai-hint="logo"
      />
      <div>
        <p className="text-lg font-bold text-primary font-headline">
          VS Raju Family Charitable Trust
        </p>
      </div>
    </a>
  );
}
