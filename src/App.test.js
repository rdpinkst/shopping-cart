import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App testing", () => {
  test("renders shopping site description", () => {
    render(<App />);
    const linkElement = screen.getByText(/unique/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('click button', ()=> {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    expect(buttonElement).not.toBeInTheDocument();
  });
  test('click home link', () => {
    render(<App />);
    const linkElement = screen.getByText(/home/i);
    userEvent.click(linkElement);
    expect(linkElement).toBeInTheDocument();
  });
  test('click shop link', () => {
    render(<App />);
    const linkElement = screen.getByText(/shop/i);
    userEvent.click(linkElement);
    expect(linkElement).toBeInTheDocument();
  })
});
