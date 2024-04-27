import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import useTodos from "@/hooks/use-todo";

interface Props {
  id: string;
}

const TodoDelete = ({ id }: Props) => {
  const todos = useTodos();

  const handleDeleteTodo = async () => {
    todos.removeTodo(id);
  };

  return (
    <Button
      onClick={handleDeleteTodo}
      size="icon"
      variant="ghost"
      className="w-8 h-8"
    >
      <Trash2 className="w-5 h-5 text-red-500" />
    </Button>
  );
};

export default TodoDelete;
