import React, { useRef, useState } from "react";

export default function Input() {
  const [string, setString] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  // const handleChange = (): void => {
  //   if (inputRef.current !== null) setString(inputRef.current.value);
  // };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setString(e.target.value);
  };

  return (
    <>
      <h1>인풋 값을 출력 : {string}</h1>
      <input ref={inputRef} onChange={handleChange2} />
    </>
  );
}
