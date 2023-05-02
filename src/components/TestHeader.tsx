import React from "react";

export default function TestHeader({
  isLogin,
  userID,
}: {
  isLogin: boolean;
  userID?: string;
}) {
  return (
    <>
      {isLogin ? (
        <h1>{userID}님 환영합니다.!</h1>
      ) : (
        <h1>
          로그인 해주세요
          <button>로그인</button>
        </h1>
      )}
    </>
  );
}
