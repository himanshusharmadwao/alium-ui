import { Albert_Sans } from 'next/font/google'

import '@/styles/global.css'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeaderMobileWrapper from "@/components/wrapper/layout/headerMobile";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weights: ['400', '500', '700'],
})


export const metadata = {
  title: "Alium",
  description: "Alium helps teams uncover the 'why' behind customer decisions through intelligent surveys, real-time insights, and data-driven feedback analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.className}>
      <body>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <Header />
        </div>

        {/* Mobile Header */}
        <HeaderMobileWrapper />

        {children}
        <Footer />
      </body>
    </html>
  );
}
