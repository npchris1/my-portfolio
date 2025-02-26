import './globals.css';
import NavBar from '@/components/Navigation/NavBar';
import LeftSide from '@/components/UI/LeftSide';
import RightSide from '@/components/UI/RightSide';

export const metadata = {
  title: 'BeraTrade',
  description: 'My portfolio',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bodyColor overflow-x-hidden">
        <NavBar />
        <LeftSide />
        <RightSide />
        <section className="w-full h-full min-h-[90vh] flex font-bodyFont">
          {children}
        </section>
      </body>
    </html>
  );
}
