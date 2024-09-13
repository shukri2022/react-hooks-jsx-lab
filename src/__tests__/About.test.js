import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders a <div> with the ID of 'about'", () => {
  const { container } = render(<About />);
  const about = container.querySelector("#about");
  expect(about).toBeInTheDocument();
});

test("the <div> has two child elements", () => {
  const { container } = render(<About />);
  const about = container.querySelector("#about");
  // Updated to check for 2 children (h2 and p)
  expect(about.children).toHaveLength(2);
});

test("renders a <h2> with the text 'About Me'", () => {
  render(<About />);
  const h2 = screen.queryByText("About Me");
  expect(h2).toBeInTheDocument();
  expect(h2.tagName).toBe("H2");
});

test("renders a <p> element", () => {
  const { container } = render(<About />);
  const p = container.querySelector("p");
  expect(p).toBeInTheDocument();
});
