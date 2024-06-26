import React from "react";
import { Todo } from "@/lib/types";
import { Checkbox } from "../ui/checkbox";
import useTodos from "@/hooks/use-todo";

interface Props {
  todo: Todo;
}

const TodoCheck = ({ todo }: Props) => {
  const todos = useTodos();

  const handleCheckTodo = () => {
    todos.checkTodo(todo.id);
  };

  return (
    <Checkbox
      checked={todo.completed}
      onClick={handleCheckTodo}
      className="border-slate-400"
    />
  );
};

export default TodoCheck;
