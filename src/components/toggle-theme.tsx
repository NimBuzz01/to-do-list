"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border  border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-105 active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
