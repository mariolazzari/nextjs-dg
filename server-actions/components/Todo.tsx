import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { deleteTodo } from "@/lib/actions";
import UpdateCheckbox from "./UpdateCheckbox";

export default function Todo(todo: Todo) {
  return (
    <form className="flex items-center justify-between my-4">
      <label htmlFor="completed" className="text-2xl hover:underline">
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>

      <div className="flex items-center gap-4">
        <UpdateCheckbox todo={todo} />

        <button
          formAction={async () => {
            "use server";
            await deleteTodo(todo);
          }}
          className="max-w-xs p-3 text-xl text-black bg-red-400 border-2 border-black border-solid rounded-2xl hover:cursor-pointer hover:bg-red-300"
        >
          <FaTrash />
        </button>
      </div>
    </form>
  );
}
