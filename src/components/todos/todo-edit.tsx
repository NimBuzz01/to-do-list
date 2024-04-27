import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Todo } from "@/lib/types";
import useTodos from "@/hooks/use-todo";

interface Props {
  todo: Todo;
}

const TodoEdit = ({ todo }: Props) => {
  const todos = useTodos();

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleEditTodo = async () => {
    const newTodo = {
      id: todo.id,
      text: input,
      completed: todo.completed,
    };

    todos.editTodo(newTodo);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="w-8 h-8">
          <Pencil className="w-5 h-5 text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={(e) => e.stopPropagation()}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Edit To-do</DialogTitle>
        </DialogHeader>
        <Input
          id="todo"
          defaultValue={todo.text}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleEditTodo}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TodoEdit;
