import { Navbar } from '../components/navbar';
import '../global.css';

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
}
