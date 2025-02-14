// src/app/layout.tsx
import './globals.css';
import Menu from '../app/components/Menu';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#f9f9f9]">
        <Menu />
        {children}
      </body>
    </html>
  );
}
