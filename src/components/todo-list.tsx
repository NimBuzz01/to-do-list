import { Todo } from "@/lib/types";
import React from "react";
import TodoItem from "./todo-item";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card } from "./ui/card";
import TodoAdd from "./todos/todo-add";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <Card className="relative p-5 max-w-[600px] h-[80dvh] w-full dark:bg-slate-800 bg-slate-100">
      {todos.length > 0 ? (
        <>
          <div className="overflow-y-auto overflow-x-hidden h-[70dvh] scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thin">
            <SortableContext
              items={todos}
              strategy={verticalListSortingStrategy}
            >
              {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} />
              ))}
            </SortableContext>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <TodoAdd />
          </div>
        </>
      ) : (
        <p className="h-full w-full flex items-center justify-center">
          No todos
        </p>
      )}
    </Card>
  );
};

export default TodoList;
