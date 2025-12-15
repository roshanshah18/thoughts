import '../global.css';

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="font-mono">{children}</main>
    </>
  );
}
