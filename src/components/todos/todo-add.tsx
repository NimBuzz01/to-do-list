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
import { addTodo } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

const TodoAdd = () => {
  const [input, setInput] = useState("");

  const handleAddTodo = async () => {
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    await addTodo(newTodo);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16"
        >
          <Plus className="w-9 h-9" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <Input
          id="todo"
          placeholder="Enter Todo..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="col-span-3"
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
