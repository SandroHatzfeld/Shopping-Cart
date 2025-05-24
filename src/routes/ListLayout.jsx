import { Outlet, useLoaderData } from "react-router-dom"
import CategoryListItem from '../components/shop/CategoryListItem.jsx'

export default function ListLayout() {
  const data = useLoaderData()

  return (
    <>
      <main id="list-layout">
        <aside>
          {data.categories.map((category) => {
            return (
              <CategoryListItem key={category.name} name={category.name} categories={category.subcategories}/>
            )
          })}
        </aside>
        <Outlet></Outlet>
      </main>
    </>
  )
}
