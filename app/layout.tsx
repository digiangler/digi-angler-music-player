import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices';
import getSongsByUserId from '@/actions/getSongsByUserId';
import Player from '@/components/Player';
import Sidebar from '@/components/Sidebar';
import ModalProvider from '@/providers/ModalProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import UserProvider from '@/providers/UserProvider';

import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

import './globals.css';

const font = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digi-Angler Music Player',
  description: 'Listen to music from Digi-Angler',
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="jp">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
