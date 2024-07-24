import React from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/hooks/useRedux";
import { addTodo } from "@/features/todos/todosSlice";

export default function NewTodo() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [checked, setChecked] = React.useState(false);

  const dispatch = useAppDispatch();

  function handleChecked(checked: CheckedState) {
    setChecked(checked ? true : false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef.current) {
      const task = inputRef.current.value.trim();
      if (task) {
        dispatch(addTodo({ task, completed: checked }));
        inputRef.current.value = "";
      }
    }
  }

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <Checkbox checked={checked} onCheckedChange={handleChecked} />
      <input
        ref={inputRef}
        onBlur={(e) => e.target.focus()}
        type="text"
        name="task"
        className="focus-visible:outline-transparent"
      />
    </form>
  );
}
