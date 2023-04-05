import "./globals.css";

export const metadata = {
  title: "NextJS 02",
  description:
    "Next.js Pages, Layout, Links, Routes & Loading | Next.js 13 tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>my site</h1>
        </nav>

        {children}
      </body>
    </html>
  );
}
