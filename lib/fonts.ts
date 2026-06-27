import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const cormorant = localFont({
  src: [
    { path: '../public/fonts/CormorantGaramond-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/CormorantGaramond-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/CormorantGaramond-LightItalic.woff2', weight: '300', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});
