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
        <p className="text-2xl font-bold font-headline">
          <span className="text-green-900">VS Raju</span> <span className="text-green-700">Family Charitable Trust</span>
        </p>
      </div>
    </a>
  );
}
