import { it, expect, expectTypeOf } from "vitest"
import priceRendering from "../src/utils/priceRendering.jsx"

describe("Price Renderer", () => {
  it("returns a string", () => {
    expectTypeOf(priceRendering(1)).toBeString()
  })

	it('return an € sign at the end', () => {
		expect(priceRendering(1)).toBe('1,00 €')
	})

	it('formats it to have a comma for decimal point ', () => {
		expect(priceRendering(4)).toBe('4,00 €')
	})

	it('rounds floats to two decimal places', () => {
		expect(priceRendering(4.322993)).toBe('4,32 €')
	})

	it('handles large numbers', () => {
		expect(priceRendering(113412.44644)).toBe('113412,45 €')
	})
})
