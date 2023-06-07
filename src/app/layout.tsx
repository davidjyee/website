import './globals.css';
import { Inter } from 'next/font/google';

import { Providers } from './providers';
import { Header } from '../components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `David's Personal Website`,
  description: `The personal website of David Yee`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};
