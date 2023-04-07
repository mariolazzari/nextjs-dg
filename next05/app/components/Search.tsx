"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      className="flex justify-center w-50 md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 text-xl bg-white w-80 rounded-xl"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />
      <button className="p-2 ml-2 text-xl font-bold rounded-xl bg-slate-300">
        🚀
      </button>
    </form>
  );
}
