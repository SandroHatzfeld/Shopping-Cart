import { Outlet, useLoaderData } from "react-router-dom"
import CategoryListItem from '../components/shop/CategoryListItem.jsx'
import { useState } from 'react'

export default function ListLayout() {
  const data = useLoaderData()

  const [navCollapsed, setNavCollapsed] = useState(true)

  return (
    <>
      <main id="list-layout">
        <div className={`toggleSidebar ${navCollapsed && 'collapsed'}`} onClick={() => setNavCollapsed(!navCollapsed)}></div>
        <aside className={navCollapsed && 'collapsed'}>
          {data.categories.map((category) => {            
            return (
              <CategoryListItem level={0} key={category.name} name={category.name} subcategories={category.subcategories}/>
            )
          })}
        </aside>
        <Outlet></Outlet>
      </main>
    </>
  )
}
