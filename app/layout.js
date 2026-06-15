import './globals.css';

export const metadata = {
  title: 'WYT — Construction & Fine Finishes',
  description: 'WYT delivers turnkey construction, interior finishing and fit-out for high-end commercial and residential spaces. Built to the millimetre.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
