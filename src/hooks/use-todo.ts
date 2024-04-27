import { Todo } from "@/lib/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TodoStore {
  todos: Todo[];
  setTodos: (data: Todo[]) => void;
  addTodo: (data: Todo) => void;
  editTodo: (data: Todo) => void;
  checkTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  removeAll: () => void;
}

const useTodos = create(
  persist<TodoStore>(
    (set, get) => ({
      todos: [],
      setTodos: (data: Todo[]) => set({ todos: data }),
      addTodo: (data: Todo) => {
        const currentItems = get().todos;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          //   return alert("Todo already exists");
        }
        set({ todos: [...get().todos, data] });
      },
      editTodo: (data: Todo) => {
        const currentItems = get().todos;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id
        );

        if (existingItemIndex !== -1) {
          currentItems[existingItemIndex] = data;
          set({ todos: currentItems });
          //   alert("Todo updated successfully");
        } else {
          //   alert("Todo not found");
        }
      },
      checkTodo: (id: string) => {
        const currentItems = get().todos;
        const todoToCheck = currentItems.find((item) => item.id === id);

        if (todoToCheck) {
          todoToCheck.completed = !todoToCheck.completed;
          set({ todos: currentItems });
          //   alert("Todo status updated");
        } else {
          //   alert("Todo not found");
        }
      },
      removeTodo: (id: string) => {
        set({ todos: get().todos.filter((item) => item.id !== id) });
        // alert("Todo removed");
      },
      removeAll: () => {
        set({ todos: [] });
        // alert("Todos cleared");
      },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodos;
