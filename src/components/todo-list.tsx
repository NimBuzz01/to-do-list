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
    <Card className="rounded-none relative p-2 sm:p-5 max-w-[600px] h-[70dvh] w-full dark:bg-slate-700 bg-slate-100">
      {todos.length > 0 ? (
        <>
          <div className="overflow-y-auto overflow-x-hidden h-[60dvh] scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thin">
            <SortableContext
              items={todos}
              strategy={verticalListSortingStrategy}
            >
              {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
              ))}
            </SortableContext>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-lg font-semibold text-slate-900">
          No Todos 😕
        </div>
      )}
      <div className="absolute -translate-x-1/2 -bottom-5 left-1/2">
        <TodoAdd />
      </div>
    </Card>
  );
};

export default TodoList;
