import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'VSRFCT Tuition Centre | Expert Tutoring for Academic Excellence',
  description: 'VSRFCT Tuition Centre offers expert Maths and Science tuition for CBSE, ICSE, and IGCSE students. Personalized learning, experienced tutors, and proven results in Hyderabad.',
  keywords: ['tuition centre', 'maths tuition', 'science tuition', 'CBSE', 'ICSE', 'IGCSE', 'Hyderabad', 'VSRFCT'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
