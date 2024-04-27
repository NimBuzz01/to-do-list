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
        <Button
          size="icon"
          className="w-16 h-16 bg-green-500 rounded-full hover:bg-green-600"
        >
          <Plus className="w-9 h-9" />
        </Button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={(e) => e.stopPropagation()}
        className="sm:max-w-[425px]"
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
