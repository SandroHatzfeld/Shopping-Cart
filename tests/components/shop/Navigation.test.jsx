import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Navigation from "../../../src/components/Navigation.jsx"

describe("Navigation Component", () => {
  // it("Shows Logo", () => {
  //   render(<Navigation />)
  //   const logo = screen.queryByRole('img')

	// 	expect(logo.src).toContain('./logo.svg')
  // })
	it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false is falsy', () => {
    expect(false).toBe(true);
  });
})
