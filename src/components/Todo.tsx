import React from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Trash2Icon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { removeTodo, Todo as TodoT } from "@/features/todos/todosSlice";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/useRedux";

interface Props {
  todo: TodoT;
}

export default function Todo({ todo }: Props) {
  const [checked, setChecked] = React.useState(todo.completed);
  const dispatch = useAppDispatch();

  function handleChecked(checked: CheckedState) {
    setChecked(checked ? true : false);
  }

  return (
    <form className="pr-2 group flex items-center md:items-start gap-4">
      <Checkbox checked={checked} onCheckedChange={handleChecked} />

      <p
        className={cn([
          "line-clamp-1 group-hover:line-clamp-none flex-1",
          checked ? "line-through" : "",
        ])}
      >
        {todo.task}
      </p>

      <Trash2Icon
        size={16}
        className="md:invisible group-hover:visible cursor-pointer"
        onClick={() => dispatch(removeTodo(todo.id))}
      />
    </form>
  );
}
