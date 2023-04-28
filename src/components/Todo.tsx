import React, { useRef, useState } from "react";
import List from "./List";

export interface Task {
  task: string;
  done: boolean;
}

export default function Todo() {
  const [taskList, setTaskList] = useState<Array<Task>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addText = (): void => {
    // let copyArr: Task[] = [...taskList];
    if (inputRef.current !== null) {
      let newTask: Task = { task: inputRef.current.value, done: false };
      setTaskList([...taskList, newTask]);
      // copyArr.push(newTask);
      // setTaskList((cur: Array<Task>) => copyArr);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={addText}>할 일 추가</button>
      <h1>할 일 목록</h1>
      {taskList?.map((el, idx: number) => (
        <List key={idx} task={el.task} done={el.done} />
      ))}
    </>
  );
}
