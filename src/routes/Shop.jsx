import { NavLink, Outlet, useLoaderData } from "react-router-dom"

export default function Shop() {
  const data = useLoaderData()

  
  return (
    <>
      <main id="shop">
        <aside>
          {data.map((category, index) => {
            return <NavLink to={category} key={index}>{category}</NavLink>
          })}
        </aside>
        <Outlet></Outlet>
      </main>
    </>
  )
}
