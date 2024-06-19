import Navbar from '@/components/AllTemplates/template4/components/Navbar';
import './global.css';
import { Providers } from './providers';
import Footer from '@/components/AllTemplates/template4/components/Footer';
export default function RootLayout({

  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-[#1f2028] bg-white antialiased min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-[6vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
