import { pressStartFont } from './components/font/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css"
        />
      </head>
      <body className={` ${pressStartFont.className} thought-body`}>
        {children}
      </body>
    </html>
  );
}
