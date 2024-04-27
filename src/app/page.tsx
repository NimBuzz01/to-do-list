"use client";

import TodoList from "@/components/todo-list";
import { Todo } from "@/lib/types";
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
import useTodos from "@/hooks/use-todo";

export default function Home() {
  const todos = useTodos();

  const reorderTodos = (
    todos: Todo[],
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => {
    const originalPos = todos.findIndex((item) => item.id === activeId);
    const newPos = todos.findIndex((item) => item.id === overId);

    if (originalPos === -1 || newPos === -1) {
      alert("Invalid todo IDs provided.");
      return todos;
    }

    const reorderedTodos = [...todos];
    const [movedTodo] = reorderedTodos.splice(originalPos, 1);
    reorderedTodos.splice(newPos, 0, movedTodo);

    return reorderedTodos;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    const updatedTodos = reorderTodos(todos.todos, active.id, over.id);
    todos.setTodos(updatedTodos);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 4,
    },
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <TodoList todos={todos.todos} />
      </DndContext>
    </main>
  );
}
