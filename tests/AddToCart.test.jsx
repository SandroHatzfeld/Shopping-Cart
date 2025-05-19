import userEvent from "@testing-library/user-event"
import AddToCart from "../src/components/shop/AddToCart.jsx"
import { render, screen } from "@testing-library/react"
import Cart from "../src/routes/Cart.jsx"

describe("Add To Cart Button", () => {
  it("adds the item to the cart array", async () => {
    const user = userEvent.setup()

    render(
      <>
        <AddToCart />
        <Cart />
      </>
    )

    const button = screen.getByRole("button", { name: "In den Warenkorb" })

    await user.click(button)

    expect(screen.getByTestId("cart-items").textContent).toMatch
  })
})
