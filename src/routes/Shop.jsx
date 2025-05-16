import { NavLink, Outlet, useLoaderData } from "react-router-dom"

export default function Shop() {
  const data = useLoaderData()

  return (
    <>
      <main id="shop">
        <aside>
          {data.map((category, index) => {
            return (
              <div className="category-item">
                <NavLink to={category} key={index}>
                  {category}
                </NavLink>
                <button className="toggleListing"></button>
              </div>
            )
          })}
        </aside>
        <Outlet></Outlet>
      </main>
    </>
  )
}
