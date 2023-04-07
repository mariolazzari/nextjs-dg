import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex flex-col justify-between p-4 bg-slate-600 md:flex-row drop-shadow-xl">
      <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
    </nav>
  );
}
