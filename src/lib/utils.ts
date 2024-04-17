import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DB_BASE_URL } from "../../app.config";
import { Todo } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// get all todos
export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${DB_BASE_URL}/todos`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

// add todo
export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${DB_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

// edit todo
export const editTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${DB_BASE_URL}/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

//delete todo
export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${DB_BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
};
