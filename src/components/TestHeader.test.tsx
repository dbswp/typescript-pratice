import { render, screen } from "@testing-library/react";
import TestHeader from "./TestHeader";

test("isLogin이 true로 전달이 잘 된 상태에서, userID가 잘 뜨는지 확인", () => {
  render(<TestHeader isLogin={true} userID="dbswp" />);
  const textEl = screen.getByText(/dbswp님 환영합니다.!/i);
  expect(textEl).toBeInTheDocument();
});

test("isLogin이 false일 때, 문구와 button이 정상 출력 되는지 확인", () => {
  render(<TestHeader isLogin={false} />);
  const textEl = screen.getByText(/로그인 해주세요/i);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
