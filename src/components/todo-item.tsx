import { Todo } from "@/lib/types";
import React from "react";
import TodoCheck from "./todos/todo-check";
import TodoDelete from "./todos/todo-delete";
import TodoEdit from "./todos/todo-edit";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const id = todo.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex flex-wrap items-center px-2 py-1 my-1 space-x-1"
    >
      <TodoCheck todo={todo} />
      <p
        className={`${
          todo.completed && "line-through"
        } pl-2 mr-auto grow text-slate-600 dark:text-slate-300`}
      >
        {todo.text}
      </p>
      <TodoEdit todo={todo} />
      <TodoDelete id={todo.id} />
    </div>
  );
};

export default TodoItem;
