import React from "react";
import { Todo } from "@/lib/types";
import { editTodo } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { useKeyContext } from "@/contexts/key-context";

interface Props {
  todo: Todo;
}

const TodoCheck = ({ todo }: Props) => {
  const { incrementKey } = useKeyContext();

  const handleCheckTodo = async () => {
    const newTodo = {
      id: todo.id,
      text: todo.text,
      completed: todo.completed ? false : true,
    };

    await editTodo(newTodo);
    incrementKey();
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
