import React from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "./ui/checkbox";
import { Todo as TodoT } from "@/features/todos/todosSlice";

interface Props {
  todo: TodoT;
}

export default function Todo({ todo }: Props) {
  const [checked, setChecked] = React.useState(todo.completed);

  function handleChecked(checked: CheckedState) {
    setChecked(checked ? true : false);
  }

  return (
    <form className="flex items-center gap-4">
      <Checkbox checked={checked} onCheckedChange={handleChecked} />
      <p>{todo.task}</p>
    </form>
  );
}
