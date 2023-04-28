import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies?: Array<string>;
}

export default function ParentProps() {
  const dbswp: MyProps = {
    name: "dbswp",
    age: 26,
    hobbies: ["study", "reading"],
  };
  return (
    <>
      {/* 전개연산자로 가능 */}
      <Props {...dbswp} />
    </>
  );
}
