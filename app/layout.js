export const metadata = {
  title: "ALFAXMS",
  description: "ALFAXMS website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
