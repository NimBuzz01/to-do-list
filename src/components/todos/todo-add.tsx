import React, { useState } from "react";
import { Plus } from "lucide-react";
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
import { v4 as uuidv4 } from "uuid";
import useTodos from "@/hooks/use-todo";

const TodoAdd = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const todos = useTodos();

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    todos.addTodo(newTodo);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1 rounded-full">
          <Plus className="w-5 h-5 dark:text-slate-100" />
          <p className="font-semibold dark:text-slate-100">New Todo</p>
        </Button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={(e) => e.stopPropagation()}
        className="sm:max-w-[600px]"
      >
        <DialogHeader>
          <DialogTitle>Add To-do</DialogTitle>
        </DialogHeader>
        <Input
          id="todo"
          placeholder="Enter Todo..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleAddTodo}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TodoAdd;
