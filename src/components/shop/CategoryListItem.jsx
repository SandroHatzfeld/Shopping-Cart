import { NavLink } from "react-router-dom"

export default function CategoryListItem({ name, subcategories }) {
  return (
    <div className="category-item">
      <div className='category-title'>
        <NavLink to={name}>{name}</NavLink>
        <button className="toggleListing"></button>
      </div>
      {subcategories ? (
        subcategories.map((category) => {
          return (
            <CategoryListItem
              key={category.name}
              name={category.name}
              subcategories={category.subsubcategories}
            />
          )
        })
      ) : (
        <> </>
      )}
    </div>
  )
}
