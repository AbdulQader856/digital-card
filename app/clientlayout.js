'use client';

import { usePathname } from 'next/navigation';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import { template } from 'lodash';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const noLayoutRoutes = ['/login', '/signup', '/checkout', '/vcard-template'];

  const showLayout = !noLayoutRoutes.includes(pathname);

  return (
    <>
      {showLayout && <Header />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}
