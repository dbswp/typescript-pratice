import React from "react";

export default function JoinBtn({ age }: { age: number }) {
  return (
    <>
      {age > 14 ? (
        <label>가입이 가능합니다.</label>
      ) : (
        <label>가입이 불가능합니다.</label>
      )}
      <button
        disabled={age < 14}
        style={
          age > 14
            ? { backgroundColor: "tomato" }
            : { backgroundColor: "orange" }
        }
      >
        가입
      </button>
    </>
  );
}
