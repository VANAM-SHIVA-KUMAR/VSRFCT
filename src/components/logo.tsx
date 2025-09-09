import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2 md:space-x-4">
      <Image
        src="/images/logo.jpeg"
        alt="VSRFCT Logo"
        width={120}
        height={120}
        className="h-14 w-14 md:h-20 md:w-20 rounded-full"
        data-ai-hint="logo"
      />
      <div>
        <p className="text-xl md:text-2xl font-bold font-headline text-green-300">
          Prof. V.S. Raju
        </p>
        <p className="text-sm md:text-lg font-bold font-headline text-green-300">
          Family Charitable Trust
        </p>
      </div>
    </a>
  );
}
