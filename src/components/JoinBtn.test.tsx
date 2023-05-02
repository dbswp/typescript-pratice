import { render, screen } from "@testing-library/react";
import JoinBtn from "./JoinBtn";

test("13살 이상이면 회원가입 가능한가?", () => {
  render(<JoinBtn age={13} />);
  const textEl = screen.getByText(/가입이 불가능합니다./);
  const btnEl = screen.getByRole("button");

  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({
    background: "orange",
  });
});
