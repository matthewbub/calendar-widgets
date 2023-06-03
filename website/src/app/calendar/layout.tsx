import '../globals.css';
import '../prism.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Calendar Widgets',
  description: 'Craft beautifully robust date components in React.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='mx-auto max-w-2xl'>{children}</main>
      </body>
    </html>
  );
}
