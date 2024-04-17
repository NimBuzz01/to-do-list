"use client";

import TodoList from "@/components/todo-list";
import { Todo } from "@/lib/types";
import { getAllTodos } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const getTodoPosition = (id: UniqueIdentifier) =>
    todos.findIndex((todo) => todo.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    setTodos((todos) => {
      const originalPos = getTodoPosition(active.id);
      const newPos = getTodoPosition(over.id);

      return arrayMove(todos, originalPos, newPos);
    });
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(
    mouseSensor,
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <TodoList todos={todos} />
      </DndContext>
    </main>
  );
}
