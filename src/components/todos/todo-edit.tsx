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
import { editTodo } from "@/lib/utils";
import { Todo } from "@/lib/types";

interface Props {
  todo: Todo;
}

const TodoEdit = ({ todo }: Props) => {
  const [input, setInput] = useState("");

  const handleEditTodo = async () => {
    const newTodo = {
      id: todo.id,
      text: input,
      completed: todo.completed,
    };

    await editTodo(newTodo);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="w-8 h-8">
          <Pencil className="w-5 h-5 text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <Input
          id="todo"
          defaultValue={todo.text}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="col-span-3"
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
