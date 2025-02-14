// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
