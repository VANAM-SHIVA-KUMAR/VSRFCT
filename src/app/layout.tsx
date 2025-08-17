import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'VSRFCT Tuition Centre – A Free Learning Initiative by V.S. Raju Family Charitable Trust',
  description: 'VSRFCT Tuition Centre offers free, quality education for Government School children (State Syllabus, Classes 1–10). A non-profit initiative by the V.S. Raju Family Charitable Trust.',
  keywords: ['free tuition', 'tuition centre', 'VSRFCT', 'V.S. Raju', 'non-profit education', 'state syllabus', 'government school'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
