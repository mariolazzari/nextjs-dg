import { addTodo } from "@/lib/actions";

export default function AddTodo() {
  const content = (
    <form action={addTodo} className="flex items-center gap-2">
      <input
        type="text"
        name="title"
        className="flex-grow w-full p-1 text-2xl rounded-lg"
        placeholder="New Todo"
        autoFocus
      />

      <button
        type="submit"
        className="max-w-xs p-2 text-xl text-black bg-green-500 border-2 border-black border-solid rounded-2xl hover:cursor-pointer hover:bg-green-400"
      >
        Submit
      </button>
    </form>
  );

  return content;
}
