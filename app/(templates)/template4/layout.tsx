import './global.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-[#1f2028] bg-white antialiased min-h-screen flex flex-col">
        <Providers>
          <main className="">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
