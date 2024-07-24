import React from "react";
import NewTodo from "@/components/NewTodo";
import Todo from "@/components/Todo";
import { useAppSelector } from "@/hooks/useRedux";

export default function App() {
  const todosRef = React.useRef<HTMLDivElement>(null);
  const todos = useAppSelector((state) => state.todos);

  React.useEffect(() => {
    if (todosRef.current) {
      todosRef.current.lastElementChild?.scrollIntoView();
    }
  }, [todos]);

  return (
    <main className="container max-w-3xl min-h-screen flex flex-col justify-center gap-2">
      <h1 className="text-3xl font-bold">Todos</h1>
      <div
        ref={todosRef}
        className="flex flex-col gap-2 max-h-96 overflow-y-auto"
      >
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>

      <NewTodo />
    </main>
  );
}
