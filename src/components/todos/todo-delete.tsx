import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { deleteTodo } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const TodoDelete = ({ id }: Props) => {
  const router = useRouter();

  const handleDeleteTodo = async () => {
    await deleteTodo(id);
    router.refresh();
  };

  return (
    <Button
      onClick={handleDeleteTodo}
      size="icon"
      variant="ghost"
      className="w-8 h-8"
    >
      <Trash2 className="w-5 h-5 text-red-600" />
    </Button>
  );
};

export default TodoDelete;
