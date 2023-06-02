import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 p-4 bg-slate-600 drop-shadow-xl">
      <div className="flex justify-between max-w-xl mx-auto sm:px-4">
        <h1 className="mb-0 text-3xl font-bold">
          <Link
            href="/"
            className="no-underline text-white/90 hover:text-white"
          >
            Next Todos
          </Link>
        </h1>
      </div>
    </nav>
  );
}
