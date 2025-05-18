import { NavLink, Outlet, useLoaderData } from "react-router-dom"

export default function ListLayout() {
  const data = useLoaderData()

  return (
    <>
      <main id="list-layout">
        <aside>
          {data.map((category, index) => {
            return (
              <div className="category-item" key={index}>
                <NavLink to={category} >
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
