import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Next Todos",
  description: "Created for Server Actions practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="max-w-xl min-h-screen p-4 mx-auto text-black bg-stone-200">
          {children}
        </main>
      </body>
    </html>
  );
}
